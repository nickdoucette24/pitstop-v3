import styles from "./DashNavExpand.module.scss";
import { IoIosArrowDropright } from "react-icons/io";
// import expandIcon from "../../../assets/icons/expand.svg";

type Props = {};

const DashNavExpand = (props: Props) => {
  return (
    <div>
      <IoIosArrowDropright size={"1.75rem"} className={styles["expand-icon"]} />
    </div>
  );
};

export default DashNavExpand;
