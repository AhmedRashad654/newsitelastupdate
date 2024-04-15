import React from 'react';
import Navbar from '../componantUser/Navbar/Navbar';
import MainNav from '../componantUser/MainNav/MainNav';
import Header from '../componantUser/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { Helmet } from 'react-helmet-async';
export default function HomeUser() {
  return (
    <div>
      <Helmet>
        <title>سوريا</title>
        <meta
          name="description"
          content="اخبار الثورة السورية"
        />
      </Helmet>
      <MainNav />
      <Navbar />
      <Header />

      <div className="centerUser">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
