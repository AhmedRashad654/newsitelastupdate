import React, { useEffect, useState } from 'react'
import style from "../styleDashboard/MartyrsDash.module.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function TraitorsDash() {
  const navigate = useNavigate();
      const [detainees, setDetainess] = useState([]);
      async function getMartyr() {
        await axios
          .get("https://syrianrevolution1.com/lists")
          .then((result) => setDetainess(result.data.data))
          .catch((error) => {
            console.log(error);
          });
      }
      useEffect(() => {
        getMartyr();
      }, [] );
  return (
    <div className={style.MartyrsDash}>
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / الخائنون</p>
      </div>
      <div className={`containerTable`}>
        <table>
          <thead>
            <tr>
              <th>اسم الخائن</th>
              <th> البيانات المرفوعة</th>
            </tr>
          </thead>
          <tbody>
            {detainees.map((user, index) =>
              user.category === "Traitors" && user.isAccepted === false ? (
                <tr key={index}>
                  <td>{user.name} </td>
                  <td>
                    <button
                      className={`add `}
                      style={{ backgroundColor: "#3B9058", color: "white" }}
                      onClick={() => {
                    
                        navigate(`/dashboard/traitors/${user._id}`);
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

