import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../../assests/img4.jpg";
import img2 from "../../assests/img3.jpg";
export default function LiberatedArchief() {
  return (
    <div>
        
        <div className="demonstrations py-3">
        <div className="container">
       

          <div className="row gy-3 mb-5">
            <div className="col-md-6 h-100">
              <div className="right h-100">
                <div className="image mb-4">
                  <img src={img1} alt="image" className=" w-100 rounded-3" />
                </div>
                <div className="info">
                  <p>
                    الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
                    الخبر الخبر الخبر الخبر الخبر الخبر الخبر ....
                    <Link className="nav-link d-inline-block mx-1 px-3 rounded-3">
                      المزيد
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row gy-2">
                <div className="col-md-6">
                  <div className="news">
                    <div className="item">
                      <div className="image">
                        <img
                          src={img2}
                          alt="image"
                          className=" w-100 rounded-3"
                        />
                      </div>
                      <div className="text">
                        <p>
                          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
                          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر ....
                          <Link className="nav-link d-inline-block mx-1 px-3 rounded-3">
                            المزيد
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news">
                    <div className="item">
                      <div className="image">
                        <img
                          src={img2}
                          alt="image"
                          className=" w-100 rounded-3"
                        />
                      </div>
                      <div className="text">
                        <p>
                          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
                          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر ....
                          <Link className="nav-link d-inline-block mx-1 px-3 rounded-3">
                            المزيد
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news">
                    <div className="item">
                      <div className="image">
                        <img
                          src={img2}
                          alt="image"
                          className=" w-100 rounded-3"
                        />
                      </div>
                      <div className="text">
                        <p>
                          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
                          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر ....
                          <Link className="nav-link d-inline-block mx-1 px-3 rounded-3">
                            المزيد
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news">
                    <div className="item">
                      <div className="image">
                        <img
                          src={img2}
                          alt="image"
                          className=" w-100 rounded-3"
                        />
                      </div>
                      <div className="text">
                        <p>
                          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
                          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر ....
                          <Link className="nav-link d-inline-block mx-1 px-3 rounded-3">
                            المزيد
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
