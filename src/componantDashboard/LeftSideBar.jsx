import React, { useContext, useEffect, useState } from 'react';
import style from '../styleDashboard/leftSideBar.module.css';
import imgAvatar from '../image/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowRightFromBracket,
  faOutdent,
  faReceipt,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { ContextUser, useUser } from '../context/Context';
import AlertLogout from '../componantDashboard/AlertImageDash/AlertLogout'
export default function LeftSideBar() {
  const [ isMobile, setIsMobile ] = useState( false );
  const {numberMogrem} =  useUser()
   const { role, setOpenLogout, openLogout } = useContext(ContextUser);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [] );
  
  //////////////function logout//////////////

  return (
    <div className={style.LeftSideBar}>
      <div className={style.first}>
        {!isMobile ? (
          localStorage?.selfImg !== undefined &&
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
            />
          ) : (
            <img
              src={imgAvatar}
              alt="himself"
              style={{
                width: "40px",
                borderRadius: "40%",
                cursor: "pointer",
              }}
            />
          )
        ) : (
          ""
        )}
        <p>{role}</p>
      </div>
      <div className={style.second}>
        {role === "admin" ? (
          <div className={style.secondFirst}>
            <NavLink to="/dashboard/userdash">
              <FontAwesomeIcon icon={faUserGroup} />
              {!isMobile ? <p>المستخدمون</p> : ""}
            </NavLink>
          </div>
        ) : (
          ""
        )}

        <div className={style.secondsecond}>
          <div className={style.headsecondsecond}>
            <Link>
              <FontAwesomeIcon icon={faArrowDown} />

              {!isMobile ? <p>البيانات المستلمة</p> : ""}
            </Link>
          </div>

          <div className={style.listSecondSecond}>
            <NavLink to="/dashboard/martyrs">
              {isMobile ? "ش" : " شهداء"}
            </NavLink>
            <NavLink to="/dashboard/detaineesdash">
              {isMobile ? "م" : "معتقلين"}
            </NavLink>
            <NavLink to="/dashboard/missingdash">
              {isMobile ? "مف" : "مفقودين"}
            </NavLink>
            <div>
              <NavLink to="/dashboard/warcriminals">
                {" "}
                {isMobile ? "مج" : "  مجرمين حرب"}
              </NavLink>
              <span>{numberMogrem}</span>
            </div>

            <NavLink to="/dashboard/traitors">
              {isMobile ? "خ" : "خونة"}
            </NavLink>
            <NavLink to="/dashboard/honorcard">
              {" "}
              {isMobile ? "بط" : "بطاقات تكريم"}
            </NavLink>
          </div>
        </div>
        <div className={style.secondsecond}>
          <div className={style.headsecondsecond}>
            <Link>
              <FontAwesomeIcon icon={faOutdent} />
              {!isMobile ? <p> ادخال البيانات</p> : ""}
            </Link>
          </div>

          <div className={style.listSecondSecond}>
            <NavLink to="/dashboard/lastnewsdash">
              {" "}
              {isMobile ? "اخر" : "اخر الاخبار"}
            </NavLink>
            <NavLink to="/dashboard/revolutionarchivedash">
              {isMobile ? "اش" : "ارشيف الثورة"}
            </NavLink>
            <NavLink to="/dashboard/symbolsoftherevolution">
              {isMobile ? "رم" : "رموز الثورة"}
            </NavLink>
            <NavLink to="/dashboard/blacklist">
              {" "}
              {isMobile ? "سو" : "القائمة السوداء"}
            </NavLink>
            <NavLink to="/dashboard/crimessystem">
              {" "}
              {isMobile ? "جر" : "جرائم النظام"}{" "}
            </NavLink>
            <NavLink to="/dashboard/allexcel">
              {" "}
              {isMobile ? "مطل " : " مطلوبين للنظام"}{" "}
            </NavLink>
          </div>
        </div>
        <div className={style.secondFourth}></div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
            <NavLink to="/dashboard/dataDisplaySite">
              <FontAwesomeIcon icon={faReceipt} />
              {!isMobile ? <p> البيانات المعروضة بالموقع</p> : ""}
            </NavLink>
          </div>
        </div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
            <Link onClick={() => setOpenLogout(true)}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              {!isMobile ? <p> تسجيل الخروج</p> : ""}
            </Link>
          </div>
        </div>
      </div>
      {openLogout && <AlertLogout />}
    </div>
  );
}
