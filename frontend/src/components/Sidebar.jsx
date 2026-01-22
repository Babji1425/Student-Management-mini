import {NavLink} from "react-router-dom";
function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <h2>SMS</h2>
      <nav className="link">
      <NavLink to="/dashboard" className="sidebar-link">
      <i class='bx  bxs-dashboard'></i> 
          Dashboard
      </NavLink>

      <NavLink to="/attendance" className="sidebar-link">
      <i class='bx bxs-doughnut-chart'></i>
          Attendance
      </NavLink>

      <NavLink to="/courses" className="sidebar-link">
      <i class='bx bxs-book'></i>
          Courses
      </NavLink>

      <NavLink to="/results" className="sidebar-link">
      <i class='bx bxs-receipt'></i>
          Results
      </NavLink>

      <NavLink to="/profile" className="sidebar-link">
      <i class='bx bxs-id-card'></i>
          Profile
      </NavLink>
      </nav>

      {/* Mobile close */}
      <button className="close-btn" onClick={() => setSidebarOpen(false)}>
        ✕
      </button>
    </aside>
  );
}

export default Sidebar;
