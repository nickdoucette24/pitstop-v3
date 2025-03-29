import DashStandings from "../common/DashStandings/DashStandings";
import DashTitle from "../common/DashTitle/DashTitle";
import DashAside from "../DashAside/DashAside";
import DashAsideMobile from "../DashAsideMobile/DashAsideMobile";
import DashGraphs from "../DashGraphs/DashGraphs";
import DashWidgetBottom from "../DashWidgetBottom/DashWidgetBottom";
import DashWidgetMiddle from "../DashWidgetMiddle/DashWidgetMiddle";
import DashWidgetTop from "../DashWidgetTop/DashWidgetTop";
import styles from "./DashContent.module.scss";
import { useTheme } from "../../context";

type Props = {};

const DashContent = () => {
  const { theme } = useTheme();

  return (
    <div className={styles["content"]}>
      <div className={styles["content__container"]}>
        <div className={styles["content__group"]}>
          <DashTitle /**theme={theme}*/ />
          <DashWidgetTop theme={theme} />
          <div className={styles["mobile-aside"]}>
            <DashAsideMobile />
          </div>
        </div>
        <div className={styles["content__group"]}>
          <DashGraphs />
          <DashWidgetMiddle />
        </div>
        <div className={styles["content__group"]}>
          <DashStandings />
          <DashStandings />
          <DashWidgetBottom />
        </div>
      </div>
      <div className={styles["content__aside-wrapper"]}>
        <DashAside />
      </div>
    </div>
  );
};

export default DashContent;
