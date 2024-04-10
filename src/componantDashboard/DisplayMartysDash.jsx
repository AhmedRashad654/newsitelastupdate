import React, { useEffect, useState } from "react";
import styles from "../styleDashboard/DisplayMartysDash.module.css";
import axios from "axios";
export default function DisplayMartysDash() {
  const [martyrDisplay, setMartyrDataDisplay] = useState([]);
  async function getMartyr() {
    await axios
      .get(
        `https://syrianrevolution1.com/childData/${localStorage.getItem(
          "idMarter"
        )}`
      )
      .then((result) => setMartyrDataDisplay(result.data))
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getMartyr();
  }, []);

  console.log(martyrDisplay);
  return (
    <div className={styles.DisplayMartysDash}>
      {" "}
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / شهداء / بيانات الشهيد</p>
      </div>
      {/* <div className={styles.details}>
        <div className={styles.allDetailseRight}>
          <div className={styles.detailsright}></div>
          <div className={styles.detailsright}>
            <h6>اسم الشهيد : </h6>
            <p>
              {" "}
              {martyrDisplay.name !== "undefined"
                ? martyrDisplay.name
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الاب : </h6>
            <p>
              {martyrDisplay.fatherName !== "undefined"
                ? martyrDisplay.fatherName
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الام : </h6>
            <p>
              {" "}
              {martyrDisplay.motherName === "undefined"
                ? "لم تتم الاضافة"
                : martyrDisplay.motherName}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>كنية الشيهد : </h6>
            <p>
              {" "}
              { martyrDisplay.nickname !== "undefined" 
                ? martyrDisplay.nickname
                : "لم تتم ااضافة"}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>مكان الحدث : </h6>
            <p>
              {" "}
              {martyrDisplay.place !== "undefined"
                ? martyrDisplay.place
                : "لم تتم الاضافة"}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>المواليد : </h6>
            <p>
              {" "}
              {martyrDisplay.dateOfBirth &&
              martyrDisplay.dateOfBirth !== "undefined"
                ? martyrDisplay.dateOfBirth.slice(0, 10)
                : "لم تتم الاضافة"}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>الجهة المسؤؤلة : </h6>
            <p> {martyrDisplay.responsibleAuthority !=="undefined"?martyrDisplay.responsibleAuthority:"لم تتم الاضافة"}</p>
          </div>
          <div className={styles.detailsright}>
            <h6> الوثائق و الملفات : </h6>
            {martyrDisplay.documents &&
              martyrDisplay?.documents.map((ma, index) => (
                <p key={index}>{ma}</p>
              ))}
          </div>
        </div>
        <div className={styles.detailsLeft}>
          <h6>شرح مفصل : </h6>
          <p>{martyrDisplay.details !== "undefined"? martyrDisplay.details :'لم تتم الاضافة'}</p>
        </div>
      </div> */}
      <div className={styles.details}>
        <div className={styles.allDetailseRight}>
          <div className={styles.detailsright}>
            <h6>اسم المعتقل : </h6>
            <p>{martyrDisplay.name}</p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الاب : </h6>
            <p>
              {" "}
              {martyrDisplay.fatherName &&
              martyrDisplay.fatherName === "undefined"
                ? "لم تتم الاضافة"
                : martyrDisplay.fatherName !== "undefined"
                ? martyrDisplay.fatherName
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الام : </h6>
            <p>
              {" "}
              {martyrDisplay.motherName &&
              martyrDisplay.motherName === "undefined"
                ? "لم تتم الاضافة"
                : martyrDisplay.motherName !== "undefined"
                ? martyrDisplay.motherName
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>كنية المعتقل : </h6>
            <p>
              {" "}
              {martyrDisplay.nikeName && martyrDisplay.nikeName === "undefined"
                ? "لم تتم الاضافة"
                : martyrDisplay.nikeName !== "undefined"
                ? martyrDisplay.nikeName
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>مكان الحدث : </h6>
            <p>
              {" "}
              {martyrDisplay.place && martyrDisplay.place === "undefined"
                ? "لم تتم الاضافة"
                : martyrDisplay.place !== "undefined"
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
              {martyrDisplay.responsibleAuthority &&
              martyrDisplay.responsibleAuthority === "undefined"
                ? "لم تتم الاضافة"
                : martyrDisplay.responsibleAuthority !== "undefined"
                ? martyrDisplay.responsibleAuthority
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6> الوثائق و الملفات : </h6>
            <p>
              {" "}
              {martyrDisplay.documents !== undefined &&
              martyrDisplay.documents !== "undefined"
                ? martyrDisplay.documents.map((doc, index) => (
                    <span key={index}>{doc}</span>
                  ))
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
        </div>
        <div className={styles.detailsLeft}>
          <h6>شرح مفصل : </h6>{" "}
          {martyrDisplay.details && martyrDisplay.details === "undefined"
            ? "لم تتم الاضافة"
            : martyrDisplay.details !== "undefined"
            ? martyrDisplay.details
            : "لم تتم الاضافة"}{" "}
        </div>
      </div>
      <div className={styles.btnbottom}>
        <button className="btn btn-success">قبول</button>
        <button className="btn btn-danger">رفض</button>
      </div>
    </div>
  );
}
