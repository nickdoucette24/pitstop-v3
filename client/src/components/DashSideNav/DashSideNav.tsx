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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <nav
      data-theme={theme}
      className={`${styles["sidenav"]} ${
        isExpanded ? styles["expanded"] : styles[""]
      }`}
    >
      <div
        className={`${styles["logo-container"]} ${
          isExpanded ? styles["expanded"] : styles[""]
        }`}
      >
        <DashNavLogo isExpanded={isExpanded} />
        <button
          data-theme={theme}
          className={styles["expand-button"]}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <DashNavExpand isExpanded={isExpanded} />
        </button>
      </div>
      <hr className={styles["divider"]} />
      <div className={styles["nav-container"]}>
        <DashNavList
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          isExpanded={isExpanded}
          theme={theme}
        />
      </div>
      <hr className={styles["divider"]} />
      <div
        className={`${styles["fantasy-container"]} ${
          isExpanded ? styles["expanded"] : styles[""]
        }`}
      >
        <DashNavFantasy
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          theme={theme}
          isExpanded={isExpanded}
        />
      </div>
      <hr className={styles["divider"]} />
      <div className={styles["nav-container"]}>
        <DashNavSecondaryList
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          theme={theme}
          isExpanded={isExpanded}
        />
      </div>
      <div className={styles["tools-container"]}>
        <DashNavTools theme={theme} isExpanded={isExpanded} />
      </div>
    </nav>
  );
};

export default DashSideNav;
