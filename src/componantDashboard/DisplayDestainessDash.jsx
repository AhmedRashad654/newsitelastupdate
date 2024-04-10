import React, { useEffect, useState } from 'react'
import styles from "../styleDashboard/DisplayMartysDash.module.css";
import axios from 'axios'
export default function DisplayDestainessDash() {
    const [detainessDisplay, setdetainessDataDisplay] = useState([]);
    async function getMartyr() {
      await axios
        .get(
          `https://syrianrevolution1.com/childData/${localStorage.getItem(
            "idMarter"
          )}`
        )
        .then((result) => setdetainessDataDisplay(result.data))
        .catch((error) => {
          console.log(error);
        });
    }
    useEffect(() => {
      getMartyr();
    }, []);

    console.log(detainessDisplay);
  return (
    <div className={styles.DisplayMartysDash}>
      {" "}
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / معتقلين / بيانات المعتقل</p>
      </div>
      <div className={styles.details}>
        <div className={styles.allDetailseRight}>
          <div className={styles.detailsright}>
            <h6>اسم المعتقل : </h6>
            <p>{detainessDisplay.name}</p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الاب : </h6>
            <p>
              {" "}
              {detainessDisplay.fatherName &&
              detainessDisplay.fatherName === "undefined"
                ? "لم تتم الاضافة"
                : detainessDisplay.fatherName !== "undefined"
                ? detainessDisplay.fatherName
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الام : </h6>
            <p>
              {" "}
              {detainessDisplay.motherName &&
              detainessDisplay.motherName === "undefined"
                ? "لم تتم الاضافة"
                : detainessDisplay.motherName !== "undefined"
                ? detainessDisplay.motherName
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>كنية المعتقل : </h6>
            <p>
              {" "}
              {detainessDisplay.nikeName &&
              detainessDisplay.nikeName === "undefined"
                ? "لم تتم الاضافة"
                : detainessDisplay.nikeName !== "undefined"
                ? detainessDisplay.nikeName
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>مكان الحدث : </h6>
            <p>
              {" "}
              {detainessDisplay.place && detainessDisplay.place === "undefined"
                ? "لم تتم الاضافة"
                : detainessDisplay.place !== "undefined"
                ? detainessDisplay.place
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6>المواليد : </h6>
            <p>
              {" "}
              {detainessDisplay.dateOfBirth !== undefined &&
              detainessDisplay.dateOfBirth !== "undefined"
                ? detainessDisplay.dateOfBirth &&
                  detainessDisplay.dateOfBirth.slice(0, 10)
                : "لم تتم الاضافة"}{" "}
            </p>
            ;
          </div>
          <div className={styles.detailsright}>
            <h6>الجهة المسؤؤلة : </h6>
            <p>
              {" "}
              {detainessDisplay.responsibleAuthority &&
              detainessDisplay.responsibleAuthority === "undefined"
                ? "لم تتم الاضافة"
                : detainessDisplay.responsibleAuthority !== "undefined"
                ? detainessDisplay.responsibleAuthority
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6> الوثائق و الملفات : </h6>
            <p>
              {" "}
              {detainessDisplay.documents !== undefined &&
              detainessDisplay.documents !== "undefined"
                ? detainessDisplay.documents.map((doc , index) => <span key={index}>{doc}</span>)
                : "لم تتم الاضافة"}{" "}
            </p>
          </div>
        </div>
        <div className={styles.detailsLeft}>
          <h6>شرح مفصل : </h6>{" "}
          {detainessDisplay.details && detainessDisplay.details === "undefined"
            ? "لم تتم الاضافة"
            : detainessDisplay.details !== "undefined"
            ? detainessDisplay.details
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





