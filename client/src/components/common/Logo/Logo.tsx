import { useTheme } from "../../../context";
import logoBlack from "../../../assets/images/pitstop_logo_black.png";
import logoYellow from "../../../assets/images/pitstop_logo_yellow.png";
// import logoWhite from "../../../assets/images/pitstop_logo_white.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <img
      className={styles["logo"]}
      src={theme === "light" ? logoBlack : logoYellow}
      alt="pitstop logo"
    />
  );
};

export default Logo;
