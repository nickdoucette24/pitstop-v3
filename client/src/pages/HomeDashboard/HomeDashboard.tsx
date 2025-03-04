import DashSideNav from "../../components/DashSideNav/DashSideNav";
import DashContent from "../../components/DashContent/DashContent";
import styles from "./HomeDashboard.module.scss";

const HomeDashboard = () => {
  return (
    <div className={styles["dashboard"]}>
      <DashSideNav />
      <DashContent />
    </div>
  );
};

export default HomeDashboard;
