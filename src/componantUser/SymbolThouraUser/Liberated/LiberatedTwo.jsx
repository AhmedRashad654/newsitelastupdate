import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function LiberatedTwo() {
  const [archief, setArchirf] = useState([]);
  useEffect(() => {
    axios.get("https://syrianrevolution1.com/lists/userView").then((result) => {
        setArchirf( result.data.data.filter( ( e ) => e.category === "takrem" ) );
      
    });
  }, [] );

  const navigate = useNavigate();
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
                    alt="symbolThowra"
                    className=" w-100 rounded-3"
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <p>
                    {/* {archief[0]?.content
                      ? archief[0]?.content.split(" ").slice(0, 10)
                      : ""} */}
                    {archief[0]?.name}<br/>
                    <button
                      className="btu d-inline-block mx-1 px-3 rounded-3 fimg"
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
                {archief.length !== 0 &&
                  archief.slice(0, 4).map((e,i) => (
                    <div className="col-md-6" key={i}>
                      <div className="news">
                        <div className="item">
                          <div className="image">
                            <img
                              src={`https://syrianrevolution1.com/postImages/${e?.selfImg}`}
                              alt="symbolThowra"
                              
                              className=" w-100 rounded-3 fimg"
                            />
                          </div>
                          <div className="text">
                            <p style={{ marginTop: "10px" }}>
                           
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














