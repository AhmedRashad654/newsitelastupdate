import React, { useEffect, useState } from 'react'
import styles from '../../styleDashboard/DataDisplaySite.module.css';
import { useNavigate } from "react-router-dom";
import  axios  from 'axios';
export default function DataSiteBlackList() {
  const navigate = useNavigate();
  const [lastNews, setLastNews] = useState([]);
  useEffect(() => {
    async function getLastNews() {
      axios
        .get("https://syrianrevolution1.com/lists/userView")
        .then((result) => {
          setLastNews(result.data.data);
        })
        .catch((error) => console.log(error));
    }
    getLastNews();
  }, []);
  console.log(lastNews);
  return (
    <div className={styles.DataSiteLastNews}>
      <div className={styles.allUser}>
        <div className={`containerTable`}>
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
                  user.category === "Traitors" ||
                  user.category === "mogramharb" ? (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.category}</td>
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
