import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ setSidebarOpen }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const regNum = localStorage.getItem("regNum");
  const [studentName, setStudentName] = useState("");


  useEffect(()=>{
    axios.get("http://localhost:8080/api/profile/me", {
      headers:{
        "STUDENT-REG-NUM" : regNum
      }
    })
    .then(res=>{
      console.log(res.data.name);
      setStudentName(res.data.name);
    })
    .catch(err=>{
      console.log(err);
    })
  }, [])

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
        Welcome back, <span style={{ color: "#2563eb" }}>{studentName}</span> 👋
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
