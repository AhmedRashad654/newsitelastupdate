import React from 'react';
import LiberatedArchief from './LiberatedArchief';
import FlagArchief from './FlagArchief';
import LiberatedArchiefTwo from './LiberatedArchiefTwo';
import FlagArchiefTwo from './FlagArchiefTwo';
import { Helmet } from "react-helmet-async";
export default function ArchiefThourahUser() {
  return (
    <>
      <Helmet>
        <title>ارشيف الثورة</title>
        <meta name="description" content="ارشيف الثورة السورية" />
      </Helmet>
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
      <LiberatedArchiefTwo />
      <FlagArchiefTwo />
    </>
  );
}
