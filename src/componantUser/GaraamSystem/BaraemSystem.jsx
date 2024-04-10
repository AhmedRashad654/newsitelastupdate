import React from 'react'
import RegimeMassacres from './RegimeMassacres/RegimeMassacresUser'
import Martyrs from './Martyrs/MartyrsUser'
import Missing from './Missing/MissingUser'
import Detainees from './Detainees/DetaineesUser'
import SliderGaraemSystem from './SliderGaraemSystem'
export default function BaraemSystem() {
  return (
    <>
    <div className='container'>
           <div className="header position-relative py-5">
            <h3 className=" text-danger"> مجاز النظام</h3>
          </div>
         </div>
    <RegimeMassacres/>
    <SliderGaraemSystem/>
    <Martyrs/>
    <SliderGaraemSystem/>
    <Missing/>
    <Detainees/>
    <SliderGaraemSystem/>
    
    </>
  )
}
