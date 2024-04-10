import React from "react";
import './Footer.css'
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer pt-5 pb-3 ">
        <div className="container">
          <h3 className="mb-4">الثورة السورية</h3>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="row gy-3">
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link">الرئيسية</NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link">رموز الثورة</NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link">جرائم النظام</NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link">أخر الاخبار</NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link">القائمة السوداء</NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link">جرائم قسد</NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link">أرشيف الثورة</NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link">مجرمي الحرب</NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link">جرائم داعش</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="contact-footer text-center">
                <p className="mb-3 p-0">تواصل معنا</p>
                <div className="social-icons-footer d-flex align-items-center">
                  <i className="fa-brands fa-whatsapp ms-3"></i>
                  <i className="fa-brands fa-instagram ms-3"></i>
                  <i className="fa-brands fa-tiktok ms-3"></i>
                  <i className="fa-brands fa-square-facebook ms-3"></i>
                  <i className="fa-brands fa-square-twitter "></i>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="text-center p-0 m-0">جميع حقوق النشر محفوظة </p>
        </div>
      </div>
    </>
  );
}
