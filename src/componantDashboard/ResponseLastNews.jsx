import React, { useEffect, useState } from 'react'
import styles from '../styleDashboard/DataDisplaySite.module.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function ResponseLastNews() {
  const [martyrDisplay, setMartyrDataDisplay] = useState([]);
  const [ loading, setLoading ] = useState( false );
  const [ loadingupdate, setLoadingUpdate ] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    async function getMartyr() {
      await axios
        .get(`https://syrianrevolution1.com/lists/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((result) => setMartyrDataDisplay(result.data))
        .catch((error) => {
          console.log(error);
        });
    }
    getMartyr();
  }, [id]);
  //////////////////handleDelete/////////////////
  async function handleDeletePost() {
    setLoading(true);
    await axios
      .delete(`https://syrianrevolution1.com/lists/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then( ( response ) => {
        console.log(response)
        if (response.data === "list Deleted Successfully") {
          setLoading(false);
          navigate("/dashboard/dataDisplaySite");
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className={styles.DisplayMartysDash}>
      {" "}
      <div className={`headDashboard`}>
        <p>البيانات المعروضة بالموقع </p>
      </div>
      <div className={styles.details}>
        <div className={styles.allDetailseRight}>
          <div className={styles.detailsright}>
            <h6> العنوان : </h6>
            <p>{martyrDisplay?.name}</p>
          </div>
          <div className={styles.detailsright}>
            <h6> الصورة : </h6>
            <br />
            <p>
              {" "}
              {martyrDisplay?.selfImg &&
              martyrDisplay?.selfImg === "undefined" ? (
                "لم تتم الاضافة"
              ) : martyrDisplay?.selfImg !== "undefined" ? (
                <img
                  src={`https://syrianrevolution1.com/postImages/${martyrDisplay?.selfImg}`}
                  alt="trails"
                  style={{ width: "100px" }}
                />
              ) : (
                "لم تتم الاضافة"
              )}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6> روابط خارجية : </h6>{" "}
            {martyrDisplay?.externalLinks !== undefined &&
            martyrDisplay?.externalLinks !== "undefined" ? (
                <a href={ `https://${martyrDisplay?.externalLinks}` } target='blank'> { martyrDisplay?.externalLinks}</a>

            ) : (
              "لم تتم الاضافة"
            )}{" "}
          </div>
          <div className={styles.detailsright}>
            <h6> المحافظة : </h6>{" "}
            {martyrDisplay?.governorate !== undefined &&
            martyrDisplay?.governorate !== "undefined"
              ? martyrDisplay?.governorate
              : "لم تتم الاضافة"}{" "}
          </div>
        </div>

        <div className={styles.detailsLeft}>
          <h6>شرح مفصل : </h6>{" "}
          {martyrDisplay?.content !== undefined &&
          martyrDisplay?.content !== "undefined"
            ? martyrDisplay?.content
            : "لم تتم الاضافة"}{" "}
        </div>
      </div>
      <div className={styles.btnbottom}>
        <button
          className="btn btn-warning"
          onClick={() =>
            navigate(`/dashboard/dataDisplaySiteupdate/${martyrDisplay._id}`)
          }
        >
          {loadingupdate ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "تعديل"
          )}
        </button>
        <button className="btn btn-danger" onClick={handleDeletePost}>
          {loading ? (
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









