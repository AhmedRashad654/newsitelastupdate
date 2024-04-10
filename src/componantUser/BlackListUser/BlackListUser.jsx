import React from 'react';
import './BlackListUser.css';
import FlagBlackList from './FlagBlackList';
import SliderBlackList from './SliderBlackList';
export default function BlackListUser() {
  return (
    <>
      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger"> القائمة السوداء </h3>
        </div>
      </div>
      <FlagBlackList />
      <SliderBlackList />

      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger"> الخونة </h3>
        </div>
      </div>
      <FlagBlackList />
      <SliderBlackList />
    </>
  );
}
