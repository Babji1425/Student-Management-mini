import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [regNum, setRegNum] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("http://localhost:8080/api/login", {
        regNum,
        password,
      })
      .then(() => {
        localStorage.setItem("regNum", regNum);
        localStorage.setItem("token", "logged-in");
        navigate("/dashboard");
      })
      .catch(() => {
        setMessage("Invalid register number or password ❌");
      });
  };

  return (
    <div>
      <h2>Student Login</h2>

      <input
        placeholder="Register Number"
        value={regNum}
        onChange={(e) => setRegNum(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <p style={{ color: "red" }}>{message}</p>

    </div>
  );
}

export default Login;
