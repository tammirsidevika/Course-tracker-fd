import "./Navbar.css";
const API_URL = "https://course-tracker-bd.onrender.com";
function Navbar() {
  return (
    <div className="navbar">

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search courses..."
        />
      </div>

      <div className="right-section">

        <div className="notification">
          🔔
        </div>

        <div className="profile">

          <img
            src="https://i.pravatar.cc/50"
            alt="Profile"
          />

          <div className="user-info">
            <h4>James Bond</h4>
            <p>Student</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;
