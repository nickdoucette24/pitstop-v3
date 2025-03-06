import { FaTrophy } from "react-icons/fa6";
import styles from "./DashNavFantasy.module.scss";
import { DASHNAV_ICON_MOBILE } from "../../../utils/constants";
// import { Link } from "react-router-dom";

type Props = {
  theme: string;
  isExpanded: boolean;
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
};

const DashNavFantasy = ({
  theme,
  isExpanded,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  const FANTASY_INDEX = 7;

  return (
    <div
      // to={"/fantasy"}
      data-theme={theme}
      className={`${styles["fantasy-tab"]} ${
        isExpanded ? styles["expanded"] : ""
      } ${selectedIndex === FANTASY_INDEX ? styles["active"] : ""}`}
      onClick={() => setSelectedIndex(FANTASY_INDEX)}
    >
      <FaTrophy
        className={`${styles["icon"]} ${
          isExpanded ? styles["expanded"] : styles[""]
        }`}
        size={DASHNAV_ICON_MOBILE}
      />
      <span
        className={`${styles["text"]} ${
          !isExpanded ? styles["shrunk"] : styles[""]
        }`}
      >
        Fantasy
      </span>
    </div>
  );
};

export default DashNavFantasy;
