import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
function Profile(){
    const [student, setStudent] = useState(null);
    const regNum = localStorage.getItem("regNum");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:8080/api/profile/me",{
            headers: {
                "STUDENT-REG-NUM": regNum
            }
        })
        .then(res=>{
            setStudent(res.data);
        })
        .catch(err=>{
            console.log("Error occured:", err);
        })
    },[])
    return(
       <div className="dashboard-container">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="main-content">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <div className="dashboard-content">
          <h2>My Profile</h2>
          <p>Profile details will appear here.</p>
        </div>
      </div>
    </div>
    )
}

export default Profile;