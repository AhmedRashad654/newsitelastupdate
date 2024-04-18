import React from "react";
import Slider from "react-slick";
import "./SliderGramaamDaaeh.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/Context";
export default function SliderGaraemDaaehUser() {
  const navigate = useNavigate();
  const {masc} = useUser()
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",color:'gray' }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",color:'gray' }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    dots: false,
    infinite: masc.filter((e) => e.responsibleAuthority === "daaeh").length > 1?true:false,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container">
        <div className="slider-container px-4 position-relative">
          <Slider {...settings}>
            {masc &&
              masc
                .filter((e) => e.responsibleAuthority === "daaeh")
                .map((e, i) => (
                  <div key={i} className="slide mx-2 text-center">
                    <div className="image mb-2 mx-2 ">
                      <img
                        src={`https://syrianrevolution1.com/postImages/${e.profileImage}`}
                        alt="mascers"
                        className=" w-100 slide-image"
                        style={{height:'250px'}}
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
