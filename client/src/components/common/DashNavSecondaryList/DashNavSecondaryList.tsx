import { FaThumbtack, FaNewspaper } from "react-icons/fa6";
import styles from "./DashNavSecondaryList.module.scss";
import { DASHNAV_ICON_MOBILE } from "../../../utils/constants";

type Props = {
  theme: string;
  isExpanded: boolean;
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
};

const DashNavSecondaryList = ({
  theme,
  isExpanded,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  const NEWS_INDEX = -2;
  const PINS_INDEX = -3;

  return (
    <ul
      className={`${styles["secondary-list"]} ${
        isExpanded ? styles["expanded"] : ""
      }`}
    >
      <li
        data-theme={theme}
        className={`${styles["secondary-list__item"]} ${
          selectedIndex === NEWS_INDEX ? styles["active"] : ""
        } ${isExpanded ? styles["expanded"] : ""}`}
        onClick={() => setSelectedIndex(NEWS_INDEX)}
      >
        <FaNewspaper
          className={`${styles["secondary-icon"]} ${
            isExpanded ? styles["expanded"] : ""
          }`}
          size={DASHNAV_ICON_MOBILE}
        />
        <span
          className={`${styles["secondary-list__text"]} ${
            !isExpanded ? styles["shrunk"] : ""
          }`}
        >
          News
        </span>
      </li>
      <li
        data-theme={theme}
        className={`${styles["secondary-list__item"]} ${
          selectedIndex === PINS_INDEX ? styles["active"] : ""
        } ${isExpanded ? styles["expanded"] : ""}`}
        onClick={() => setSelectedIndex(PINS_INDEX)}
      >
        <FaThumbtack
          className={`${styles["secondary-icon"]} ${
            isExpanded ? styles["expanded"] : ""
          }`}
          size={DASHNAV_ICON_MOBILE}
        />
        <span
          className={`${styles["secondary-list__text"]} ${
            !isExpanded ? styles["shrunk"] : ""
          }`}
        >
          Pins
        </span>
      </li>
    </ul>
  );
};

export default DashNavSecondaryList;
