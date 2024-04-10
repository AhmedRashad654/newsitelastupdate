import React from 'react';
import Liberated from './Liberated/Liberated';
import style from './SymbolThouraUser.module.css';
import SliderSymbolThouraUser from './SliderSymbolThouraUser';
export default function SymbolThouraUser() {
  return (
    <>
      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger">رموز الثورة</h3>
        </div>
      </div>
      <Liberated />
      <SliderSymbolThouraUser />

      <div className="container">
        <div className={`header position-relative py-5 ${style.libCard}`}>
          <h3 className=" text-danger ">بطاقات التكريم </h3>
        </div>
      </div>
      <Liberated />
      <SliderSymbolThouraUser />
    </>
  );
}
