import axios from "axios";
import { useEffect, useState } from "react";

function Profile(){
    const [student, setStudent] = useState(null);
    const regNum = localStorage.getItem("regNum");
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
        <div>
            <div className="studentDetails">
                <div className="sec1">
                    <div className="studentName">
                        <label htmlFor="student-name">Name:</label>
                        <p>{student?.surName} {student?.name}</p>
                    </div>
                    <div className="studentRegNum">
                        <label htmlFor="student-reg-num">Registered Number:</label>
                        <p>{student?.regNum}</p>
                    </div>
                    <div className="studentBranch">
                        <label htmlFor="student-branch">Branch:</label>
                        <p>{student?.branch}</p>
                    </div>
                </div>
                <div className="sec2">
                    <div className="studentName">
                        <label htmlFor="student-name">Name:</label>
                        <h2>{student?.surName} {student?.name}</h2>
                    </div>
                    <div className="studentRegNum">
                        <label htmlFor="student-reg-num">Registered Number:</label>
                        <h2>{student?.regNum}</h2>
                    </div>
                    <div className="studentBranch">
                        <label htmlFor="student-branch">Branch:</label>
                        <h2>{student?.branch}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;