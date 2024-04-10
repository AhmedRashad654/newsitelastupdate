import React, { useState } from 'react'
import styles from '../styleDashboard/Archief.module.css'
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
export default function Black() {
  const navigate = useNavigate();
    const [addData, setAddData] = useState({
      category: "blacklist",
    });
    const [errorListUser, setErrorListUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorBackUser, setErrorBackUser] = useState(null);
    const [successAdd, setSuccessAdd] = useState(false);
    /////////handle image////////////////
    const [imageProfile, setImageProfile] = useState("");
    function handleChangeImageProfile(e) {
      setImageProfile(e.target.files[0]);
    }
console.log(imageProfile)
    //////////handle change //////////////
    function handlechange(e) {
      setAddData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
    ////////////valid Joi///////////////
    function validationAddUser() {
      let schema = Joi.object({
        name: Joi.string().required().messages({
          "string.empty": "     الاسم  مطلوب",
          "any.required": "     الاسم  مطلوب",
        }),
        category: Joi.string().required(),
        content: Joi.string().allow(""),
        governorate: Joi.string().allow(""),
        externalLinks: Joi.string().allow(""),
      });
      return schema.validate(addData, { abortEarly: false });
    }
    async function handleSubmit(e) {
      e.preventDefault();
      setSuccessAdd(false);
      let responseValidateUser = validationAddUser();
      if (responseValidateUser.error) {
        setErrorListUser([responseValidateUser.error.details]);
      } else {
        setErrorListUser("");
        setSuccessAdd(false);
        const formData = new FormData();
        formData.append("name", addData.name);
        formData.append("selfImg", imageProfile);
        formData.append("externalLinks", addData.externalLinks);
        formData.append("governorate", addData.governorate);
        formData.append( "category", addData.category );
        formData.append("content", addData.content);
        
        try {
          setLoading(true);
          const response = await fetch(
            "https://syrianrevolution1.com/lists/6615a27e9e80b6008bb2f4ed",
            {
              method: "POST",
              body: formData,
              headers: {
                Authorization:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWJvOEBnbWFpbDh1LmNvbSIsImlkIjoiNjYxNWEyN2U5ZTgwYjYwMDhiYjJmNGVkIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTcxMjY5MzkxM30.gcQwtoAZsuH9gqrmQVCJjLGHD3Yf2ehMpybGDYc7uF4",
              
              },
            }
          );
          const result = await response.json();
          // const reponse = await axios.post(
          //   "https://syrianrevolution1.com/lists/6615a27e9e80b6008bb2f4ed"
          // ,formData,);
          console.log(result);
          setLoading(false);
          if (result._id) {
            setSuccessAdd(true);
            setErrorBackUser(null);
            setErrorListUser(null);
          } else {
            setErrorBackUser(result);
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  return (
    <div className={styles.informLastNews}>
      {errorListUser &&
        errorListUser.map((error, index) => (
          <p
            key={index}
            className="alert alert-secondary alerthemself"
            style={{ transform: "translateY(0)", width: "100%" }}
          >
            {error[index].message}
          </p>
        ))}
      {successAdd && (
        <p
          className="alert alert-success alerthemself"
          style={{ transform: "translateY(0)", width: "100%" }}
        >
          تمت الاضافة بنجاح
        </p>
      )}
      {errorBackUser &&
        errorBackUser?.error ===
          "Cannot read property 'filename' of undefined" && (
          <p
            className="alert alert-secondary alerthemself"
            style={{ transform: "translateY(0)", width: "100%" }}
          >
            يرجي رفع الصورة
          </p>
        )}
      <div className={styles.input}>
        <div className={styles.inp1}>
          <label htmlFor=""> الاسم</label>
          <input
            type="text"
            className="form-control"
            placeholder=" الاسم "
            name="name"
            onChange={handlechange}
          />
        </div>
        <div className={styles.inp1}>
          <p style={{ fontSize: "10px", marginBottom: "5px" }}>صورة (اجباري)</p>
          <label htmlFor="f" className="customfileupload">
            {" "}
            الصورة الشخصية
          </label>
          <input
            id="f"
            type="file"
            className="form-control"
            name="selfImg"
            onChange={handleChangeImageProfile}
          />
        </div>
      </div>
      <div className={styles.input}>
        <div className={styles.inp1}>
          <label htmlFor=""> المحافظة</label>
          <input
            type="text"
            className="form-control"
            placeholder="المحافظة"
            name="governorate"
            onChange={handlechange}
          />
        </div>
        <div className={styles.inp1}>
          <label htmlFor="">روابط خاريجية(يوتيوب)-اختياري</label>
          <input
            type="text"
            className="form-control"
            placeholder="رابط خارجي"
            name="externalLinks"
            onChange={handlechange}
          />
        </div>
      </div>
      <div className={styles.inp2}>
        <label htmlFor=""> المحتوي</label>
        <textarea
          name="content"
          id=""
          placeholder="المحتوي "
          className="form-control"
          onChange={handlechange}
        ></textarea>
      </div>

      <div className={styles.btnbottom}>
        <button
          className={`add`}
          style={ { color: "white", backgroundColor: "green" } }
          onClick={handleSubmit}
        >
          {loading ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            " اضافة"
          )}
        </button>
        <button
          className={`add`}
          style={{ border: "1px solid red", color: "red" }}
          onClick={() => navigate("/dashboard")}
        >
          الغاء
        </button>
      </div>
    </div>
  );
}






































//   return (
//     <div className={styles.informLastNews}>
//       {/* بقية الكود هنا */}
//     </div>
//   );
// }
