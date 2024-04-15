import React, { useEffect, useState } from 'react'
import style from '../styleDashboard/DisplayTawsec.module.css'
import axios from 'axios';
export default function DisplayTawsec({ setDisTawsec, getAllUserDashboard }) {
  const [ loading, setLoading ] = useState( false );
  const [ singleUser, setSingleUser ] = useState( [] );
  
  useEffect( () => {
      async function getSingleUser() {
        try {
          await axios
            .get( "https://syrianrevolution1.com/users/all", {
              headers: {
                Authorization: localStorage.getItem( 'token' )
              }
            })
            .then( ( result ) => {
              setSingleUser(result.data.data);
            })
            .catch((error) => console.log(error));
        } catch (error) {
          console.log(error);
        }
    }
    getSingleUser();
  },[])

  async function acceptedImd() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://syrianrevolution1.com/users/accept/${localStorage.getItem(
          "IdConfidentUser"
        )}`,
        {
          method: "PATCH",
          headers: {
            Authorization:localStorage.getItem('token')
          },
        }
      );
       await response.json();
        setLoading( false );
        setDisTawsec( '' )
        getAllUserDashboard();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={style.colldisplayalert}>
      <div className={style.inlineDisplay}>
        {singleUser.length !== 0 &&
          singleUser.map((user) =>
            user._id === localStorage.getItem("IdConfidentUser") ? (
              <>
                <img
                  src={`https://syrianrevolution1.com/images/${user.docImg}`}
                  alt="tawsec"
                />
                <div className={style.bottombuttom}>
                  <button className="btn btn-success" onClick={acceptedImd}>
                    {loading ? (
                      <div
                        className="spinner-border text-secondary"
                        role="status"
                      >
                        <span className="sr-only"></span>
                      </div>
                    ) : (
                      "قبول"
                    )}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => setDisTawsec("")}
                  >
                    رفض
                  </button>
                </div>
              </>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
}
