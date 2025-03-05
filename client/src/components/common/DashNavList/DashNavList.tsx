import { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPodium, IoToday, IoAnalyticsSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./DashNavList.module.scss";
import { NAVLIST_PRIMARY } from "../../../utils/constants";
import { DASHNAV_ICON_MOBILE } from "../../../utils/constants";

type Props = {
  theme: string;
  isExpanded: boolean;
};

const DashNavList = ({ theme, isExpanded }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ul
      className={`${styles["navlist-wrapper"]} ${
        isExpanded ? styles["expanded"] : styles[""]
      }`}
    >
      {NAVLIST_PRIMARY.map((item, index) => (
        <li
          key={index}
          className={`${styles["container"]} ${
            theme === "light" ? styles["light"] : styles["dark"]
          } ${selectedIndex === index ? styles["active"] : ""} ${
            isExpanded === true ? styles["expanded"] : styles[""]
          }`}
          onClick={() => setSelectedIndex(index)}
        >
          {item === "Home" && (
            <>
              <FaHouse
                className={`${styles["icon"]} ${
                  isExpanded ? styles["expanded"] : styles[""]
                }`}
                size={DASHNAV_ICON_MOBILE}
              />
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
              <IoToday
                className={`${styles["icon"]} ${
                  isExpanded ? styles["expanded"] : styles[""]
                }`}
                size={DASHNAV_ICON_MOBILE}
              />
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
              <FaCalendarAlt
                className={`${styles["icon"]} ${
                  isExpanded ? styles["expanded"] : styles[""]
                }`}
                size={isExpanded ? "1.5rem" : "1.75rem"}
              />
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
              <FaPlayCircle
                className={`${styles["icon"]} ${
                  isExpanded ? styles["expanded"] : styles[""]
                }`}
                size={DASHNAV_ICON_MOBILE}
              />
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
              <IoPodium
                className={`${styles["icon"]} ${
                  isExpanded ? styles["expanded"] : styles[""]
                }`}
                size={DASHNAV_ICON_MOBILE}
              />
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
              <IoAnalyticsSharp
                className={`${styles["icon"]} ${
                  isExpanded ? styles["expanded"] : styles[""]
                }`}
                size={DASHNAV_ICON_MOBILE}
              />
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
