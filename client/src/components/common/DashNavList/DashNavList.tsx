import { FaHouse, FaChartColumn, FaCalendarDays } from "react-icons/fa6";
import { IoPodium, IoToday, IoAnalyticsSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";

type Props = {};

const DashNavList = (props: Props) => {
  return (
    <ul>
      <li>
        <FaHouse />
        Home
      </li>
      <li>
        <IoToday />
        Current Race
      </li>
      <li>
        <FaCalendarDays />
        Current Season
      </li>
      <li>
        <FaPlayCircle />
        LIVE Tracker
      </li>
      <li>
        <IoPodium />
        Standings
      </li>
      <li>
        <IoAnalyticsSharp />
        Statistics
      </li>
    </ul>
  );
};

export default DashNavList;
