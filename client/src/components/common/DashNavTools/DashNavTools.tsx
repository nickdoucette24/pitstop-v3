import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import styles from "./DashNavTools.module.scss";
import { FaGear } from "react-icons/fa6";
import { DASHNAV_ICON_MOBILE } from "../../../utils/constants";

type Props = {
  theme: string;
  isExpanded: boolean;
};

const DashNavTools = ({ theme, isExpanded }: Props) => {
  return (
    <div
      data-theme={theme}
      className={`${styles["tools-container"]} ${
        isExpanded ? styles["expanded"] : ""
      }`}
    >
      <FaGear
        data-theme={theme}
        className={`${styles["settings-icon"]} ${
          isExpanded ? styles["expanded"] : ""
        }`}
        size={DASHNAV_ICON_MOBILE}
      />
      <DarkModeToggle />
    </div>
  );
};

export default DashNavTools;
