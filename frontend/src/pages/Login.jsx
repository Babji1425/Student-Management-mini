import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login(){
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState("");
    const navigate=useNavigate();

    const handleSubmit=(e) =>{
        e.preventDefalut();

        if(!email || !password){
            setError("All field are required");
            return;
        }
        if(email === "admin@test.com" && password ==="admin123"){
            localStorage.setItem("isAuth", "true");
            navigate("/dashboard");
        }
        else{
            setError("Invalid credentials");
        }
    };
    return(
        <div style={{padding:"50px"}}>
            <h2>Login</h2>

            {error && <p style={{color: "red"}}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br/><br/>

                <input type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/><br/>

                <button type="submit">Login</button>
            </form>
            <p>
             Don’t have an account? <a href="/signup">Signup</a>
            </p>

        </div>
    );
}

export default Login;