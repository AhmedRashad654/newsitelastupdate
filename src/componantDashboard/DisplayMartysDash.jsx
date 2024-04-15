import React, { useEffect, useState } from "react";
import styles from "../styleDashboard/DisplayMartysDash.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileZipper } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

export default function DisplayMartysDash() {
  const [ martyrDisplay, setMartyrDataDisplay ] = useState( [] );
  const [ loading, setLoading ] = useState( false );
  const [loadingAccepted,setLoadingAccepted] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams()
  useEffect( () => {
      async function getMartyr() {
        await axios
          .get(`https://syrianrevolution1.com/childData/${id}`)
          .then((result) => setMartyrDataDisplay(result.data))
          .catch((error) => {
            console.log(error);
          });
    }
    getMartyr()
  },[id])


  //////////////////handleDelete/////////////////
  async function handleDeletePost() {
   
    setLoading( true );
    await axios
      .delete(
        `https://syrianrevolution1.com/childData/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then( ( response ) => {
        if ( response.data === "childData Deleted Successfully" ) {
          setLoading( false );
          navigate("/dashboard/martyrs");
        }
      })
      .catch((error) => console.log(error));
  }
  /////////////////////////handleAccepted//////////////
  
  async function handleAccepted() {
     
    setLoadingAccepted(true);
    await axios
      .patch(`https://syrianrevolution1.com/childData/${id}`, null,{
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.success === "data updated successfully") {
          setLoading(false);
          navigate("/dashboard/martyrs");
        }
        console.log( response );
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className={styles.DisplayMartysDash}>
      {" "}
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / شهداء / بيانات الشهيد</p>
      </div>
      <div className={styles.details}>
        <div className={styles.allDetailseRight}>
          <div className={styles.detailsright}>
            <h6>اسم الشهيد : </h6>
            <p>{martyrDisplay.name}</p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الاب : </h6>
            <p>
              {" "}
              {martyrDisplay.fatherName !== undefined &&
              martyrDisplay.fatherName !== "undefined"
                ? martyrDisplay.fatherName
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الام : </h6>
            <p>
              {" "}
              {martyrDisplay.motherName !== undefined &&
              martyrDisplay.motherName !== "undefined"
                ? martyrDisplay.motherName
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>كنية الشهيد : </h6>
            <p>
              {" "}
              {martyrDisplay.nickname !== undefined &&
              martyrDisplay.nickname !== "undefined"
                ? martyrDisplay.nickname
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>مكان الحدث : </h6>
            <p>
              {martyrDisplay.place !== undefined &&
              martyrDisplay.place !== "undefined"
                ? martyrDisplay.place
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>المواليد : </h6>
            <p>
              {" "}
              {martyrDisplay.dateOfBirth !== undefined &&
              martyrDisplay.dateOfBirth !== "undefined"
                ? martyrDisplay.dateOfBirth &&
                  martyrDisplay.dateOfBirth.slice(0, 10)
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
                  src={`https://syrianrevolution1.com/imgData/${martyrDisplay.profileImage}`}
                  alt="martyr"
                  style={{ width: "100px" }}
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
                          src={`https://syrianrevolution1.com/imgData/${doc}`}
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
                        <video controls>
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
        <button className="btn btn-success" onClick={handleAccepted}>
          {loadingAccepted ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
          "قبول"
          )}
        </button>
        <button className="btn btn-danger" onClick={handleDeletePost}>
          {loading ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            " رفض"
          )}
        </button>
      </div>
    </div>
  );
}







// async function handleAccepted() {
//   setLoadingAccepted(true);
//   await axios
//     .patch(`https://syrianrevolution1.com/childData/${id}`, null, {
//       headers: {
//         Authorization: localStorage.getItem("token"),
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       // اضف هنا المنطق الإضافي حسب احتياجاتك
//     })
//     .catch((error) => console.log(error));
// }
