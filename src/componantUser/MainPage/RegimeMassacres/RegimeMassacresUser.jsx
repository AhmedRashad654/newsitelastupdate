import React from 'react'
import './RegimeMassacresUser.css'
import img1 from '../../../assests/IMG_20240404_160628_144.jpg'
import img2 from '../../../assests/IMG_20240404_160623_080.jpg'
import img3 from '../../../assests/img3.jpg'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'



export default function RegimeMassacresUser() {

    


  return (
    <>
    <section className="regime">
    <div className="container py-2">
        
        <div className="row gy-3 mb-4" >
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="home" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="home1" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="home2" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="Home3" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>

            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="Home3" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="Home4" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="Home5" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="Home6" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
        </div>
       
        
        

    </div>
    </section>
    
    </>
  ) 
}
