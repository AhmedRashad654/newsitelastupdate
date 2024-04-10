import React from 'react';
import RegimeMassacres from './RegimeMassacres/RegimeMassacresUser';
import Martyrs from './Martyrs/MartyrsUser';
import Missing from './Missing/MissingUser';
import Detainees from './Detainees/DetaineesUser';
import SliderGaraamDaaehUser from './SliderGaraamDaaehUser';
export default function GaraamDaaehUser() {
  return (
    <>
      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger"> مجاز داعش </h3>
        </div>
      </div>
      <RegimeMassacres />
      <SliderGaraamDaaehUser />
      <Martyrs />
      <SliderGaraamDaaehUser />
      <Missing />
      <SliderGaraamDaaehUser />
      <Detainees />
      <SliderGaraamDaaehUser />
    </>
  );
}
