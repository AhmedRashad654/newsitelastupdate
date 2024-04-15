import React, { useEffect, useState } from 'react'
import styles from '../../styleDashboard/DataDisplaySite.module.css';
import { useNavigate } from "react-router-dom";
import  axios  from 'axios';
export default function DataSiteLastNews() {
  const navigate = useNavigate();
  const [ lastNews, setLastNews ] = useState( [] );
  useEffect( () => {
    async function getLastNews() {
      axios.get( "https://syrianrevolution1.com/lists/" ).then( ( result ) => {
        setLastNews( result.data.data );
      }).catch((error)=>console.log(error));
    }
    getLastNews()
  },[])
  return (
    <div className={styles.DataSiteLastNews}>
      <div className={styles.allUser}>
        <div className={`containerTable`}>
          <table>
            <thead>
              <tr>
                <th> عنوان الخبر</th>
                <th>البيانات المنشورة</th>
              </tr>
            </thead>
            <tbody>
              {lastNews &&
                lastNews.map((user, index) =>
                  user.category === "lastNews" ? (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>
                        <button
                          className={`add `}
                          style={{ backgroundColor: "#3B9058", color: "white" }}
                          onClick={() => {
                            navigate(`/dashboard/dataDisplaySite/${user._id}`);
                          }}
                        >
                          عرض
                        </button>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
