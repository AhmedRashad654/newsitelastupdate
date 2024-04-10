import React from 'react'
import style from "../styleDashboard/MartyrsDash.module.css";
import { useNavigate } from "react-router-dom";
export default function WarCriminals() {
    const navigate = useNavigate();
  return (
    <div className={style.MartyrsDash}>
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / مجرمين الحرب</p>
      </div>
      <div className={`containerTable`}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>اسم المستخدم</th>
              <th>اسم مجرم الحرب</th>
              <th> البيانات المرفوعة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>علي محمد</td>
              <td>علي محمد</td>
              <button
                className={`add `}
                style={{ backgroundColor: "#3B9058", color: "white" }}
                onClick={() => navigate("/dashboard/displaywarcriminals")}
              >
                عرض
              </button>
                      </tr>
                      
          </tbody>
        </table>
      </div>
    </div>
  );
}

