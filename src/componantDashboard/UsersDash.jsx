import styles from "../styleDashboard/SuperVisor.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDashboard } from '../context/DashboardContext';
import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DisplayTawsec from "./DisplayTawsec";
export default function UsersDash() {
  const [ userDashboard, setUserDashboard ] = useState( [] );
  const [ disTawsec, setDisTawsec ] = useState();
  const { getIdConfideint } = useDashboard()
  ////////////////////get all user/////////////////
    async function getAllUserDashboard() {
      try {
        const response = await fetch(
          "https://syrianrevolution1.com/users/all",
          {
            method: "GET",
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWJvN0BnbWFpbDh1LmNvbSIsImlkIjoiNjYxNTNkNzc5ZWVjYjQ1ZDk4Y2U0ZTA2Iiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTcxMjY3NjYwNn0.vAXXi4qnz02UoRAlzqWLSRe27EvCBMgs1kMfKCKaLYk",
            },
          }
        );
        const result = await response.json();
        setUserDashboard(result.data);
      } catch (error) {
        console.error(error);
      }
    }
  /////////////get all user ///////////////////////
  useEffect(() => {
    getAllUserDashboard();
  }, [] );
  /////////deleteUser///////////////////
  async function deleteUser( id ) {
    try {
           const response = await fetch(
             `https://syrianrevolution1.com/users/${id}`,
             {
               method: "DELETE",
               headers: {
                 Authorization:
                   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib29vQGdtYWlsLmNvbSIsImlkIjoiNjYxMjlmYTMyZDM3ZDE1MGM3MWNlMGRjIiwicm9sZSI6InN1cGVydmlzb3IifSwiaWF0IjoxNzEyNDk2NjE3fQ.MS_GWd6WexGSFGN4oWGO1WsnaQRgfC5ww5OkptpkObI",
               },
             }
           );
        const result = await response.json();
      if ( result === "User Deleted Successfully" ) {
        getAllUserDashboard();
      } else {
        console.log( result );
        }
      } catch (error) {
        console.error(error);
      }
    }
  
  const navigate = useNavigate();
  return (
    <div className={styles.SuperVisor}>
      <div className={`headDashboard`}>
        <p>المستخدمون</p>
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
                <th>الاسم</th>
                <th>رقم الهاتف</th>
                <th>الدور</th>
                <th>توثيق الحساب</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {userDashboard &&
                userDashboard.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td>
                      {user?.isConfident === true && user?.docImg !== null ? (
                        <span
                          className={styles.spanradiues}
                          style={{ backgroundColor: "green" }}
                        ></span>
                      ) : user?.docImg !== null &&
                        user?.isConfident === false ? (
                        <span
                          className={styles.spanradiues}
                          style={{
                            backgroundColor: "yellow",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setDisTawsec("taws");
                            getIdConfideint(user._id);
                          }}
                        ></span>
                      ) : (
                        <span
                          className={styles.spanradiues}
                          style={{ backgroundColor: "red" }}
                        ></span>
                      )}
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="bg-danger p-1 text-white"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteUser(user._id)}
                      />
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="bg-primary p-1 text-white"
                        style={{ cursor: "pointer" }}
                        onClick={ () => { localStorage.setItem( "IdUpdateUser", user._id ); navigate( "/dashboard/updateuser" ) } }
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        className={`${styles.add} btn btn-success`}
        onClick={() => navigate("/dashboard/adduser")}
      >
        اضافة مستخدم
      </button>
      {disTawsec === "taws" && (
        <DisplayTawsec
          setDisTawsec={setDisTawsec}
          getAllUserDashboard={getAllUserDashboard}
        />
      )}
    </div>
  );
}
