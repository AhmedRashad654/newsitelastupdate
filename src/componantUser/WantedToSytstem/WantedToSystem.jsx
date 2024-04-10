
import React from "react";
import style from "../../styleDashboard/MartyrsDash.module.css";
import MainNav from "../MainNav/MainNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function WantedToSystem() {
  return (
    <>
    <MainNav/>
    <Navbar/>
    <div className={style.MartyrsDash}>
      <div className={`headDashboard`}>
      </div>
      <div className={`containerTable`}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>اسم المستخدم</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>علي محمد</td>
            </tr>
            <tr>
              <td>1</td>
              <td>علي محمد</td>
            </tr>
            <tr>
              <td>2</td>
              <td>علي محمد</td>
            </tr>
            <tr>
              <td>3</td>
              <td>علي محمد</td>
            </tr>
            <tr>
              <td>3</td>
              <td>علي محمد</td>
            </tr>
            <tr>
              <td>3</td>
              <td>علي محمد</td>
            </tr>
            <tr>
              <td>3</td>
              <td>علي محمد</td>
            </tr>
            <tr>
              <td>4</td>
              <td>علي محمد</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   
   <Footer/>
   
    </>
  );
}


