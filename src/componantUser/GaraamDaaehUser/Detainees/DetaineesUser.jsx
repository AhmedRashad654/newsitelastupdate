import React, { useEffect, useState } from "react";
import "./DetaineesUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SliderDaaehThree from "../SliderDaaehThree";
import { useUser } from "../../../context/Context";
export default function DetaineesUser() {
  const [ martyr, setMartyr ] = useState( [] );
  const {child} = useUser()
  const navigate = useNavigate();
  useEffect(() => {
    async function getMartyr() {
      await axios
        .get("https://syrianrevolution1.com/childData/userView")
        .then((result) => {
          setMartyr(
            result.data.data.filter(
              (e) =>
                e.category === "adetaine" && e.responsibleAuthority === "daaeh"
            )
          );
        })
        .catch((error) => console.log(error));
    }
    getMartyr();
  }, []);
  console.log(martyr);
  return (
    <>
      <section className="detainees">
        <div className="container py-2">
          <div className="header position-relative py-5">
            <h3 className=" text-danger">المعتقلين</h3>
          </div>
          <div className="row gy-3 mb-4">
            {child &&
              child
                .filter(
                  (e) =>
                    e.category === "adetaine" &&
                    e.responsibleAuthority === "daaeh"
                )
                .slice(0, 8)
                .map((e, i) => (
                  <div className="col-md-3" key={i}>
                    <div className="image mb-2">
                      <img
                        src={`https://syrianrevolution1.com/imgData/${e.profileImage}`}
                        alt="martyr"
                        className=" w-100 rounded-3 fimg"

                      />
                    </div>
                    <p>
                      {e?.name ? e?.name : ""}
                      <br />
                      <button
                        className="btu d-inline-block mx-1 px-3 rounded-3"
                        onClick={() => navigate(`/NewsDetailsMartyr/${e._id}`)}
                      >
                        المزيد
                      </button>
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </section>
      <SliderDaaehThree />
    </>
  );
}
