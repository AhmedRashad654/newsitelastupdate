import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
export default function FlagBlackList() {
  const navigate = useNavigate();
  const [lastNews, setLastNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://syrianrevolution1.com/lists/userView")
      .then((result) =>
        setLastNews(result.data.data.filter((e) => e.category === "Traitors"))
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="demonstrations py-3 "style={{marginBottom:'100px'}}>
        <div className="container">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col-md-6">
              <div className="row gy-2">
                {lastNews.slice(0, 4).map((e) => (
                  <div className="col-md-6">
                    <div className="news">
                      <div className="item">
                        <div className="image">
                          <img
                            src={`https://syrianrevolution1.com/postImages/${e?.selfImg}`}
                            alt="lastNews"
                            className=" w-100 rounded-3"
                          />
                        </div>
                        <div className="text">
                          <p style={{ margin: "10px 0" }}>
                            {e?.name}
                            <br />
                            <button
                              className=" d-inline-block mx-1 px-3 rounded-3 btu"
                              onClick={() => navigate(`/newsDetails/${e._id}`)}
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
            <div className="lastSlider col-md-5">
              <div className=" muted p-2 overflow-hidden">
                {lastNews.map((e) => (
                  <div
                    className="row border-bottom pb-2 pt-2 border-2 overflow-hidden"
                    style={{ backgroundColor: "#fdfafa" }}
                  >
                    <div className="col-md-4">
                      <img
                        src={`https://syrianrevolution1.com/postImages/${e?.selfImg}`}
                        alt="lastNews"
                        className="w-100"
                      />
                    </div>
                    <div className="col-md-8">
                      <p>
                        { e?.name }
                        <br />
                        <button
                          className="btu d-inline-block mx-1 px-3 rounded-3"
                          onClick={() => navigate(`/newsDetails/${e._id}`)}
                        >
                          المزيد
                        </button>
                      </p>
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




