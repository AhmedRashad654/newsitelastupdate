import React from 'react'
import style from '../styleDashboard/HomeDashboard.module.css'
import LeftSideBar from './LeftSideBar'
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
export default function HomeDashboard() {
  return (
    <>
      <Helmet>
        <title>  صفحة الادمن</title>
        <meta name="description" content="  جرائم النظام" />
      </Helmet>
      <div className={style.HomeDashboard}>
        <LeftSideBar />

        <div className={style.centerDash}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
