import React, { useState } from 'react'
import styles from '../styleDashboard/UpdateSuperVisor.module.css';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
export default function UpdateUser() {
  const navigate = useNavigate();
  //////////////////////////////////
  const [ userUpdate, setUserUpdate ] = useState( {} );
  const [ errorListUpdate, setErrorListUpdate ] = useState(  );
      ////////////function handleChange///////////////
      function handlechange(e) {
        setUserUpdate((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }
      /////////handle image////////////////
      const [imageProfile, setImageProfile] = useState("");

      const [loading, setLoading] = useState(false);
      function handleImg(e) {
        setImageProfile(e.target.files[0]);
      }
      ////////////valid Joi///////////////
      function validationAddUser() {
        let schema = Joi.object({
          name: Joi.string().allow(""),
          selfImg: Joi.string().allow(""),
          role: Joi.string().allow(""),
          government: Joi.string().allow(""),
          phone: Joi.string().min(10).allow("").messages({
            "string.min": "    رقم  الهاتف يجب الا يقل عن عشرة ارقام",
          }),
        });
        return schema.validate(userUpdate, { abortEarly: false });
      }
      /////////////////function submit ///////////////////
  async function handleSubmit( e ) {
        setErrorListUpdate('')
        e.preventDefault();
        let responseValidateUser = validationAddUser();
        if (responseValidateUser.error) {
          setErrorListUpdate([responseValidateUser.error.details]);
        } else{
          setErrorListUpdate(null);
          const formData = new FormData();
          if ( userUpdate.name !== "" && userUpdate.name !== undefined && userUpdate.name !== null ) {
            formData.append("name", userUpdate.name);
          }
           if (userUpdate.phone !== "" && userUpdate.phone !== undefined && userUpdate.phone !== null) {
             formData.append("phone", userUpdate.phone);
           }
            if (userUpdate.government !== "" && userUpdate.government !== undefined && userUpdate.government !== null) {
              formData.append("government", userUpdate.government);
          }
                  if (
                    userUpdate.role !== "" &&
                    userUpdate.role !== undefined &&
                    userUpdate.role !== null
                  ) {
                    formData.append("role", userUpdate.role);
                  }
          if (imageProfile !== null && imageProfile !== undefined && imageProfile !== "") {
            formData.append("photo", imageProfile);
          }
          
         
          try {
            setLoading(true);
            const response = await fetch(
              `https://syrianrevolution1.com/users/${localStorage.getItem(
                "IdUpdateUser"
              )}`,
              {
                method: "PATCH",
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
                body: formData,
              }
            );
            const result = await response.json();
            setLoading( false );
            console.log( result );
            if (result.user.createdAt) {
              navigate("/dashboard/userdash");
            }
          } catch (error) {
            console.error(error);
          }
        }
      }

  return (
    <div className={styles.AddSuperVisor}>
      <div className={styles.head}>
        <p>المستخدمون / تحديث بيانات</p>
      </div>
      <form action="" className={styles.form}>
        {errorListUpdate &&
          errorListUpdate.map((error, index) => (
            <p key={index} className="alert alert-secondary alerthemself">
              {error[index].message}
            </p>
          ))}
        <div className={styles.headForm}>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> الاسم بالكامل</label>
              <input
                name="name"
                type="text"
                placeholder="الاسم بالكامل"
                className="form-control"
                onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> رقم الهاتف</label>
              <input
                name="phone"
                type="text"
                placeholder=" رقم الهاتف"
                className="form-control"
                onChange={handlechange}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> المحافظة</label>
              <input
                name="government"
                type="text"
                placeholder=" المحافظة "
                className="form-control"
                onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> الدور</label>
              <select name="role" onChange={handlechange}>
                <option value="">اختر الدور</option>
                <option value="admin">ادمن</option>
                <option value="supervisor">مشرف</option>
                <option value="user">مستخدم</option>
              </select>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <p style={{ fontSize: "12px", marginBottom: "5px" }}>
                الصورة الشخصية
              </p>
              <label htmlFor="fsa" className={`customfileupload`}>
                {" "}
                ارفع الملف{" "}
              </label>
              <input
                name="photo"
                id="fsa"
                type="file"
                className="form-control"
                onChange={handleImg}
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
        <button
          className={`add`}
          style={{ border: "1px solid red", color: "red" }}
          onClick={() => navigate(-1)}
        >
          الغاء
        </button>
      </div>
    </div>
  );
}
