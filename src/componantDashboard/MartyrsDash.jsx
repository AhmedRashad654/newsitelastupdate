import React, { useEffect, useState } from "react";
import style from "../styleDashboard/MartyrsDash.module.css";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";
export default function MartyrsDash() {
  const navigate = useNavigate();
  const [ martyr, setMartyrData ] = useState( [] );
  async function getMartyr() {
  await axios.get( "https://syrianrevolution1.com/childData" ).then( ( result ) => setMartyrData(result.data.data) ).catch( ( error ) => {
      console.log( error );
    });
  }
  useEffect( () => {
    getMartyr()
  }, [] )
  
  console.log(martyr)
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
            { martyr.map( ( user ) => (
              user.category === 'martyr'?     <tr>
                <td>{user.name} </td>
                <td>
                  <button
                    className={`add `}
                    style={{ backgroundColor: "#3B9058", color: "white" }}
                    onClick={ () => { localStorage.setItem( 'idMarter',user._id ); navigate( "/dashboard/displaymartyrs" ) } }
                  >
                    عرض
                  </button>
                </td>
              </tr>:''
         
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
