import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    axios.post("http://localhost:8080/api/login", {
      email,
      password
    })
    .then(res => {
      console.log(res.data);
      setMessage("Login successful ✅");
    })
    .catch(err => {
      setMessage("Invalid email or password ❌");
    });
  };

  return (
    <div>
      <h2>Login</h2>

      <input 
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
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
