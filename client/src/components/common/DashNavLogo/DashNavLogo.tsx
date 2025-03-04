import styles from "./DashNavLogo.module.scss";
import smallLogoYellow from "../../../assets/images/pitstop_logo_small_yellow.png";
// import smallLogoBlack from "../../../assets/images/pitstop_logo_small_black.png";
// import smallLogoWhite from "../../../assets/images/pitstop_logo_small_white.png";

type Props = {};

const DashNavLogo = (props: Props) => {
  return <img src={smallLogoYellow} className={styles["dash-logo"]} />;
};

export default DashNavLogo;
