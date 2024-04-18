import React from 'react'
import style from "../styleDashboard/MartyrsDash.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/Context';
export default function WarCriminals() {
  const navigate = useNavigate();
   const {listDash}  = useUser()
  return (
    <div className={style.MartyrsDash}>
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / مجرمين الحرب</p>
      </div>
      <div className={`containerTable`}>
        <table>
          <thead>
            <tr>
              <th>اسم مجرم الحرب</th>
              <th> البيانات المرفوعة</th>
            </tr>
          </thead>
          <tbody>
            {listDash &&
              listDash.map((user) =>
                user.category === "mogramharb" && user.isAccepted === false ? (
                  <tr>
                    <td>{user.name} </td>
                    <button
                      className={`add `}
                      style={{ backgroundColor: "#3B9058", color: "white" }}
                      onClick={() =>
                        navigate(`/dashboard/displaywarcriminals/${user._id}`)
                      }
                    >
                      عرض
                    </button>
                  </tr>
                ) : (
                  ""
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

