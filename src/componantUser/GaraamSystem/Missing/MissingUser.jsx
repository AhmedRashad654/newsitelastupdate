import React from 'react'
import './MissingUser.css'
import img1 from '../../../assests/IMG_20240404_160628_144.jpg'
import img2 from '../../../assests/IMG_20240404_160623_080.jpg'
import img3 from '../../../assests/img3.jpg'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'




export default function MissingUser() {
    
  return (
    <>
    <section className="missing">
    <div className="container py-2">
        <div className="header position-relative py-5">
            <h3 className=' text-danger'>المفقودين</h3>
        </div>
        <div className="row gy-3 mb-4" >
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>

            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="image" className=' w-100 rounded-3' />
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
