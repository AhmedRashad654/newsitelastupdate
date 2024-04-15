import styles from '../../styleDashboard/DataDisplaySite.module.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function DataSiteSymbol() {
  const navigate = useNavigate();
  const [ lastNews, setLastNews ] = useState( [] );

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
 
  //////////////////////
     const [takrem, setTakrem] = useState([]);
    useEffect(() => {
      async function getLastNews() {
        axios
          .get("https://syrianrevolution1.com/lists/userView")
          .then((result) => {
            setTakrem(result.data.data);
          })
          .catch((error) => console.log(error));
      }
      getLastNews();
    }, []);
  return (
    <div className={styles.DataSiteLastNews}>
      <div className={styles.allUser}>
        <div className={`containerTable`}>
          <table>
            <thead>
              <tr>
                <th> عنوان الخبر</th>
                <th>البيانات المنشورة</th>
                <th>التصنيف</th>
              </tr>
            </thead>
            <tbody>
              {lastNews &&
                lastNews.map((user, index) =>
                  user.category === "symbols" ? (
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
              {takrem &&
                lastNews.map((user, index) =>
                  user.category === "takrem" ? (
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
