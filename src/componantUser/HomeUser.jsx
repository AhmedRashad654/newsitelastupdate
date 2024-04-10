import React from 'react';
import Navbar from '../componantUser/Navbar/Navbar';
import MainNav from '../componantUser/MainNav/MainNav';
import Header from '../componantUser/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
export default function HomeUser() {
  return (
    <div>
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
