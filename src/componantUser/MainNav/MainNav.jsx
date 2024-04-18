import React, { useState,useContext, useEffect} from 'react';
import './MainNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../RegisterUser/RegisterUser.module.css'
import RegisterUser from '../RegisterUser/RegisterUser';
import LoginUser from '../LoginUser/LoginUser';
import { ContextUser } from '../../context/Context';
import SuccessRegister from '../SuccessRegister/SuccessRegister';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import RestNewPassword from '../ResetNewPassword/RestNewPassword'
 import imgone from '../../image/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'
import UpdateLogin from '../UpdateLogin';
import axios from 'axios';
export default function MainNav() {
  const [open, setOpen] = useState(false);
  const [openNoti , setOpenNoti] = useState(false)
  const { openAuth, setOpenAuth } = useContext( ContextUser )
  const [ notification, setNontification ] = useState( [] );
  const [ number, setNumber ] = useState();
  /////////////logout//////////////
  function handleLogout() {
    localStorage.clear()
     window.location.reload(); 
  }
  useEffect( () => {
    async function getNotification() {
      axios
        .get(
          `https://syrianrevolution1.com/users/single/${localStorage.getItem(
            "idUserLogin"
          )}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then( ( result ) => {
       
          setNontification(result?.data);
          setNumber(
            1 +
              result?.data?.child.length +
              result?.data?.lists.length +
              result?.data?.massacres.length
          );
        })
        .catch((error) => console.log(error));
    }
    getNotification()
  }, [] )

  return (
    <>
      <div className="container">
        <div className="row py-3 gy-3" style={{ alignItems: "center" }}>
          <div className="col-md-6 d-flex justify-content-between align-items-center">
            <h1 className="m-0 h4">الثورة السورية</h1>
            <div className="contact d-flex justify-content-between align-items-center position-relative">
              {open === true ? (
                <div className="social-icons d-flex align-items-center ms-5 p-2 text-white ">
                  <a
                    href="https://api.whatsapp.com/send/?phone=4917676000731"
                    className="text-white"
                  >
                    {" "}
                    <i className="fa-brands fa-whatsapp ms-3"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/syrian.revolution7"
                    className="text-white"
                  >
                    <i className="fa-brands fa-instagram ms-3"></i>
                  </a>
                  <a
                    href="https://t.me/Syrian_Revolution7"
                    className="text-white"
                  >
                    <i class="fa-brands fa-telegram ms-3"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@syrian.revolution7"
                    className="text-white"
                  >
                    <i className="fa-brands fa-tiktok ms-3"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/Syrian7Revolution"
                    className="text-white"
                  >
                    <i className="fa-brands fa-square-facebook ms-3"></i>
                  </a>
                  <a
                    href="https://twitter.com/syrian_revolut7"
                    className="text-white"
                  >
                    <i className="fa-brands fa-square-twitter ms-3"></i>
                  </a>

                  <i
                    className="fa-regular fa-circle-xmark text-danger close"
                    onClick={() => setOpen(false)}
                  ></i>
                </div>
              ) : null}
              <p className="m-0 p-3 p-0 btn" onClick={() => setOpen(true)}>
                تواصل معنا
              </p>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", right: "-8px" }}>
                  {number}
                </span>
                <div
                  className="notification position-relative"
                  onClick={() => setOpenNoti(true)}
                >
                  <i className="fa-regular fa-bell me-2"></i>
                </div>
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
              {localStorage.getItem("token") ? (
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  {localStorage?.selfImg !== undefined &&
                  localStorage?.selfImg !== "undefined" &&
                  localStorage?.selfImg !== null &&
                  localStorage?.selfImg !== "" ? (
                    <img
                      src={`https://syrianrevolution1.com/images/${localStorage?.selfImg}`}
                      alt="himself"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                      onClick={() => setOpenAuth("update")}
                    />
                  ) : (
                    <img
                      src={imgone}
                      alt="himself"
                      style={{
                        width: "40px",
                        borderRadius: "40%",
                        cursor: "pointer",
                      }}
                      onClick={() => setOpenAuth("update")}
                    />
                  )}

                  <button
                    onClick={handleLogout}
                    className="btn btn-create"
                    style={{ height: "30px", fontSize: "10px", width: "100px" }}
                  >
                    تسجيل الخروج
                  </button>
                </div>
              ) : (
                <div className="buttons d-flex align-items-center gap-2">
                  <button
                    className="btn btn-create"
                    onClick={() => setOpenAuth("register")}
                  >
                    انشاء حساب
                  </button>
                  <button
                    className="btn btn-login"
                    onClick={() => setOpenAuth("login")}
                  >
                    تسجيل الدخول
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {openNoti ? (
        <div className={style.RegisterUser}>
          <div className={style.forms}>
            <div className={style.headForm} onClick={() => setOpenNoti(false)}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{
                  position: "absolute",
                  top: "-20%",
                  right: "-20px",
                  color: "red",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="notification-body p-5">
              <div className="new">
                <h4 className="text-danger">
                  <span>
                    <i className="fa-regular fa-bell ms-2 mb-2"></i>
                  </span>{" "}
                  الإشعارات الجديدة
                </h4>
                <p className=" position-relative bg-white p-2 pe-5 m-0 mb-2">
                  {notification ? notification?.notification:''}
                </p>
                {(notification?.child &&
                  notification?.child?.length )?
                  notification?.child.map((e) => (
                    <p className=" position-relative bg-white p-2 pe-5 m-0 mb-2">
                      {e?.notification}
                    </p>
                  )):''}
                {(notification?.lists &&
                  notification?.lists?.length )?
                  notification?.lists.map((e) => (
                    <p className=" position-relative bg-white p-2 pe-5 m-0 mb-2">
                      {e?.notification}
                    </p>
                  )):''}
                {(notification?.massacres &&
                  notification?.massacres?.length )?
                  notification?.massacres.map((e) => (
                    <p className=" position-relative bg-white p-2 pe-5 m-0 mb-2">
                      {e?.notification}
                    </p>
                  )):''}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {openAuth === "register" && <RegisterUser />}
      {openAuth === "login" && <LoginUser />}
      {openAuth === "successRegister" && <SuccessRegister />}
      {openAuth === "forget" && <ForgetPassword />}
      {openAuth === "rest" && <RestNewPassword />}
      {openAuth === "return" && <RestNewPassword />}
      {openAuth === "update" && <UpdateLogin />}
    </>
  );
}

