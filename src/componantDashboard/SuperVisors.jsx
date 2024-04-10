import React from "react";
import styles from "../styleDashboard/SuperVisor.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function SuperVisors() {
  const navigate = useNavigate();
  return (
    <div className={styles.SuperVisor}>
      <div className={styles.head}>
        <p>المشرفون</p>
      </div>
      <div className={styles.search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.sd} />
        <input
          className="form-control"
          placeholder="بحث باستخدام الاسم"
          type="text"
        />
      </div>
      <div className={styles.allUser}>
        <div className={styles.containerTable}>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>اسم المشرف</th>
                <th>رقم الهاتف</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>احمد</td>
                <td>01025004855</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="bg-danger p-1 text-white"
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="bg-primary p-1 text-white"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/dashboard/updatesupervisor")}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>احمد</td>
                <td>01025004855</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="bg-danger p-1 text-white"
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="bg-primary p-1 text-white"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/dashboard/updatesupervisor")}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>احمد</td>
                <td>01025004855</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="bg-danger p-1 text-white"
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="bg-primary p-1 text-white"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/dashboard/updatesupervisor")}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>احمد</td>
                <td>01025004855</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="bg-danger p-1 text-white"
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="bg-primary p-1 text-white"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/dashboard/updatesupervisor")}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        className={`${styles.add} btn btn-success`}
        onClick={() => navigate("/dashboard/addsupervisor")}
      >
        اضافة مشرف
      </button>
    </div>
  );
}
