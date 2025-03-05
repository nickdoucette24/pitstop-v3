import styles from "./DashNavExpand.module.scss";
import { IoIosArrowDropright } from "react-icons/io";
// import expandIcon from "../../../assets/icons/expand.svg";

type Props = {
  isExpanded: boolean;
};

const DashNavExpand = ({ isExpanded }: Props) => {
  return (
    <div className={styles["icon-container"]}>
      <IoIosArrowDropright
        size={isExpanded ? "1.5rem" : "2rem"}
        className={`${styles["expand-icon"]} ${
          isExpanded ? styles["expanded"] : styles[""]
        }`}
      />
    </div>
  );
};

export default DashNavExpand;
