import { FaHouse, FaChartColumn, FaCalendarDays } from "react-icons/fa6";
import { IoPodium, IoToday, IoAnalyticsSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./DashNavList.module.scss";

type Props = {
  theme: string;
};

const DashNavList = ({ theme }: Props) => {
  return (
    <ul className={styles["navlist-wrapper"]}>
      <li
        className={`${styles["container"]} ${
          theme === "light" ? styles["light"] : styles["dark"]
        }`}
      >
        <FaHouse className={styles["icon"]} />
        <span className={styles["title"]}>Home</span>
      </li>
      <li
        className={`${styles["container"]} ${
          theme === "light" ? styles["light"] : styles["dark"]
        }`}
      >
        <IoToday className={styles["icon"]} />
        <span className={styles["title"]}>Current Race</span>
      </li>
      <li
        className={`${styles["container"]} ${
          theme === "light" ? styles["light"] : styles["dark"]
        }`}
      >
        <FaCalendarDays className={styles["icon"]} />
        <span className={styles["title"]}>Current Season</span>
      </li>
      <li
        className={`${styles["container"]} ${
          theme === "light" ? styles["light"] : styles["dark"]
        }`}
      >
        <FaPlayCircle className={styles["icon"]} />
        <span className={styles["title"]}>LIVE Tracker</span>
      </li>
      <li
        className={`${styles["container"]} ${
          theme === "light" ? styles["light"] : styles["dark"]
        }`}
      >
        <IoPodium className={styles["icon"]} />
        <span className={styles["title"]}>Standings</span>
      </li>
      <li
        className={`${styles["container"]} ${
          theme === "light" ? styles["light"] : styles["dark"]
        }`}
      >
        <IoAnalyticsSharp className={styles["icon"]} />
        <span className={styles["title"]}>Statistics</span>
      </li>
    </ul>
  );
};

export default DashNavList;
