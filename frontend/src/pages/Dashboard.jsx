import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
  const [student, setStudent] = useState(null);
  const regNum = localStorage.getItem("regNum");

  useEffect(() => {
    axios.get("http://localhost:8080/api/student/me", {
        headers: {
          "X-USER-REG-NUM": regNum,
        },
      })
      .then((res) => setStudent(res.data));
  }, []);

  return (
      <div className="cards">
        {/* Attendance Card */}
        <div className="card attendance-card">
          <h3>Attendance</h3>

          <div
            className="progress-ring"
            style={{ "--value": 92 }}
          >
            <span>92%</span>
          </div>
        </div>

        <div className="card attendance-card">
          <h3>Assignments</h3>

          <div
            className="progress-ring"
            style={{ "--value": 85 }}
          >
            <span>85%</span>
          </div>
        </div>

        <div className="card">
          <h3>Courses</h3>
          <p>6 Active</p>
        </div>

        <div className="card">
          <h3>Results</h3>
          <p>View</p>
        </div>
      </div>
  );


}

export default Dashboard;
