import React, { useContext, useEffect, useState } from "react";
import styles from "../../styleDashboard/ResponseLastChild.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileZipper } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { ContextUser, useUser } from "../../context/Context";
export default function DataSiteResponseMassacre() {
  const [martyrDisplay, setMartyrDataDisplay] = useState([]);
  const [loadingdel, setLoadingDel] = useState(false);
  const { getMascersUser } = useUser();
    const { setOpenAlert, setOpenAlertStore } = useContext(ContextUser);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    async function getMartyr() {
      await axios
        .get(`https://syrianrevolution1.com/massacres/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((result) => {
          setMartyrDataDisplay(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getMartyr();
  }, [id]);

  ///////////////////////
  function openImage(src) {
    setOpenAlert(true);
    setOpenAlertStore(src);
  }
  //////////////////handleDelete/////////////////
  async function handleDeletePost() {
    setLoadingDel(true);
    await axios
      .delete(`https://syrianrevolution1.com/massacres/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data === "massacres Deleted Successfully") {
          setLoadingDel(false);
          navigate("/dashboard/dataDisplaySite");
          getMascersUser();
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
    setLoadingDel(false);
  }

  /////////////////////////////
  return (
    <div className={styles.DisplayMartysDash}>
      {" "}
      <div className={`headDashboard`}>
        <p> البيانات المعروضة بالموقع</p>
      </div>
      <div className={styles.details}>
        <div className={styles.allDetailseRight}>
          <div className={styles.detailsright}>
            <h6>العنوان : </h6>
            <p>{martyrDisplay.title}</p>
          </div>

          <div className={styles.detailsright}>
            <h6> المحافظة : </h6>
            <p>
              {martyrDisplay.governorate !== undefined &&
              martyrDisplay.governorate !== "undefined"
                ? martyrDisplay.governorate
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>الجهة المسؤؤلة : </h6>
            <p>
              {" "}
              {martyrDisplay.responsibleAuthority !== undefined &&
              martyrDisplay.responsibleAuthority !== "undefined"
                ? martyrDisplay.responsibleAuthority
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6> الصورة : </h6>
            <br />
            <p>
              {" "}
              {martyrDisplay.profileImage &&
              martyrDisplay.profileImage === "undefined" ? (
                "لم تتم الاضافة"
              ) : martyrDisplay.profileImage !== "undefined" ? (
                <img
                  src={`https://syrianrevolution1.com/postImages/${martyrDisplay.profileImage}`}
                  alt="martyr"
                  style={{ width: "100px" }}
                  onClick={() => {
                    openImage(
                      `https://syrianrevolution1.com/postImages/${martyrDisplay.profileImage}`
                    );
                  }}
                />
              ) : (
                "لم تتم الاضافة"
              )}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6> الوثائق و الملفات : </h6>
            <br />
            <div>
              {" "}
              {martyrDisplay.documents !== undefined &&
              martyrDisplay.documents !== "undefined"
                ? martyrDisplay.documents.map((doc, index) => (
                    <div key={index} style={{ display: "inline" }}>
                      {doc.slice(-4).toLowerCase() === ".jpg" ||
                      doc.slice(-4).toLowerCase() === ".png" ||
                      doc.slice(-5).toLowerCase() === ".jpeg" ? (
                        <img
                          src={`https://syrianrevolution1.com/postImages/${doc}`}
                          alt="documents"
                          style={{ width: "100px" }}
                          onClick={() => {
                            openImage(
                              `https://syrianrevolution1.com/postImages/${doc}`
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
        </div>
        <div className={styles.detailsLeft}>
          <h6>شرح مفصل : </h6>{" "}
          {martyrDisplay.details !== undefined &&
          martyrDisplay.details !== "undefined"
            ? martyrDisplay.details
            : "لم تتم الاضافة"}{" "}
        </div>
      </div>
      <div className={styles.btnbottom}>
        <button
          className="btn btn-warning"
          onClick={() =>
            navigate(
              `/dashboard/dataChildDisplaySitemascrupdate/${martyrDisplay._id}`
            )
          }
        >
          تعديل
        </button>
        <button className="btn btn-danger" onClick={handleDeletePost}>
          {loadingdel ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "حذف"
          )}
        </button>
      </div>
    </div>
  );
}


