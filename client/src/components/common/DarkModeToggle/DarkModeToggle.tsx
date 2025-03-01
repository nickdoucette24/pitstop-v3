import { useTheme } from "../../../context";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import styles from "./DarkModeToggle.module.scss";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // const darkModeBackground =
  //   theme === "light" ? "var(--base-dark)" : "var(--accent-yellow)";

  // const opaqueBackground = theme === "light" ? "lightOpaque" : "darkOpaque";

  return (
    <button
      className={`${styles["themeSwitch"]} ${styles[theme]}`}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? (
        <MdOutlineDarkMode className={styles.icon} size={24} />
      ) : (
        <MdOutlineLightMode className={styles.icon} size={24} />
      )}
    </button>
  );
};

export default DarkModeToggle;
