import { useState, useEffect } from "react";
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
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
};

const DashNavList = ({
  theme,
  isExpanded,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  useEffect(() => {
    const storedIndex = localStorage.getItem("selectedNavIndex");
    if (storedIndex !== null) {
      setSelectedIndex(Number(storedIndex));
    } else {
      setSelectedIndex(0);
    }
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      localStorage.setItem("selectedNavIndex", selectedIndex.toString());
    }
  }, [selectedIndex]);

  return (
    <ul
      className={`${styles["navlist-wrapper"]} ${
        isExpanded ? styles["expanded"] : ""
      }`}
    >
      {NAVLIST_PRIMARY.map((item, index) => (
        <li
          key={index}
          data-theme={theme}
          className={`${styles["container"]} ${
            selectedIndex === index ? styles["active"] : ""
          } ${isExpanded ? styles["expanded"] : ""}`}
          onClick={() => setSelectedIndex(index)}
        >
          {item === "Home" && (
            <>
              <FaHouse
                className={`${styles["icon"]} ${
                  isExpanded ? styles["expanded"] : ""
                }`}
                size={DASHNAV_ICON_MOBILE}
              />
              <span
                className={`${styles["title"]} ${
                  !isExpanded ? styles["shrunk"] : ""
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
