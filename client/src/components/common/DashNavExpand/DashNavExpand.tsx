import styles from "./DashNavExpand.module.scss";
import { IoIosArrowDropright } from "react-icons/io";
// import expandIcon from "../../../assets/icons/expand.svg";

type Props = {
  isExpanded: boolean;
};

const DashNavExpand = ({ isExpanded }: Props) => {
  return (
    <div>
      <IoIosArrowDropright
        size={"1.75rem"}
        className={`${styles["expand-icon"]} ${
          isExpanded ? styles["expanded"] : styles[""]
        }`}
      />
    </div>
  );
};

export default DashNavExpand;
