import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 w-100 p-0 d-flex justify-content-between align-items-center mb-lg-0 ">
            <li className="nav-item">
              <NavLink
                className={`nav-link border-bottom border-black ${({
                  isActive,
                }) => (isActive ? 'active' : '')}`}
                aria-current="page"
                to="/"
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                أخر الأخبار
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link position-relative evolution-archive "
                aria-current="page"
                to="/archiefthoura"
              >
                أرشيف الثورة{' '}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">المظاهرات</NavLink>
                  <NavLink className="nav-link text-white">
                    معارك الثوار
                  </NavLink>
                  <NavLink className="nav-link text-white">
                    ادعمنا بوثائق
                  </NavLink>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/symbolthourauser"
                className="nav-link position-relative evolution-archive"
                aria-current="page"
              >
                رموز الثورة{' '}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">رموز الثورة</NavLink>
                  <NavLink to={'horonCard'} className="nav-link text-white">
                    بطاقة التكريم
                  </NavLink>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link position-relative evolution-archive"
                aria-current="page"
                to="/blacklistuser"
              >
                القائمة السوداء{' '}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">
                    القائمة السوداء
                  </NavLink>
                  <NavLink className="nav-link text-white">الخونة</NavLink>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link position-relative evolution-archive"
                aria-current="page"
                to="/graamsystem"
              >
                جرائم النظام{' '}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">
                    مجاز النظام{' '}
                  </NavLink>
                  <NavLink className="nav-link text-white">الشهداء</NavLink>
                  <NavLink className="nav-link text-white">المفقودين</NavLink>
                  <NavLink className="nav-link text-white">المعتقلين</NavLink>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link position-relative evolution-archive"
                aria-current="page"
                to="/graemqasad"
              >
                جرائم قسد{' '}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">مجاز قسد </NavLink>
                  <NavLink className="nav-link text-white">الشهداء</NavLink>
                  <NavLink className="nav-link text-white">المفقودين</NavLink>
                  <NavLink className="nav-link text-white">المعتقلين</NavLink>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link position-relative evolution-archive"
                aria-current="page"
                to="/graemdashuser"
              >
                جرائم داعش{' '}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">مجاز داعش </NavLink>
                  <NavLink className="nav-link text-white">الشهداء</NavLink>
                  <NavLink className="nav-link text-white">المفقودين</NavLink>
                  <NavLink className="nav-link text-white">المعتقلين</NavLink>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/WantedToSystem">
              المطلوبين للنظام             
               </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
