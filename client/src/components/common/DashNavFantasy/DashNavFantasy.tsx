import { FaTrophy } from "react-icons/fa6";
import styles from "./DashNavFantasy.module.scss";
// import { Link } from "react-router-dom";

type Props = {
  theme: string;
  isExpanded: boolean;
};

const DashNavFantasy = ({ theme, isExpanded }: Props) => {
  return (
    <div
      // to={"/fantasy"}
      className={`${styles["fantasy-tab"]} ${
        theme === "light" ? styles["light"] : styles["dark"]
      }`}
    >
      <FaTrophy className={styles["icon"]} />
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
