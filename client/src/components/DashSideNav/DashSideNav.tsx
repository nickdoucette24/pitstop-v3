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
        <DashNavLogo isExpanded={isExpanded} />
        <button
          className={`${
            theme === "light"
              ? styles["expand-button-light"]
              : styles["expand-button-dark"]
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <DashNavExpand isExpanded={isExpanded} />
        </button>
      </div>
      <hr
        className={`${styles["divider"]} ${
          theme === "light" ? styles["light-divider"] : styles["dark-divider"]
        }`}
      />
      <div className={styles["nav-container"]}>
        <DashNavList isExpanded={isExpanded} theme={theme} />
      </div>
      <hr
        className={`${styles["divider"]} ${
          theme === "light" ? styles["light-divider"] : styles["dark-divider"]
        }`}
      />
      <div className={styles["fantasy-container"]}>
        <DashNavFantasy />
      </div>
      <hr
        className={`${styles["divider"]} ${
          theme === "light" ? styles["light-divider"] : styles["dark-divider"]
        }`}
      />
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
