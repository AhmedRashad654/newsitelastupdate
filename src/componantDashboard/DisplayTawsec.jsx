import React, { useState } from 'react'
import style from '../styleDashboard/DisplayTawsec.module.css'
import imgone from '../image/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' 

export default function DisplayTawsec({ setDisTawsec, getAllUserDashboard }) {
  const [loading, setLoading] = useState(false);
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
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib29vQGdtYWlsLmNvbSIsImlkIjoiNjYxMjlmYTMyZDM3ZDE1MGM3MWNlMGRjIiwicm9sZSI6InN1cGVydmlzb3IifSwiaWF0IjoxNzEyNDk2NjE3fQ.MS_GWd6WexGSFGN4oWGO1WsnaQRgfC5ww5OkptpkObI",
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
        <img src={imgone} alt="" />
        <div className={style.bottombuttom}>
          <button className="btn btn-success" onClick={acceptedImd}>
            {loading ? (
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              "قبول"
            )}
          </button>
          <button className="btn btn-danger" onClick={() => setDisTawsec("")}>
            رفض
          </button>
        </div>
      </div>
    </div>
  );
}
