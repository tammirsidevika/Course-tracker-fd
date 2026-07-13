import "./Sidebar.css";
import {
  FaBook,
  FaChartLine,
  FaComments,
  FaFolder,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaShieldAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <h2>Logo</h2>
      </div>

      <ul className="menu">

        <li>
          <FaChartLine />
          Performance
        </li>

        <li className="active">
          <FaBook />
          Courses
        </li>

        <li>
          <FaComments />
          Comments
        </li>

        <li>
          <FaFolder />
          Resources
        </li>

      </ul>

      <div className="upgrade">

        <h3>Upgrade your plan</h3>

        <p>Enjoy the new features</p>

        <button>Upgrade Now</button>

      </div>

      <ul className="bottomMenu">

        <li>
          <FaCog />
          Setting
        </li>

        <li>
          <FaShieldAlt />
          Privacy Policy
        </li>

        <li>
          <FaQuestionCircle />
          Help
        </li>

        <li>
          <FaSignOutAlt />
          Logout
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;