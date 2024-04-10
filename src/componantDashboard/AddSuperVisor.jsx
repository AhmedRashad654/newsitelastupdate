import React from "react";
import styles from "../styleDashboard/AddSuperVisor.module.css";
import { useNavigate } from "react-router-dom";
export default function AddSuperVisor() {
  const navigate = useNavigate()
  return (
    <div className={styles.AddSuperVisor}>
      <div className={styles.head}>
        <p>المشرفون / أضافة مشرف</p>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.headForm}>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor="">اسم المشرف</label>
              <input
                type="text"
                placeholder="اسم المشرف"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> رقم الهاتف</label>
              <input
                type="text"
                placeholder=" رقم الهاتف"
                className="form-control"
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> المواليد</label>
              <input
                type="date"
                placeholder=" المواليد"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> المحافظة</label>
              <input
                type="text"
                placeholder=" المحافظة "
                className="form-control"
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> البريد الالكتروني</label>
              <input
                type="email"
                placeholder=" البريد الالكتروني"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> وثيقة اثبات الهوية </label>
              <input
                type="text"
                placeholder="  وثيقة اثبات الهوية"
                className="form-control"
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor="">  كلمة المرور</label>
              <input
                type="password"
                placeholder="  كلمة المرور"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor="">   تاكيد كلمة المرور </label>
              <input
                type="password"
                placeholder="   تاكيد كلمة المرور "
                className="form-control"
              />
            </div>
          </div>
        </div>
      </form>
      <div className={styles.btnbottom}>
        <button
          className={`add`}
          style={{ color: "white", backgroundColor: "green" }}
        >
          اضافة
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
