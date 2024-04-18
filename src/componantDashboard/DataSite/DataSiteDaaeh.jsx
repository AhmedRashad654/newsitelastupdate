import React from 'react'
import styles from '../../styleDashboard/DataDisplaySite.module.css';
import { useNavigate } from "react-router-dom";
import { useUser } from '../../context/Context';

export default function DataSiteDaaeh() {
  const navigate = useNavigate();
  //////////////////
  const { child, masc } = useUser();

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
              {child &&
                child.map((user, index) =>
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
