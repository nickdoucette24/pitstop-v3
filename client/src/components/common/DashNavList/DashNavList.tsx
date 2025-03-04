import { useState } from "react";
import { FaHouse, FaChartColumn, FaCalendarDays } from "react-icons/fa6";
import { IoPodium, IoToday, IoAnalyticsSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./DashNavList.module.scss";
import { NAVLIST_PRIMARY } from "../../../utils/constants";

type Props = {
  theme: string;
  isExpanded: boolean;
};
console.log(NAVLIST_PRIMARY);
const DashNavList = ({ theme, isExpanded }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // const mappedNavList = NAVLIST_PRIMARY.map((item, index) =>)

  return (
    <ul className={styles["navlist-wrapper"]}>
      {NAVLIST_PRIMARY.map((item, index) => (
        <li
          key={index}
          className={`${styles["container"]} ${
            theme === "light" ? styles["light"] : styles["dark"]
          } ${selectedIndex === index ? styles["active"] : ""}`}
          onClick={() => setSelectedIndex(index)}
        >
          {item === "Home" && (
            <>
              <FaHouse className={styles["icon"]} />
              <span
                className={`${styles["title"]} ${
                  !isExpanded ? styles["shrunk"] : styles[""]
                }`}
              >
                {item}
              </span>
            </>
          )}
          {item === "Current Race" && (
            <>
              <IoToday className={styles["icon"]} />
              <span
                className={`${styles["title"]} ${
                  !isExpanded ? styles["shrunk"] : styles[""]
                }`}
              >
                {item}
              </span>
            </>
          )}
          {item === "Current Season" && (
            <>
              <FaCalendarDays className={styles["icon"]} />
              <span
                className={`${styles["title"]} ${
                  !isExpanded ? styles["shrunk"] : styles[""]
                }`}
              >
                {item}
              </span>
            </>
          )}
          {item === "LIVE Tracker" && (
            <>
              <FaPlayCircle className={styles["icon"]} />
              <span
                className={`${styles["title"]} ${
                  !isExpanded ? styles["shrunk"] : styles[""]
                }`}
              >
                {item}
              </span>
            </>
          )}
          {item === "Standings" && (
            <>
              <IoPodium className={styles["icon"]} />
              <span
                className={`${styles["title"]} ${
                  !isExpanded ? styles["shrunk"] : styles[""]
                }`}
              >
                {item}
              </span>
            </>
          )}
          {item === "Statistics" && (
            <>
              <IoAnalyticsSharp className={styles["icon"]} />
              <span
                className={`${styles["title"]} ${
                  !isExpanded ? styles["shrunk"] : styles[""]
                }`}
              >
                {item}
              </span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DashNavList;
