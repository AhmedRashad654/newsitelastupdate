import {React,useContext } from 'react';
import styles from '../AddSahedUser/AddShahed.module.css'
import { ContextUser } from '../../context/Context';
export default function AddCreditTakrem() {

  const {openAuth, setOpenAuth}= useContext(ContextUser)

  return (
    <div>
      <form action="" className={styles.form}>
        <div className={styles.headForm}>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor="">اسم صاحب البطاقة</label>
              <input
                type="text"
                placeholder="اسم المعتقل"
                className="form-control"
              />
            </div>
            <div className={ styles.inp1 }>
              asd
              <label htmlFor=""> اسم والد صاحب البطاقة</label>
              <input
                type="text"
                placeholder="  اسم الاب"
                className="form-control"
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> كنية صاحب البطاقة</label>
              <input
                type="text"
                placeholder=" كنية المعتقل"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> اسم الام</label>
              <input
                type="text"
                placeholder=" اسم الام "
                className="form-control"
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> تاريخ ميلاد صاحب البطاقة</label>
              <input
                type="date"
                placeholder="  المواليد"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <p style={{ marginBottom: "5px", fontSize: "12px" }}>
                الوثائق والملفات
              </p>
              <label htmlFor="file-upload" className={styles.customfileupload}>
                اختيار الملف
              </label>
              <input type="file" id="file-upload" />
            </div>
          </div>
          <div className={styles.input1}>
            <label htmlFor="">شرح مفصل</label>
            <textarea name="" id="" className="form-control"></textarea>
          </div>
        </div>
      </form>
      <div className={styles.btnbottom}>
        <button
          className={`add`}
          style={{ color: "white", backgroundColor: "green" }}
          onClick={()=>setOpenAuth('successaddinform')}
        >
          اضافة بيانات
        </button>
      </div>
    </div>
  );
}
