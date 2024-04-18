import React, {useContext, useState } from 'react';
import './Navbar.css';
import { NavLink ,Link} from 'react-router-dom';
import { ContextUser } from '../../context/Context';
export default function Navbar() {

  const { role } = useContext( ContextUser );
    const [activeLink, setActiveLink] = useState('');
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const getLinkClass = (link) => {
    return activeLink === link ? 'ahmed' : '';
  };
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
              <Link
                className={`nav-link  border-black ${getLinkClass("/")} `}
                aria-current="page"
                to="/"
                onClick={() => handleLinkClick("/")}
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  border-black ${getLinkClass(
                  "/lastNews"
                )}`}
                aria-current="page"
                to="/lastNews"
                onClick={() => handleLinkClick("/lastNews")}
              >
                اخر الاخبار
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link position-relative ${getLinkClass(
                  "/archiefthoura"
                )}`}
                aria-current="page"
                to="/archiefthoura"
                onClick={() => handleLinkClick("/archiefthoura")}
              >
                أرشيف الثورة{" "}
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
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/symbolthourauser"
                className={`nav-link position-relative evolution-archive ${getLinkClass(
                  "/symbolthourauser"
                )}`}
                aria-current="page"
                onClick={() => handleLinkClick("/symbolthourauser")}
              >
                رموز الثورة{" "}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">رموز الثورة</NavLink>
                  <NavLink to={"horonCard"} className="nav-link text-white">
                    بطاقة التكريم
                  </NavLink>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link position-relative evolution-archive  ${getLinkClass(
                  "/blacklistuser"
                )}`}
                aria-current="page"
                to="/blacklistuser"
                onClick={() => handleLinkClick("/blacklistuser")}
              >
                القائمة السوداء{" "}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">الخونة</NavLink>
                  <NavLink className="nav-link text-white">
                    مجرمين الحرب
                  </NavLink>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link position-relative evolution-archive ${getLinkClass(
                  "/graamsystem"
                )}`}
                aria-current="page"
                to="/graamsystem"
                onClick={() => handleLinkClick("/graamsystem")}
              >
                جرائم النظام{" "}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">
                    مجاز النظام{" "}
                  </NavLink>
                  <NavLink className="nav-link text-white">الشهداء</NavLink>
                  <NavLink className="nav-link text-white">المفقودين</NavLink>
                  <NavLink className="nav-link text-white">المعتقلين</NavLink>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link position-relative evolution-archive ${getLinkClass(
                  "/graemqasad"
                )}`}
                aria-current="page"
                to="/graemqasad"
                onClick={() => handleLinkClick("/graemqasad")}
              >
                جرائم قسد{" "}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">مجاز قسد </NavLink>
                  <NavLink className="nav-link text-white">الشهداء</NavLink>
                  <NavLink className="nav-link text-white">المفقودين</NavLink>
                  <NavLink className="nav-link text-white">المعتقلين</NavLink>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link position-relative evolution-archive  ${getLinkClass(
                  "/graemdashuser"
                )}`}
                aria-current="page"
                to="/graemdashuser"
                onClick={() => handleLinkClick("/graemdashuser")}
              >
                جرائم داعش{" "}
                <i className="fa-solid fa-greater-than text-muted"></i>
                <div className="evolution-archive-hover">
                  <NavLink className="nav-link text-white">مجاز داعش </NavLink>
                  <NavLink className="nav-link text-white">الشهداء</NavLink>
                  <NavLink className="nav-link text-white">المفقودين</NavLink>
                  <NavLink className="nav-link text-white">المعتقلين</NavLink>
                </div>
              </Link>
            </li>
          
              <li className="nav-item">
                <Link
                  className={`nav-link position-relative evolution-archive ${getLinkClass(
                    "/WantedToSystem"
                  )}`}
                  aria-current="page"
                  to="/WantedToSystem"
                  onClick={() => handleLinkClick("/WantedToSystem")}
                >
                  مطلوبين لنظام
                </Link>
              </li>
            
            {role === "admin" || role === "supervisor" ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/dashboard/userdash"
                >
                  صفحة الادمن
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}



