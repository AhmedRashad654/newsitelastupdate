import React from 'react'
import img3 from '../../assests/img3.jpg'
import { Link } from "react-router-dom";
import Slider from 'react-slick'
import './SliderSymbolThoura.css'
export default function SliderSymbolThouraUser () {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",}}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className} 
            style={{ ...style, display: "block",}}
            onClick={onClick}
          />
        );
      } 
        let settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows:true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
            ]
        };
  return (
    <div>
      
      <div className='container'>
      <div className="slider-container px-4 position-relative">
        <Slider {...settings}>
            <div className="slide mx-2">
            <div className="image mb-2 mx-2 ">
                    <img src={img3} alt="image" className=' w-100 slide-image' />
                </div>
                <p  className='px-2'>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="slide mx-2">
            <div className="image mb-2 mx-2">
                    <img src={img3} alt="image" className=' w-100 slide-image' />
                </div>
                <p  className='px-2'>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="slide mx-2">
            <div className="image mb-2 mx-2">
                    <img src={img3} alt="image" className=' w-100 slide-image' />
                </div>
                <p className='px-2'>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>

            <div className="slide mx-2">
            <div className="image mb-2 mx-2">
                    <img src={img3} alt="image" className=' w-100 slide-image' />
                </div>
                <p className='px-2'>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>

            
        </Slider>
        </div>
      </div>
    </div>
  )
}
