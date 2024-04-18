import React, { useEffect, useState } from 'react'
import MainNav from '../MainNav/MainNav';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
export default function NewsDetails() {
  const [ single, setSingle ] = useState( [] );
  const { id } = useParams();
       useEffect(() => {
         axios
           .get(`https://syrianrevolution1.com/lists/${id}`)
           .then((result) => setSingle(result.data))
           .catch((error) => console.log(error));
       }, [id]);

  console.log(single)
  ///////////////////////////////
    const [archief, setArchirf] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      axios.get("https://syrianrevolution1.com/lists").then((result) => {
        setArchirf(result.data.data);
      });
    }, []);
  return (
    <>
      <MainNav />
      <Navbar />
      <div className="demonstrations py-3">
        <div className="container" style={{ marginTop: "30px" }}>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="col-md-8">
              <h4 style={{ marginBottom: "30px" }}>
                {" "}
                العنوان : {single?.name}
              </h4>
              <img
                src={`https://syrianrevolution1.com/postImages/${single?.selfImg}`}
                alt="from single new"
                style={{ width: "100%", marginBottom: "30px" }}
                className="gimg"
              />
              <h6> التفاصيل : </h6>
              <p> {single?.content !== "undefined" ? single?.content : ""}</p>
              <h6>المحافظة : </h6>
              <p>
                {single?.governorate !== "undefined"
                  ? single.externalLinks
                  : ""}
              </p>
              <h6>رابط خارجي : </h6>
              <a
                style={{ marginBottom: "40px", display: "inline-block" }}
                href={`https://${single?.externalLinks} `}
                target="_blank"
                rel="noopener noreferrer"
              >
                {single.externalLinks !== "undefined"
                  ? single.externalLinks
                  : ""}
              </a>
              <div style={{ display: "flex", gap: "10px" ,marginBottom:'10px'}}>
                <img
                  src={`https://syrianrevolution1.com/images/${single?.user?.selfImg}`}
                  alt="profile"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <p>{single?.user?.name}</p>
              </div>
            </div>
            {/* /////////////////////// */}
            <div className="lastSlider1 col-md-4">
              <div className=" muted  overflow-hidden">
                {archief.map((e) => (
                  <div
                    className="row border-bottom pb-2 pt-2 border-2 overflow-hidden"
                    style={{ backgroundColor: "#ECECEC" }}
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
                        {e?.name}
                        <br />
                        <button
                          className=" btu d-inline-block mx-1 px-3 rounded-3"
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
      <Footer />
    </>
  );
}
