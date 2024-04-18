import React from 'react'
import './MartyrsUser.css'

import { useNavigate } from 'react-router-dom';
import SliderGraemSliderOne from '../SliderGraemSliderOne';
import { useUser } from '../../../context/Context';



export default function MartyrsUser() {

  const {child} =  useUser()
    const navigate = useNavigate();

  return (
    <>
      <section className="martyrs">
        <div className="container py-2">
          <div className="header position-relative py-5">
            <h3 className=" text-danger">الشهداء</h3>
          </div>
          <div className="row gy-3 mb-4">
            {child &&
              child
                .filter(
                  (e) =>
                    e.category === "martyr" &&
                    e.responsibleAuthority === "system"
                )
                .slice(0, 8)
                .map((e, i) => (
                  <div className="col-md-3" key={i}>
                    <div className="image mb-2">
                      <img
                        src={`https://syrianrevolution1.com/imgData/${e.profileImage}`}
                        alt="martyr"
                        className=" w-100 rounded-3 fimg"
                      />
                    </div>
                    <p>
                      {e?.name ? e?.name : ""}
                      <br />
                      <button
                        className="btu d-inline-block mx-1 px-3 rounded-3"
                        onClick={() => navigate(`/NewsDetailsMartyr/${e._id}`)}
                      >
                        المزيد
                      </button>
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </section>
      <SliderGraemSliderOne />
    </>
  ); 
}
