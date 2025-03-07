import styles from "./DashWidgetTop.module.scss";

type Props = {
  theme: string;
};

const DashWidgetTop = ({ theme }: Props) => {
  return (
    <div data-theme={theme} className={styles["widget-container"]}>
      <h4>Weather</h4>
    </div>
  );
};

export default DashWidgetTop;
