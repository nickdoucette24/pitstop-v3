import styles from "./DashNavLogo.module.scss";
import largeLogoYellow from "../../../assets/images/pitstop_logo_yellow.png";
// import smallLogoBlack from "../../../assets/images/pitstop_logo_small_black.png";
// import smallLogoWhite from "../../../assets/images/pitstop_logo_small_white.png";

type Props = {
  isExpanded: boolean;
};

const DashNavLogo = ({ isExpanded }: Props) => {
  return (
    <img
      src={largeLogoYellow}
      className={`${styles["logo"]} ${isExpanded ? styles["expanded"] : ""}`}
      alt="Pitstop Logo"
    />
  );
};

export default DashNavLogo;
