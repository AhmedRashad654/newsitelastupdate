import React, { useEffect, useState } from 'react'
import MainNav from '../MainNav/MainNav';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFileZipper } from '@fortawesome/free-solid-svg-icons';

export default function NewsDetailsMascers() {
  const [single, setSingle] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getSingle() {
      await axios
        .get(`https://syrianrevolution1.com/massacres/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((result) => setSingle(result.data))
        .catch((error) => console.log(error));
    }
    getSingle();
  }, [id]);

 
  ///////////////////////////////
  const [archief, setArchirf] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://syrianrevolution1.com/massacres").then((result) => {
      setArchirf(result.data.massacres);
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
            <div className="col-md-6">
              <h4 style={{ marginBottom: "30px" }}>
                {" "}
                العنوان : {single?.title}
              </h4>
              <img
                src={`https://syrianrevolution1.com/postImages/${single?.profileImage}`}
                alt="from single new"
                style={{ width: "100%", marginBottom: "30px" }}
              />
              <h6> التفاصيل : </h6>
              <p> {single?.details}</p>
              <h6>المحافظة : </h6>
              <p>{single?.governorate}</p>
              <h6> الوثائق والمستندات : </h6>
              <div>
                {" "}
                {single.documents !== undefined &&
                single.documents !== "undefined" &&
                single.documents !== null
                  ? single.documents.map((doc, index) => (
                      <div key={index} style={{ display: "inline" }}>
                        {doc.slice(-4).toLowerCase() === ".jpg" ||
                        doc.slice(-4).toLowerCase() === ".png" ||
                        doc.slice(-5).toLowerCase() === ".jpeg" ? (
                          <img
                            src={`https://syrianrevolution1.com/postImages/${doc}`}
                            alt="documents"
                            style={{ width: "100px" }}
                          />
                        ) : (
                          ""
                        )}
                        {doc.slice(-4).toLowerCase() === ".pdf" ||
                        doc.slice(-4) === ".doc" ||
                        doc.slice(-5) === ".docx" ? (
                          <a
                            href={`https://syrianrevolution1.com/postImages/${doc}`}
                            style={{ margin: "0 15px" }}
                          >
                            <FontAwesomeIcon
                              icon={faFile}
                              style={{
                                fontSize: "50px",
                                transform: "translateY(15px)",
                              }}
                            />
                          </a>
                        ) : (
                          ""
                        )}
                        {doc.slice(-4).toLowerCase() === ".mp4" ? (
                          <video controls>
                            <source
                              src={`https://syrianrevolution1.com/postImages/${doc}`}
                              type="video/mp4"
                            />
                          </video>
                        ) : (
                          ""
                        )}
                        {doc.slice(-4).toLowerCase() === ".zip" ? (
                          <a
                            href={`https://syrianrevolution1.com/postImages/${doc}`}
                          >
                            <FontAwesomeIcon icon={faFileZipper} />
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    ))
                  : "لم تتم الاضافة"}{" "}
              </div>
            </div>
            {/* /////////////////////// */}
            <div className="lastSlider col-md-4">
              <div className=" muted p-2 overflow-hidden">
                {archief.map((e) => (
                  <div
                    className="row border-bottom pb-2 pt-2 border-2 overflow-hidden"
                    style={{ backgroundColor: "#fdfafa" }}
                  >
                    <div className="col-md-4">
                      <img
                        src={`https://syrianrevolution1.com/postImages/${e?.profileImage}`}
                        alt="lastNews"
                        className="w-100"
                      />
                    </div>
                    <div className="col-md-8">
                      <p>
                        {e?.title}
                        <br />
                        <button
                          className=" btu d-inline-block mx-1 px-3 rounded-3"
                          onClick={() =>
                            navigate(`/NewsDetailsMascers/${e._id}`)
                          }
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
