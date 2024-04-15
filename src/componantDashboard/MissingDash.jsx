import React, { useEffect, useState } from 'react';
import style from "../styleDashboard/MartyrsDash.module.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export default function MissingDash() {
    const navigate = useNavigate();
    const [martyr, setMartyrData] = useState([]);
    async function getMartyr() {
      await axios
        .get("https://syrianrevolution1.com/childData")
        .then((result) => setMartyrData(result.data.data))
        .catch((error) => {
          console.log(error);
        });
    }
    useEffect(() => {
      getMartyr();
    }, []);

    console.log(martyr);
  return (
    <div className={style.MartyrsDash}>
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / المفقودين</p>
      </div>
      <div className={`containerTable`}>
        <table>
          <thead>
            <tr>
              <th>اسم المفقود</th>
              <th> البيانات المرفوعة</th>
            </tr>
          </thead>
          <tbody>
            {martyr.map((user, index) =>
              user.category === "missing" && user.isAccepted === false ? (
                <tr key={index}>
                  <td>{user.name} </td>
                  <td>
                    <button
                      className={`add `}
                      style={{ backgroundColor: "#3B9058", color: "white" }}
                      onClick={() => {
                        navigate(`/dashboard/missingdash/${user._id}`);
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

