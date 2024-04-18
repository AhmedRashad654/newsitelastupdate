import React, { useContext } from 'react'
import style from '../styleDashboard/HomeDashboard.module.css'
import LeftSideBar from './LeftSideBar'
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ContextUser } from '../context/Context';
import AlertImageDash from './AlertImageDash/AlertImageDash';
export default function HomeDashboard() {
  const { openAlert, openAlertStore } = useContext(ContextUser);
  return (
    <>
      <Helmet>
        <title> صفحة الادمن</title>
        <meta name="description" content="  جرائم النظام" />
      </Helmet>
      <div className={style.HomeDashboard}>
        <LeftSideBar />

        <div className={style.centerDash}>
          <Outlet />
        </div>
      </div>
      {openAlert && <AlertImageDash src={openAlertStore} />}
    </>
  );
}
