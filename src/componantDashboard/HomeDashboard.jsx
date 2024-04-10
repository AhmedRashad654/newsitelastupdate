import React from 'react'
import style from '../styleDashboard/HomeDashboard.module.css'
import LeftSideBar from './LeftSideBar'
import { Outlet } from 'react-router-dom';
export default function HomeDashboard() {
    return (
      <div className={style.HomeDashboard}>
        <LeftSideBar />
        
        <div className={style.centerDash}>
          <Outlet />
        </div>
   
      </div>
    );
}
