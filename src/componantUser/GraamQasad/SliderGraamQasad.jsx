import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./SliderGramaamQasad.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SliderGraamQasad() {
  const navigate = useNavigate();
  const [mascer, setMascer] = useState([]);
  useEffect(() => {
    async function getMascers() {
      await axios
        .get("https://syrianrevolution1.com/massacres")
        .then((result) => {
          setMascer(
            result.data.massacres.filter(
              (e) => e.responsibleAuthority === "qasad"
            )
          );
        });
    }
    getMascers();
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    dots: false,
    infinite: mascer.length > 1?true:false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container">
        <div className="slider-container px-4 position-relative">
          <Slider {...settings}>
            {mascer &&
              mascer.map((e, i) => (
                <div key={i} className="slide mx-2 text-center">
                  <div className="image mb-2 mx-2 ">
                    <img
                      src={`https://syrianrevolution1.com/postImages/${e.profileImage}`}
                      alt="mascers"
                      className=" w-100 slide-image"
                    />
                  </div>
                  <p className="px-2">
                    {e?.title ? e?.title : ""}
                    <br />
                    <button
                      className="btu d-inline-block mx-1 px-3 rounded-3"
                      onClick={() => navigate(`/NewsDetailsMascers/${e._id}`)}
                    >
                      المزيد
                    </button>
                  </p>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
