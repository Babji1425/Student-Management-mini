import axios from "axios";
import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

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
            console.log(res.data);
            setStudent(res.data);
        })
        .catch(err=>{
            console.log("Error occured:", err);
        })
    },[])
    return(
        <div>
            <DashboardLayout />
            <div className="profile-container">
                <p>{student?.name}</p>
                <p>{student?.regNum}</p>
                <p>{student?.surName}</p>
                <p>{student?.branch}</p>
            </div>
        </div>
    )
}

export default Profile;