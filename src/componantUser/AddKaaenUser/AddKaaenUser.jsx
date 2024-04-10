import { useContext } from 'react';
import { ContextUser, useUser } from '../../context/Context';
import styles from '../AddSahedUser/AddShahed.module.css'

export default function AddKaaenUser() {
  const {openAuth, setOpenAuth}= useContext(ContextUser)

  return (
    <div>
      <form action="" className={styles.form}>
        <div className={styles.headForm}>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor="">اسم الخائن</label>
              <input
                type="text"
                placeholder="اسم الخائن"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> اسم الاب</label>
              <input
                type="text"
                placeholder="  اسم الاب"
                className="form-control"
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> كنية المفقود</label>
              <input
                type="text"
                placeholder=" كنية الخائن"
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
              <label htmlFor=""> المواليد</label>
              <input
                type="date"
                placeholder="  المواليد"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> مكان الخدث </label>
              <select name="" id="" className="form-control">
                <option value="">one</option>
                <option value="">two</option>

                <option value="">three</option>
              </select>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> الجهة المسؤولة</label>
              <select name="" id="" className="form-control">
                <option value="">النظام</option>
                <option value="">داعش</option>
                <option value="">قسد</option>
              </select>
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
