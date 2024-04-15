import React, { useState } from 'react';
import styles from './StyleUpdateUser.module.css';
import { useParams } from 'react-router-dom';
export default function UpdateSiteMascers() {
  //////////////////////////////////
  const [userUpdate, setUserUpdate] = useState({});
  const [ loading, setLoading ] = useState( false );
  //////////////////////////
  const [ success, setSuccess ] = useState( false );
  ////////////////////////////////////
  const { id } = useParams();
  ////////////function handleChange///////////////
  function handlechange(e) {
    setUserUpdate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  /////////handle image////////////////
  const [imageProfile, setImageProfile] = useState("");
  function handleImg(e) {
    setImageProfile(e.target.files[0]);
  }
  /////////////////function submit ///////////////////
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (
      userUpdate.title !== "" &&
      userUpdate.title !== undefined &&
      userUpdate.title !== null
    ) {
      formData.append("title", userUpdate.title);
    }
    if (
      userUpdate.governorate !== "" &&
      userUpdate.governorate !== undefined &&
      userUpdate.governorate !== null
    ) {
      formData.append("governorate", userUpdate.governorate);
    }
    if (
      userUpdate.details !== "" &&
      userUpdate.details !== undefined &&
      userUpdate.details !== null
    ) {
      formData.append("details", userUpdate.details);
    }
    if (
      imageProfile !== null &&
      imageProfile !== undefined &&
      imageProfile !== ""
    ) {
      formData.append("profileImage", imageProfile);
    }

    try {
      setLoading( true );
      setSuccess( false );
      const response = await fetch(
        `https://syrianrevolution1.com/massacres/update/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          body: formData,
        }
      );
      const result = await response.json();
      setLoading(false);
      console.log(result);
      if (result.data._id) {
       setSuccess(true)
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.AddSuperVisor}>
      <div className={styles.head}>
        <p>البيانات المعروضة بالموقع / تحديث بيانات</p>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.headForm}>
          {success && (
            <p
              className="alert alert-success alerthemself"
              style={{ width: "100%", transform: "translatey(10px)" }}
            >
              تم التحديث بنجاح
            </p>
          )}
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> الاسم </label>
              <input
                name="title"
                type="text"
                placeholder="الاسم "
                className="form-control"
                onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> المحافظة</label>
              <input
                name="governorate"
                type="text"
                placeholder=" المحافظة "
                className="form-control"
                onChange={handlechange}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <p style={{ fontSize: "12px", marginBottom: "5px" }}>الصورة</p>
              <label htmlFor="fsa3" className={`customfileupload`}>
                {" "}
                ارفع الملف{" "}
              </label>
              <input
                name="profileImage"
                id="fsa3"
                type="file"
                className="form-control"
                onChange={handleImg}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp2}>
              <label>المحتوي</label>
              <textarea
                name="details"
                id="fsa3"
                type="file"
                className="form-control"
                onChange={handlechange}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.btnbottom}>
        <button
          className={`add`}
          style={{ color: "white", backgroundColor: "green" }}
          onClick={handleSubmit}
        >
          {loading ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "    تحديث"
          )}
        </button>
      </div>
    </div>
  );
}

