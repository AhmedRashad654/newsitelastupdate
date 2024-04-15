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
import { ContextUser } from '../context/Context';
export default function LeftSideBar() {
  const [ isMobile, setIsMobile ] = useState( false );
   const { role } = useContext(ContextUser);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [] );
  
  //////////////function logout//////////////
  function handleLogout() {
    localStorage.clear();
  }
  return (
    <div className={style.LeftSideBar}>
      <div className={style.first}>
        {!isMobile ? <img src={imgAvatar} alt="Avatar" /> : ""}
        <p>admin</p>
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
            <NavLink to="/dashboard/warcriminals">
              {" "}
              {isMobile ? "مج" : "  مجرمين حرب"}
            </NavLink>
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
            <NavLink to="/dashboard/excel">
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
            <Link to="/" onClick={handleLogout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              {!isMobile ? <p> تسجيل الخروج</p> : ""}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
