import { useState } from "react";
import { useTheme } from "../../context";
import styles from "./DashSideNav.module.scss";
import DashNavLogo from "../../components/common/DashNavLogo/DashNavLogo";
import DashNavExpand from "../../components/common/DashNavExpand/DashNavExpand";
import DashNavList from "../common/DashNavList/DashNavList";
import DashNavFantasy from "../common/DashNavFantasy/DashNavFantasy";
import DashNavSecondaryList from "../common/DashNavSecondaryList/DashNavSecondaryList";
import DashNavTools from "../common/DashNavTools/DashNavTools";

const DashSideNav = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <nav
      className={`${styles["sidenav"]} ${
        theme === "light" ? styles["light"] : styles["dark"]
      }`}
    >
      <div className={styles["logo-container"]}>
        <DashNavLogo />
        <DashNavExpand />
      </div>
      <div className={styles["nav-container"]}>
        <DashNavList />
      </div>
      <div className={styles["fantasy-container"]}>
        <DashNavFantasy />
      </div>
      <div className={styles["nav-container"]}>
        <DashNavSecondaryList />
      </div>
      <div className={styles["tools-container"]}>
        <DashNavTools />
      </div>
    </nav>
  );
};

export default DashSideNav;
