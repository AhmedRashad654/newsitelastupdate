import React, { useEffect, useState } from 'react'
import './RegimeMassacresUser.css'
import axios from 'axios'
import SliderGaraemSystem from "../SliderGaraemSystem";
import { useNavigate } from 'react-router-dom';
export default function RegimeMassacresUser() {
    const navigate = useNavigate();
    const [ mascer, setMascer ] = useState( [] );
    useEffect( () => {
        async function getMascers() {
            await axios.get( "https://syrianrevolution1.com/massacres" ).then( ( result ) => {
                setMascer(
                  result.data.massacres.filter((e) => e.responsibleAuthority === 'system')
                );     
        });
        }
        getMascers()
    }, [] )
    
  return (
    <>
      <section className="regime" style={{ marginBottom: "100px" }}>
        <div className="container py-2">
          <div className="row gy-3 mb-4">
            {mascer.slice(0, 8).map((e, i) => (
              <div className="col-md-3" key={i}>
                <div className="image mb-2">
                  <img
                    src={`https://syrianrevolution1.com/postImages/${e.profileImage}`}
                    alt="home"
                    className=" w-100 rounded-3"
                  />
                </div>
                <p>
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
          </div>
        </div>
      </section>
      <SliderGaraemSystem />
    </>
  ); 
}
