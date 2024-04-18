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
                  <NavLink className="nav-link" to="/">
                    الرئيسية
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/symbolthourauser">
                    رموز الثورة
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="graamsystem">
                    جرائم النظام
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/lastNews">
                    أخر الاخبار
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/blacklistuser">
                    القائمة السوداء
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/graemqasad">
                    جرائم قسد
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/archiefthoura">
                    أرشيف الثورة
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/blacklistuser">
                    مجرمي الحرب
                  </NavLink>
                </div>
                <div className="col-md-4 col-sm-4 x-sm">
                  <NavLink className="nav-link" to="/graemdashuser">
                    جرائم داعش
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="contact-footer text-center">
                <p className="mb-3 p-0">تواصل معنا</p>
                <div className="social-icons-footer d-flex align-items-center">
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
