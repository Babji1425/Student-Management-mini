import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [regNum, setRegNum] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post("http://localhost:8080/api/login", {
      regNum,
      password
    })

    .then(res => {
      // console.log(res.data);
      alert("Login successful ✅");
      // console.log(res.status);
      if(res.status === 200){
        localStorage.setItem("regNum", res.data.regNum);
        localStorage.setItem("token", "logged-in");
        navigate("/dashboard");
      }

    })

    .catch(err => {
      alert("Invalid email or password ❌");
    });
  };

  return (
    <div>
      <h2>Login</h2>

      <input 
        type="text"
        placeholder="Register Number"
        value={regNum}
        onChange={e => setRegNum(e.target.value)}
      />

      <br /><br />

      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
