import React, { useState }  from "react";
import styles from "./UpdateChild.module.css";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/Context";
export default function ResponseUpdateChild() {
  //////////////////////////////////
  const [userUpdate, setUserUpdate] = useState({});
  const [ loading, setLoading ] = useState( false );
   const { getChildUser } = useUser();
  ////////////////////////////////////
  const [ success, setSuccess ] = useState( false );
  ////////////////////////////
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
      userUpdate.fatherName !== "" &&
      userUpdate.fatherName !== undefined &&
      userUpdate.fatherName !== null
    ) {
      formData.append("fatherName", userUpdate.fatherName);
    }
    if (
      userUpdate.motherName !== "" &&
      userUpdate.motherName !== undefined &&
      userUpdate.motherName !== null
    ) {
      formData.append("motherName", userUpdate.motherName);
    }
    if (
      userUpdate.governorate !== "" &&
      userUpdate.governorate !== undefined &&
      userUpdate.governorate !== null
    ) {
      formData.append("governorate", userUpdate.governorate);
    }
    if (
      userUpdate.dateOfBirth !== "" &&
      userUpdate.dateOfBirth !== undefined &&
      userUpdate.dateOfBirth !== null
    ) {
      formData.append("dateOfBirth", userUpdate.dateOfBirth);
    }
    if (
      userUpdate.nickname !== "" &&
      userUpdate.nickname !== undefined &&
      userUpdate.nickname !== null
    ) {
      formData.append("nickname", userUpdate.nickname);
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
        `https://syrianrevolution1.com/childData/update/${id}`,
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
        setSuccess( true )
        getChildUser();
      } else if ( result === 'Date of birth cannot be in the future' ) {
        alert('التاريخ غير صالح')
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div className={`headDashboard`}>
        <p> تعديل بيانات </p>
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
              <label htmlFor=""> اسم الاب</label>
              <input
                type="text"
                placeholder="  اسم الاب"
                className="form-control"
                name="fatherName"
                onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> اسم الام</label>
              <input
                name="motherName"
                type="text"
                placeholder=" اسم الام "
                className="form-control"
                onChange={handlechange}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> الكنية </label>
              <input
                name="nickname"
                type="text"
                placeholder=" الكنية"
                className="form-control"
                onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> المواليد</label>
              <input
                name="dateOfBirth"
                type="date"
                placeholder="  المواليد"
                className="form-control"
                onChange={handlechange}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <p style={{ fontSize: "10px", marginBottom: "5px" }}>
                صورة  (اجباري)
              </p>
              <label htmlFor="q2" className="customfileupload">
                {" "}
                ارفع الملف هنا
              </label>
              <input
                type="file"
                id="q2"
                name="profileImage"
                onChange={handleImg}
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor="">المحافظة</label>
              <input
                type="text"
                name="governorate"
                className="form-control"
                placeholder="المحافظة"
                onChange={handlechange}
              />
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
        {/* <button
          className={`add`}
          style={{ border: "1px solid red", color: "red" }}
        >
          الغاء
        </button> */}
      </div>
    </div>
  );
}






