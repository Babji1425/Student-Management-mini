import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ setSidebarOpen }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const regNum = localStorage.getItem("regNum");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="navbar">
      <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
        ☰
      </button>

      <h2 style={{ marginBottom: "20px" }} className="welcome-text">
        Welcome back, <span style={{ color: "#2563eb" }}>{regNum}</span> 👋
      </h2>

      <div className="profile-wrapper">
        <div className="profile-name" onClick={() => setOpen(!open)}>
          {regNum} <i class='bx bx-chevrons-down' ></i>
        </div>

        {open && (
          <div className="profile-dropdown">
            <Link to="/profile">View Profile</Link>
            <p onClick={logout}>Logout</p>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
