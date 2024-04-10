import React, { useState,useContext } from 'react';
import './MainNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../RegisterUser/RegisterUser.module.css'
import RegisterUser from '../RegisterUser/RegisterUser';
import LoginUser from '../LoginUser/LoginUser';
import { ContextUser } from '../../context/Context';
import SuccessRegister from '../SuccessRegister/SuccessRegister';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
 import RestNewPassword from '../ResetNewPassword/RestNewPassword'
export default function MainNav() {
  const [open, setOpen] = useState(false);
  const [openNoti , setOpenNoti] = useState(false)
  const {openAuth, setOpenAuth}= useContext(ContextUser)
  return (
    <>
      <div className="container">
        <div className="row py-3 gy-3">
          <div className="col-md-6 d-flex justify-content-between align-items-center">
            <h1 className="m-0 h4">الثورة السورية</h1>
            <div className="contact d-flex justify-content-between align-items-center position-relative">
              {open === true ? (
                <div className="social-icons d-flex align-items-center ms-5 p-2 text-white ">
                  <i className="fa-brands fa-whatsapp ms-3"></i>
                  <i className="fa-brands fa-instagram ms-3"></i>
                  <i className="fa-brands fa-tiktok ms-3"></i>
                  <i className="fa-brands fa-square-facebook ms-3"></i>
                  <i className="fa-brands fa-square-twitter ms-3"></i>
                  <i
                    className="fa-regular fa-circle-xmark text-danger close"
                    onClick={() => setOpen(false)}
                  ></i>
                </div>
              ) : null}
              <p className="m-0 p-3 p-0 btn" onClick={() => setOpen(true)}>
                تواصل معنا
              </p>
              <div className="notification position-relative"  onClick={()=>setOpenNoti(true)}>
              <i className="fa-regular fa-bell me-2"></i>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="search d-flex justify-content-between align-items-center position-relative">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <input
                type="text"
                placeholder="ابحث هنا"
                className=" form-control pe-5"
              />
              <div className="buttons d-flex align-items-center gap-2">
                
                <button className="btn btn-create" onClick={()=>setOpenAuth('register')}>
                  انشاء حساب
                </button>
                <button className="btn btn-login" onClick={()=>setOpenAuth('login')}>
                  تسجيل الدخول
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openNoti ?<div className={style.RegisterUser}>
      <div className={style.forms}>
        <div className={style.headForm} onClick={()=>setOpenNoti(false)}>
        <FontAwesomeIcon
              icon={faCircleXmark}
              style={{
                position: "absolute",
                top: "-20%",
                right: 0,
                color: "red",
                cursor: "pointer",
              }}
            />
        </div>
              <div className="notification-body p-5">
                <div className="new">
                  <h3 className='text-danger'><span><i class="fa-regular fa-bell ms-2 mb-2"></i></span> الإشعارات الجديدة</h3>
                  <p className=' position-relative bg-white p-2 pe-5 m-0 mb-2'>تهانينا ! تم مراجعة بيانات حسابك وقبول اشتراكك, شكرا لانضمامك إلينا</p>
                  <p className=' position-relative bg-white p-2 pe-5 m-0 mb-2'>تهانينا ! تم مراجعة بيانات حسابك وقبول اشتراكك, شكرا لانضمامك إلينا</p>
                  <p className=' position-relative bg-white p-2 pe-5 m-0 mb-2'>تهانينا ! تم مراجعة بيانات حسابك وقبول اشتراكك, شكرا لانضمامك إلينا</p>
                </div>
                <hr />
                <div className="old">
                  <h3><span><i class="fa-regular fa-circle-check ms-3 mb-2"></i></span>تمت مشاهدتها</h3>
                  <p className=' position-relative bg-white p-2 pe-5 m-0 mb-2'>عفوا! يرجى مراجعة البيانات و الوثائق التي تم رفعها وإعادة الإرسال مرة أخرى. </p>
                  <p className=' position-relative bg-white p-2 pe-5 m-0 mb-2'>تم قبول البيانات التي أدخلتها ورفعها على الموقع بنجاح , شكرا لمشاركتك معنا</p>
                  <p className=' position-relative bg-white p-2 pe-5 m-0 mb-2'>تهانينا ! تم مراجعة بيانات حسابك وقبول اشتراكك, شكرا لانضمامك إلينا</p>
                </div>
              </div>
      </div>
    </div>:null }


      {openAuth === 'register' && <RegisterUser />}
      {openAuth === 'login' && <LoginUser />}
      {/* {openAuth === 'successRegister' && <SuccessRegister />} */}
      {openAuth === 'forget' && <ForgetPassword />}
      {openAuth === 'rest' && <RestNewPassword/>}
      {openAuth === 'return' && <RestNewPassword/>}
      
    </>
  );
}

