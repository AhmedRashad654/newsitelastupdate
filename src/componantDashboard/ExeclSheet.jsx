import React from 'react'
import styles from "../styleDashboard/SuperVisor.module.css";
export default function ExeclSheet() {
  return (
    <div className={styles.AddSuperVisor}>
      <div className={styles.head}>
        <p>المستخدمون / أضافة مستخدم</p>
      </div>
      {/* {errorListUser &&
        errorListUser.map((error, index) => (
          <p key={index} className="alert alert-secondary alerthemself">
            {error[index].message}
          </p>
        ))} */}
      <form action="" className={styles.form}>
        <div className={styles.headForm}>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor="">اسم المستخدم</label>
              <input
                type="text"
                name="username"
                placeholder="اسم المستخدم"
                className="form-control"
                // onChange={handlechange}
              />
              {/* {errorBackUser && errorBackUser?.message && (
                <p className={`error`}>هذا الاسم موجود من قبل</p>
              )} */}
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> الاسم بالكامل </label>
              <input
                type="text"
                name="name"
                placeholder="     الاسم بالكامل "
                className="form-control"
                // onChange={handlechange}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> المحافظة</label>
              <input
                type="text"
                name="government"
                placeholder=" المحافظة "
                className="form-control"
                // onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <p style={{ fontSize: "12px", marginBottom: "5px" }}>
                {" "}
                الصورة الشخصية (اختياري)
              </p>
              <label htmlFor="file-upload2" className={`customfileupload`}>
                ارفع الملف
              </label>
              <input
                name="selfImg"
                id="file-upload2"
                type="file"
                className="form-control"
                // onChange={handleChangeImageProfile}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> البريد الالكتروني</label>
              <input
                type="email"
                name="email"
                placeholder=" البريد الالكتروني"
                className="form-control"
                // onChange={handlechange}
              />
              {/* {errorBackUser && errorBackUser === "email already exist" && (
                <p className={`error`}>هذا الايميل موجود من قبل</p>
              )} */}
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> رقم الهاتف</label>
              <input
                type="text"
                name="phone"
                placeholder=" رقم الهاتف"
                className="form-control"
                // onChange={handlechange}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> كلمة المرور</label>
              <input
                name="password"
                type="password"
                placeholder="  كلمة المرور"
                className="form-control"
                // onChange={handlechange}
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> رمز الدخول </label>
              <input
                type="text"
                name="key"
                placeholder="     رمز الدخول "
                className="form-control"
                // onChange={handlechange}
              />
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inp1}>
              <label>الدور</label>
                          <select name="role"
              
                            //   onChange={ handlechange }
                          >
                <option value="user">مستخدم</option>
                <option value="admin">ادمن</option>
                <option value="supervisor">مشرف</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.btnbottom}>
        <button
          className={`add`}
          style={{ color: "white", backgroundColor: "green" }}
        //   onClick={handleSubmit}
        >
          {/* {loading ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            " اضافة"
          )} */}
        </button>
        <button
          className={`add`}
          style={{ border: "1px solid red", color: "red" }}
        //   onClick={() => navigate(-1)}
        >
          الغاء
        </button>
      </div>
    </div>
  );
}
