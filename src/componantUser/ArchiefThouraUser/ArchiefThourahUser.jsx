import React from 'react';
import LiberatedArchief from './LiberatedArchief';
import FlagArchief from './FlagArchief';

export default function ArchiefThourahUser() {
  return (
    <>
      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger">المظاهرات</h3>
        </div>
      </div>
      <LiberatedArchief />
      <FlagArchief />

      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger">معارك الثوار</h3>
        </div>
      </div>
      <LiberatedArchief />
      <FlagArchief />
    </>
  );
}
