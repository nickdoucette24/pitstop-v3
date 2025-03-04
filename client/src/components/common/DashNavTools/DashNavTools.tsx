import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import styles from "./DashNavTools.module.scss";
import { FaGear } from "react-icons/fa6";

type Props = {};

const DashNavTools = (props: Props) => {
  return (
    <div className={styles["tools-container"]}>
      <FaGear />
      <DarkModeToggle />
    </div>
  );
};

export default DashNavTools;
