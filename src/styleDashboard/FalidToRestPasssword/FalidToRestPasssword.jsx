{
  user?.isConfident === true && user?.docImg !== null ? (
    <span
      className={styles.spanradiues}
      style={{ backgroundColor: "green" }}
    ></span>
  ) : user?.docImg !== null ? (
    <span
      className={styles.spanradiues}
      style={{ backgroundColor: "yellow" }}
    ></span>
  ) : (
    <span
      className={styles.spanradiues}
      style={{ backgroundColor: "red" }}
    ></span>
  );
}
