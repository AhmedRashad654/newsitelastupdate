import React, { useEffect, useState } from 'react';
import style from '../styleDashboard/MartyrsDash.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function DetaineesDash() {
  const navigate = useNavigate();
    const [detainees, setDetainess] = useState([]);
    async function getMartyr() {
      await axios
        .get("https://syrianrevolution1.com/childData")
        .then((result) => setDetainess(result.data.data))
        .catch((error) => {
          console.log(error);
        });
    }
    useEffect(() => {
      getMartyr();
    }, []);

  return (
    <div className={style.MartyrsDash}>
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / معتقلين</p>
      </div>
      <div className={`containerTable`}>
        <table>
          <thead>
            <tr>
              <th>اسم المعتقل</th>
              <th>البيانات المرفوعة</th>
            </tr>
          </thead>
          <tbody>
            {detainees.map((user, index) =>
              user.category === "adetaine" && user.isAccepted === false ? (
                <tr key={index}>
                  <td>{user.name} </td>
                  <td>
                    <button
                      className={`add `}
                      style={{ backgroundColor: "#3B9058", color: "white" }}
                      onClick={() => {
                        navigate(`/dashboard/detaineesdash/${user._id}`);
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
