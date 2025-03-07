import { MdOutlineSwitchLeft, MdOutlineSwitchRight } from "react-icons/md";
import styles from "./WidgetSwitch.module.scss";

type WidgetSwitchProps = {
  isWeather: boolean;
  toggleWidget: () => void;
  theme: string;
};

const WidgetSwitch = ({
  isWeather,
  toggleWidget,
  theme,
}: WidgetSwitchProps) => {
  return (
    <button
      data-theme={theme}
      className={styles["widget-switch"]}
      onClick={toggleWidget}
    >
      {isWeather ? (
        <MdOutlineSwitchLeft size={24} />
      ) : (
        <MdOutlineSwitchRight size={24} />
      )}
    </button>
  );
};

export default WidgetSwitch;
