import React from "react";
import style from "../styleDashboard/MartyrsDash.module.css";
import { useNavigate } from "react-router-dom";

import { useUser } from "../context/Context";
export default function MartyrsDash() {
  const navigate = useNavigate();
  
const {childDash} =  useUser()
  

  return (
    <div className={style.MartyrsDash}>
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / شهداء</p>
      </div>
      <div className={`containerTable`}>
        <table>
          <thead>
            <tr>
              <th>اسم الشهيد</th>
              <th> البيانات المرفوعة</th>
            </tr>
          </thead>
          <tbody>
            {childDash.map((user, index) =>
              user.category === "martyr" && user.isAccepted === false ? (
                <tr key={index}>
                  <td>{user.name} </td>
                  <td>
                    <button
                      className={`add `}
                      style={{ backgroundColor: "#3B9058", color: "white" }}
                      onClick={() => {
                        navigate(`/dashboard/martyrs/${user._id}`);
                      }}
                    >
                      عرض
                    </button>
                  </td>
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
