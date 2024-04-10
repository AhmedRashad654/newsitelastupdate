import React from 'react';
import RegimeMassacres from './RegimeMassacres/RegimeMassacresUser';
import Martyrs from './Martyrs/MartyrsUser';
import Missing from './Missing/MissingUser';
import Detainees from './Detainees/DetaineesUser';
import SliderGraamQasad from './SliderGraamQasad';
export default function GaraamQasad() {
  return (
    <>
      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger"> مجاز قسد </h3>
        </div>
      </div>
      <RegimeMassacres />
      <SliderGraamQasad />
      <Martyrs />
      <SliderGraamQasad />
      <Missing />
      <SliderGraamQasad />
      <Detainees />
      <SliderGraamQasad />
    </>
  );
}
