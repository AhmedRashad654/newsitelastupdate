import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './SliderBlackList.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SliderBlackList() {
  const [symbol, setSymbol] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://syrianrevolution1.com/lists/userView`)
      .then((result) =>
        setSymbol(result.data.data.filter((e) => e.category === "Traitors"))
      )
      .catch((error) => console.log(error));
  }, []);
  console.log(symbol);
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
    dots: true,
    infinite: symbol.length > 1 ? true : false,
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
            {symbol.map((sym) => (
              <div className="slide mx-2">
                <div className="image mb-2 mx-2 ">
                  <img
                    src={`https://syrianrevolution1.com/postImages/${sym.selfImg}`}
                    alt="symbolThowra"
                    className=" w-100 slide-image"
                  />
                </div>
                <p className="px-2" style={{ textAlign: "center" }}>
                  {sym?.name ? sym?.name : ""}
                  <br />
                  <button
                    className=" d-inline-block mx-1  rounded-3 btu"
                    onClick={() => navigate(`/newsDetails/${sym._id}`)}
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
