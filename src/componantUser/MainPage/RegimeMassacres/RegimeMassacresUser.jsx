import React, { useEffect, useState } from 'react'
import './RegimeMassacresUser.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function RegimeMassacresUser() {
    const [ lastNews, setLastNews ] = useState( [] );
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get( "https://syrianrevolution1.com/lists" ).then( ( result ) =>
            setLastNews( result.data.data.filter( ( e ) => (
    e.category === "lastNews"
        )))).catch((error)=>console.log(error));
    }, [] )
  return (
    <>
      <section className="regime" style={{marginBottom:'50px'}}>
        <div className="container py-2">
          <div className="row gy-3 mb-4">
            {lastNews.slice(0, 8).map((last,i) => (
              <div className="col-md-3" key={i}>
                <div className="image mb-2">
                  <img
                    src={`https://syrianrevolution1.com/postImages/${last.selfImg}`}
                    alt="home"
                    className=" w-100 rounded-3 fimg"
                    
                  />
                </div>
                <p>
                  { last.name }
                  <br/>
                  <button
                    className="btu d-inline-block mx-1 px-3 rounded-3"
                    onClick={() => navigate(`/newsDetails/${last._id}`)}
                  >
                    المزيد
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  ); 
}
