import React from 'react';
import style from '../RegisterUser/RegisterUser.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useUser } from '../../context/Context';
export default function SuccessRegister() {
    const { closeAuth } = useUser();

  return (
    <div className={style.RegisterUser}>
      <form className={style.formsSuccessRegister}>
      
        <div className={style.informSuccess}>
          <FontAwesomeIcon icon={faCircleCheck} style={{color:"green",fontSize:'40px',marginBottom:'20px'}}/>
          <p>تم ارسال كافة البيانات بنجاح شكرا لانضمامك الينا</p>

          <div className={style.btnInpu}>
            <button onClick={closeAuth}> الرجوع للرئيسية</button>
          </div>
        </div>
      </form>
    </div>
  );
}