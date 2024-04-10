import React, { useState } from "react";
import styles from "../styleDashboard/AddSuperVisor.module.css";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
export default function AddAMartyr() {
  const navigate = useNavigate();
  ///////////////handlechange//////////////
  const [addData, setAddData] = useState({
    category: "adetaine",
    responsibleAuthority: "system",
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
  ////////////handle documents///////////
  const [document, setDocument] = useState("");
  function handleChangeDocuments(e) {
    setDocument(e.target.files[0]);
  }
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
      category: Joi.string().required().messages({
        "string.empty": "التصنيف  مطلوب",
        "any.required": "التصنيف  مطلوب",
      }),
      name: Joi.string().required().messages({
        "string.empty": "     اسم المعتقل مطلوب",
        "any.required": "     اسم المعتقل مطلوب",
      }),
      documents: Joi.string().allow(""),
      nikename: Joi.string().allow(""),
      dateOfBirth: Joi.string().allow(""),
      responsibleAuthority: Joi.string().required().messages({
        "string.empty": "  الجهة المسئولة مطلوبة",
        "any.required": "  الجهة المسئولة مطلوبة",
      }),
      governorate: Joi.string().allow(""),
      fatherName: Joi.string().allow(""),
      motherName: Joi.string().allow(""),
      place: Joi.string().allow(""),

      externalLinks: Joi.string().allow(""),
      details: Joi.string().allow(""),
    });
    return schema.validate(addData, { abortEarly: false });
  }
  console.log(addData);
  async function handleSubmit(e) {
    e.preventDefault();
    let responseValidateUser = validationAddUser();
    if (responseValidateUser.error) {
      setErrorListUser([responseValidateUser.error.details]);
    } else {
      setErrorListUser("");
      setSuccessAdd(false);
      const formData = new FormData();
      formData.append("category", addData.category);
      formData.append("name", addData.name);
      formData.append("profileImage", imageProfile);
      formData.append("documents", document);
      formData.append("nikename", addData.password);
      formData.append("dateOfBirth", addData.government);
      formData.append("responsibleAuthority", addData.phone);
      formData.append("governorate", addData.key);
      formData.append("fatherName", addData.fatherName);
      formData.append("motherName", addData.motherName);
      formData.append("place", addData.place);
      formData.append("externalLinks", addData.externalLinks);
      formData.append("details", addData.details);
      try {
        setLoading(true);
        const response = await fetch(
          "https://syrianrevolution1.com/childData/66153d779eecb45d98ce4e06",
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWJvN0BnbWFpbDh1LmNvbSIsImlkIjoiNjYxNTNkNzc5ZWVjYjQ1ZDk4Y2U0ZTA2Iiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTcxMjY2ODAzOX0.2gsWZzjFCXpETFvEq5wZ81eZ2DGKk9oYgxSjjyYXtxE",
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
  console.log(errorListUser);

  return (
    <div>
      <form action="" className={styles.form}>
        {errorListUser &&
          errorListUser.map((error, index) => (
            <p key={index} className="alert alert-secondary alerthemself">
              {error[index].message}
            </p>
          ))}
        {successAdd && (
          <p className="alert alert-success alerthemself">تمت الاضافة بنجاح</p>
        )}
        {errorBackUser &&
          errorBackUser?.error === "Cannot read property '0' of undefined" && (
            <p className="alert alert-secondary alerthemself">
              يرجي رفع صورة للمعتقل او صورة تدل علي الحدث
            </p>
          )}
        {errorBackUser &&
          errorBackUser?.error ===
            'ChildData validation failed: dateOfBirth: Cast to date failed for value "undefined" (type string) at path "dateOfBirth"' && (
            <p className="alert alert-secondary alerthemself">
              التاريخ غير صالح
            </p>
          )}
        {errorBackUser &&
          errorBackUser?.error ===
            "Cannot read property 'map' of undefined" && (
            <p className="alert alert-secondary alerthemself">
              يرجي رفع وثيقة تثبت الحدث
            </p>
          )}
        <div className={styles.headForm}>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor="">اسم المعتقل</label>
              <input
                name="name"
                type="text"
                placeholder="اسم المعتقل"
                className="form-control"
                onChange={handlechange}
              />
            </div>
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
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> كنية المعتقل</label>
              <input
                name="nikename"
                type="text"
                placeholder=" كنية المعتقل"
                className="form-control"
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
              <label htmlFor=""> المواليد</label>
              <input
                name="dateOfBirth"
                type="date"
                placeholder="  المواليد"
                className="form-control"
                onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> مكان الخدث </label>
              <input
                type="text"
                name="place"
                className="form-control"
                placeholder="مكان الحدث"
                onChange={handlechange}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> الجهة المسؤولة</label>
              <select
                name="responsibleAuthority"
                onChange={handlechange}
                className="form-control"
              >
                <option value="system">النظام</option>
                <option value="daaeh">داعش</option>
                <option value="qasad">قسد</option>
              </select>
            </div>
            <div className={styles.inp1}>
              <p style={{ fontSize: "10px", marginBottom: "5px" }}>
                صورة الشهيد (اجباري)
              </p>
              <label htmlFor="qw" className="customfileupload">
                {" "}
                ارفع الملف هنا
              </label>
              <input type="file" id="qw" onChange={handleChangeImageProfile} />
            </div>
          </div>
          <div className={styles.input}>
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
            <div className={styles.inp1}>
              <p style={{ fontSize: "10px", marginBottom: "5px" }}>
                الوثائق والملفات
              </p>
              <label htmlFor="was" className="customfileupload">
                ارفع المستندات هنا
              </label>
              <input
                type="file"
                id="was"
                name="documents"
                multiple
                className="form-control"
                onChange={handleChangeDocuments}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor="">رابط خارجي</label>
              <input
                type="text"
                name="externalLinks"
                onChange={handlechange}
                className="form-control"
                placeholder="رابط خارجي"
              />
            </div>
          </div>
          <div className={styles.input1}>
            <label htmlFor="">شرح مفصل</label>
            <textarea
              name="details"
              id=""
              onChange={handlechange}
              className="form-control"
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
            " اضافة"
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










