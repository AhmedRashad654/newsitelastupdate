import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function LiberatedArchief() {
  const [archief,setArchirf] = useState([]);
  useEffect( () => {
    axios.get( 'https://syrianrevolution1.com/lists' ).then( ( result ) => {
      setArchirf(result.data.data.filter((e) => e.category === "mozaharat"));
   
    })
  }, [] )
  const navigate = useNavigate()
  return (
    <div>
      <div className="demonstrations py-3">
        <div className="container">
          <div className="row gy-3 mb-5">
            <div className="col-md-6 h-100">
              <div className="right h-100">
                <div className="image mb-4">
                  <img
                    src={`https://syrianrevolution1.com/postImages/${archief[0]?.selfImg}`}
                    alt="mozaharat"
                    className=" w-100 rounded-3"
                  />
                </div>
                <div className="info">
                  <p>
                    {archief[0]?.name}<br/>
                    <button
                      className="btu d-inline-block mx-1 px-3 rounded-3"
                      onClick={() =>
                        navigate(`/newsDetails/${archief[0]?._id}`)
                      }
                    >
                      المزيد
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row gy-2">
                {archief.slice(0, 4).map((e) => (
                  <div className="col-md-6">
                    <div className="news">
                      <div className="item">
                        <div className="image">
                          <img
                            src={`https://syrianrevolution1.com/postImages/${e?.selfImg}`}
                            alt="mozaharat"
                            className=" w-100 rounded-3 fimg"
                          />
                        </div>
                        <div className="text">
                          <p style={{marginTop:'10px'}}>
                            {e?.name}<br/>
                            <button
                              className="btu d-inline-block mx-1 px-3 rounded-3"
                              onClick={() =>
                                navigate(`/newsDetails/${archief[0]?._id}`)
                              }
                            >
                              المزيد
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
