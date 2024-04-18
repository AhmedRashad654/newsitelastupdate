import React, { useContext, useEffect, useState } from 'react'
import styles from "../styleDashboard/DisplayMartysDash.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ContextUser, useUser } from "../context/Context";
export default function DisplayTraitorsDash() {
    const { setOpenAlert, setOpenAlertStore } = useContext(ContextUser);
  const [martyrDisplay, setMartyrDataDisplay] = useState([]);
  const [ loading, setLoading ] = useState( false );
   const { getList } = useUser();
  const [loadingAccepted, setLoadingAccepted] = useState(false);
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
  //////////////
  function openImage(src) {
    setOpenAlert(true);
    setOpenAlertStore(src);
  }
  //////////////////handleDelete/////////////////
  async function handleDeletePost() {
    setLoading(true);
    await axios
      .delete(`https://syrianrevolution1.com/lists/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data === "list Deleted Successfully") {
          setLoading(false);
          navigate( "/dashboard/traitors" );
          getList()
        }
      })
      .catch((error) => console.log(error));
  }

  /////////////////////////handleAccepted//////////////

  async function handleAccepted() {
    setLoadingAccepted(true);
    await axios
      .patch(`https://syrianrevolution1.com/lists/accept/${id}`, null, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === "data updated successfully") {
          setLoading(false);
          navigate( "/dashboard/traitors" );
          getList()
        }
      })
      .catch((error) => console.log(error));
  }
  console.log(martyrDisplay);

  return (
    <div className={styles.DisplayMartysDash}>
      {" "}
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / الخائنون / بيانات الخائن</p>
      </div>
      <div className={styles.details}>
        <div className={styles.allDetailseRight}>
          <div className={styles.detailsright}>
            <h6>اسم الخائن : </h6>
            <p>{martyrDisplay.name}</p>
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
                  src={`https://syrianrevolution1.com/postImages/${martyrDisplay.selfImg}`}
                  alt="trails"
                  style={{ width: "100px" }}
                  onClick={() => {
                    openImage(
                      `https://syrianrevolution1.com/postImages/${martyrDisplay.selfImg}`
                    );
                  }}
                />
              ) : (
                "لم تتم الاضافة"
              )}{" "}
            </p>
          </div>
          <div className={styles.detailsright}>
            <h6> روابط خارجية : </h6>{" "}
            {martyrDisplay.externalLinks !== undefined &&
            martyrDisplay.externalLinks !== "undefined" ? (
              <a href={martyrDisplay.externalLinks}> رابط خارجي</a>
            ) : (
              "لم تتم الاضافة"
            )}{" "}
          </div>
          <div className={styles.detailsLeft}>
            <h6>شرح مفصل : </h6>{" "}
            {martyrDisplay.governorate !== undefined &&
            martyrDisplay.governorate !== "undefined"
              ? martyrDisplay.governorate
              : "لم تتم الاضافة"}{" "}
          </div>
        </div>

        <div className={styles.detailsLeft}>
          <h6>شرح مفصل : </h6>{" "}
          {martyrDisplay.content !== undefined &&
          martyrDisplay.content !== "undefined"
            ? martyrDisplay.content
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





