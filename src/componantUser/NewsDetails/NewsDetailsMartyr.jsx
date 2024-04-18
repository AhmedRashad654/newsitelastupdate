import React, { useContext, useEffect, useState } from 'react'
import MainNav from '../MainNav/MainNav';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFileZipper } from '@fortawesome/free-solid-svg-icons';
import { ContextUser } from '../../context/Context';
import AlertImageDash from '../../componantDashboard/AlertImageDash/AlertImageDash';
export default function NewsDetailsMartyr() {
  const [ single, setSingle ] = useState( [] );
     const { setOpenAlert, setOpenAlertStore ,openAlert,openAlertStore} = useContext(ContextUser);
  const { id } = useParams();
  useEffect(() => {
    async function getSingle() {
      await axios
        .get(`https://syrianrevolution1.com/childData/${id}`)
        .then( ( result ) => {
          setSingle( result.data.childData );
     
        } )
        .catch((error) => console.log(error));
    }
    getSingle();
  }, [id]);

  ///////////////////////////////
  const [archief, setArchirf] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://syrianrevolution1.com/childData").then((result) => {
      setArchirf(result.data.data);
    });
  }, []);
  /////////////////////////////
    function openImage(src) {
      setOpenAlert(true);
      setOpenAlertStore(src);
  }
  return (
    <>
  {
     openAlert && <AlertImageDash src={openAlertStore} />
  }
      <MainNav />
      <Navbar />
      <div className="demonstrations py-3" style={{ marginBottom: "30px" }}>
        <div className="container" style={{ marginTop: "30px" }}>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="col-md-7">
              <h4 style={{ marginBottom: "30px" }}> الاسم : {single?.name}</h4>
              <img
                src={`https://syrianrevolution1.com/imgData/${single?.profileImage}`}
                alt="from single new"
                style={{ width: "100%", marginBottom: "30px" }}
                className="gimg"
              />
              <h6> اسم الاب : </h6>
              <p>
                {" "}
                {single?.fatherName !== "undefined" ? single?.fatherName : ""}
              </p>
              <h6> اسم الام : </h6>
              <p>
                {" "}
                {single?.motherName !== "undefined" ? single?.motherName : ""}
              </p>
              <h6> الكنية : </h6>
              <p> {single?.nikeName !== "undefined" ? single?.nikeName : ""}</p>
              <h6> التفاصيل : </h6>
              <p> {single?.details !== "undefined" ? single?.details : ""}</p>
              <h6>المحافظة : </h6>
              <p>
                {single?.governorate !== "undefined" ? single?.governorate : ""}
              </p>
              <h6>تاريخ الميلاد : </h6>
              <p>
                {single?.dateOfBirth ? single?.dateOfBirth.slice(0, 10) : ""}
              </p>
              <h6> الوثائق والمستندات : </h6>

              <div>
                {" "}
                {single.documents !== undefined &&
                single.documents !== "undefined" &&
                single.documents !== null
                  ? single?.documents.map((doc, index) => (
                      <div key={index} style={{ display: "inline" }}>
                        {doc.slice(-4).toLowerCase() === ".jpg" ||
                        doc.slice(-4).toLowerCase() === ".png" ||
                        doc.slice(-5).toLowerCase() === ".jpeg" ? (
                          <img
                            src={`https://syrianrevolution1.com/imgData/${doc}`}
                            alt="documents"
                            style={{ width: "100px" }}
                                onClick={() => {
                            openImage(
                              `https://syrianrevolution1.com/imgData/${doc}`
                            );
                          }}
                          />
                        ) : (
                          ""
                        )}
                        {doc.slice(-4).toLowerCase() === ".pdf" ||
                        doc.slice(-4) === ".doc" ||
                        doc.slice(-5) === ".docx" ? (
                          <a
                            href={`https://syrianrevolution1.com/imgData/${doc}`}
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
                          <video
                            controls
                            style={{ width: "150px", height: "150px" }}
                          >
                            <source
                              src={`https://syrianrevolution1.com/imgData/${doc}`}
                              type="video/mp4"
                            />
                          </video>
                        ) : (
                          ""
                        )}
                        {doc.slice(-4).toLowerCase() === ".zip" ? (
                          <a
                            href={`https://syrianrevolution1.com/imgData/${doc}`}
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
              <div
                style={{ display: "flex", gap: "10px", margin: "10px 0" }}
              >
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
              <div className=" muted p-2 overflow-hidden">
                {archief.map((e,i) => (
                  <div
                    className="row border-bottom pb-2 pt-2 border-2 overflow-hidden"
                    style={ { backgroundColor: "#fdfafa" } }
                    key={i}
                  >
                    <div className="col-md-4">
                      <img
                        src={`https://syrianrevolution1.com/imgData/${e?.profileImage}`}
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
                          onClick={() =>
                            navigate(`/NewsDetailsMartyr/${e._id}`)
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
