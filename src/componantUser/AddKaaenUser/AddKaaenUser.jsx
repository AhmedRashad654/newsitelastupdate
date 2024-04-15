import { React, useContext, useState } from "react";
import styles from "../AddSahedUser/AddShahed.module.css";
import { ContextUser } from "../../context/Context";
import Joi from "joi";

export default function AddMogramUser() {
  const { setOpenAuth } = useContext(ContextUser);
  //////////////////////////////////////////////////////////

  const [addData, setAddData] = useState({
    category: "Traitors",
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
  console.log(imageProfile);
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
      formData.append("category", addData.category);
      formData.append("content", addData.content);

      try {
        setLoading(true);
        const response = await fetch(
          `https://syrianrevolution1.com/lists/${localStorage.getItem(
            "idUserLogin"
          )}`,
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        const result = await response.json();
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
    <div>
      <form action="" className={styles.form}>
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
        {successAdd && setOpenAuth("successaddinform")}
        <div className={styles.headForm}>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor="">اسم الخائن</label>
              <input
                type="text"
                placeholder="اسم الخائن"
                className="form-control"
                name="name"
                onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> المحافظة</label>
              <input
                type="text"
                placeholder="   المحافظة"
                className="form-control"
                name="governorate"
                onChange={handlechange}
              />
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> رابط خارجي</label>
              <input
                type="text"
                name="externalLinks"
                placeholder="رابط خارجي"
                className="form-control"
                onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <p style={{ marginBottom: "5px", fontSize: "12px" }}>
                صورة (اجباري)
              </p>
              <label htmlFor="file-upload" className={styles.customfileupload}>
                ارفع الصورة
              </label>
              <input
                type="file"
                name="selfImg"
                id="file-upload"
                onChange={handleChangeImageProfile}
              />
            </div>
          </div>
          <div className={styles.input1}>
            <label htmlFor="">شرح مفصل</label>
            <textarea
              name="content"
              id=""
              className="form-control"
              onChange={handlechange}
            ></textarea>
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
            " اضافة بيانات"
          )}
        </button>
      </div>
    </div>
  );
}







