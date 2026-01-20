import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [student, setStudent] = useState(null);
  const regNum = localStorage.getItem("regNum");
  
  useEffect(()=>{
    axios.get("http://localhost:8080/api/student/me", {
      headers: {
        "X-USER-REG-NUM": regNum
      }
    })
    .then( res=>{
      setStudent(res.data);
    })
    .catch( err=>
      console.log("error fetching data:", err)
    );
  }, []);

  return (
    <div>
      <h1>Welcome, {student?.regNum}</h1>
      <h2>{student?.password}</h2>
    </div>
  );
}

export default Dashboard;
