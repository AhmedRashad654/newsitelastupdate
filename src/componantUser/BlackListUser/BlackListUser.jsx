import React from 'react';
import './BlackListUser.css';
import FlagBlackList from './FlagBlackList';
import SliderBlackList from './SliderBlackList';
import FlagBlackListTwo from './FlagBlackListTwo';
import SliderBlackListTwo from './SliderBlackListTwo';
import { Helmet } from 'react-helmet-async';
export default function BlackListUser() {
  return (
    <>
      <Helmet>
        <title>  القائمة السوداء</title>
        <meta name="description" content="  القائمة السوداء" />
      </Helmet>
      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger"> الخونة </h3>
        </div>
      </div>
      <FlagBlackList />
      <SliderBlackList />

      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger"> مجرمين الحرب </h3>
        </div>
      </div>
      <FlagBlackListTwo />
      <SliderBlackListTwo />
    </>
  );
}
