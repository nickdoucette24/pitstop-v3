import { FaThumbtack, FaNewspaper } from "react-icons/fa6";

type Props = {};

const DashNavSecondaryList = (props: Props) => {
  return (
    <ul>
      <li>
        <FaNewspaper />
        News
      </li>
      <li>
        <FaThumbtack />
        Pins
      </li>
    </ul>
  );
};

export default DashNavSecondaryList;
