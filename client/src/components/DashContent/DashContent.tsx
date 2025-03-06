import DashStandings from "../common/DashStandings/DashStandings";
import DashTitle from "../common/DashTitle/DashTitle";
import DashAside from "../DashAside/DashAside";
import DashGraphs from "../DashGraphs/DashGraphs";
import DashWidgetBottom from "../DashWidgetBottom/DashWidgetBottom";
import DashWidgetMiddle from "../DashWidgetMiddle/DashWidgetMiddle";
import DashWidgetTop from "../DashWidgetTop/DashWidgetTop";
import styles from "./DashContent.module.scss";

type Props = {};

const DashContent = () => (
  <div className={styles["content"]}>
    <div className={styles["content__container"]}>
      <div className={styles["content__group"]}>
        <DashTitle />
        <DashWidgetTop />
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

export default DashContent;
