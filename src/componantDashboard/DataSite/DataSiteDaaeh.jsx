import React, { useEffect, useState } from 'react'
import styles from '../../styleDashboard/DataDisplaySite.module.css';
import { useNavigate } from "react-router-dom";
import  axios  from 'axios';
export default function DataSiteDaaeh() {
  const navigate = useNavigate();
    const [ lastNews, setLastNews ] = useState( [] );
    const [ masc, setMasc ] = useState( [] );
  useEffect( () => {
    async function getLastNews() {
      axios
        .get("https://syrianrevolution1.com/childData/userView")
        .then((result) => {
          setLastNews(result.data.data);
        })
        .catch((error) => console.log(error));
    }
    getLastNews()
  }, [] )
    console.log(lastNews)
    ////////////////mascers//////////////
      useEffect(() => {
        async function getLastNews() {
          axios
            .get("https://syrianrevolution1.com/massacres")
              .then( ( result ) => {
               
              setMasc(result.data.massacres);
            })
            .catch((error) => console.log(error));
        }
        getLastNews();
      }, []);
  return (
    <div className={styles.DataSiteLastNews}>
      <div className={styles.allUser}>
        <div className={styles.containerTable}>
          <table>
            <thead>
              <tr>
                <th> عنوان الخبر</th>
                <th>التصنيف</th>
                <th>البيانات المنشورة</th>
              </tr>
            </thead>
            <tbody>
              {lastNews &&
                lastNews.map((user, index) =>
                  (user.category === "martyr" ||
                    user.category === "adetaine" ||
                    user.category === "missing") &&
                  user.responsibleAuthority === "daaeh" ? (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.category}</td>
                      <td>
                        <button
                          className={`add `}
                          style={{ backgroundColor: "#3B9058", color: "white" }}
                          onClick={() => {
                            navigate(
                              `/dashboard/dataChildDisplaySite/${user._id}`
                            );
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
              {masc &&
                masc.map((user, index) =>
                  user.responsibleAuthority === "daaeh" ? (
                    <tr key={index}>
                      <td>{user.title}</td>
                      <td>massacres</td>
                      <td>
                        <button
                          className={`add `}
                          style={{ backgroundColor: "#3B9058", color: "white" }}
                          onClick={() => {
                            navigate(
                              `/dashboard/dataChildDisplaySitemascr/${user._id}`
                            );
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
