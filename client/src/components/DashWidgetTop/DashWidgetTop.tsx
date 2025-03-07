import { useState } from "react";
import styles from "./DashWidgetTop.module.scss";
import WidgetSwitch from "../common/WidgetSwitch/WidgetSwitch"; // Import WidgetSwitch
import WeatherWidget from "../common/WeatherWidget/WeatherWidget"; // Placeholder for weather
import PollsWidget from "../common/PollsWidget/PollsWidget"; // Placeholder for polls

type Props = {
  theme: string;
};

const DashWidgetTop = ({ theme }: Props) => {
  const [selectedWidgetTop, setSelectedWidgetTop] = useState<
    "weather" | "polls"
  >("weather");

  return (
    <div data-theme={theme} className={styles["widget-container"]}>
      <div className={styles["switch-container"]}>
        <WidgetSwitch
          theme={theme}
          isWeather={selectedWidgetTop === "weather"}
          toggleWidget={() =>
            setSelectedWidgetTop((prev) =>
              prev === "weather" ? "polls" : "weather"
            )
          }
        />
      </div>
      <div className={styles["widget-content"]}>
        {selectedWidgetTop === "weather" ? <WeatherWidget /> : <PollsWidget />}
      </div>
    </div>
  );
};

export default DashWidgetTop;
