import React, { useEffect, useState } from "react";
import styles from "../../styleDashboard/DataDisplaySite.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function DataSiteLastNews() {
  const navigate = useNavigate();
  const [lastNews, setLastNews] = useState([]);
  useEffect(() => {
    async function getLastNews() {
      axios
        .get("https://syrianrevolution1.com/lists/")
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
        <div className={styles.containerTable}>
          <table>
            <thead>
              <tr>
                <th> عنوان الخبر</th>
                <td>التصنيف</td>
                <th>البيانات المنشورة</th>
              </tr>
            </thead>
            <tbody>
              {lastNews &&
                lastNews.map((user, index) =>
                  user.category === "mozaharat" ||
                  user.category === "maarek" ? (
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
