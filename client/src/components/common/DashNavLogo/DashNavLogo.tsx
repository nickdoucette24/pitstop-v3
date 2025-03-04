import styles from "./DashNavLogo.module.scss";
import smallLogoYellow from "../../../assets/images/pitstop_logo_small_yellow.png";
import largeLogoYellow from "../../../assets/images/pitstop_logo_yellow.png";
// import smallLogoBlack from "../../../assets/images/pitstop_logo_small_black.png";
// import smallLogoWhite from "../../../assets/images/pitstop_logo_small_white.png";

type Props = {
  isExpanded: boolean;
};

const DashNavLogo = ({ isExpanded }: Props) => {
  return (
    <img
      src={isExpanded ? largeLogoYellow : smallLogoYellow}
      className={isExpanded ? styles["logo-large"] : styles["logo-small"]}
    />
  );
};

export default DashNavLogo;
