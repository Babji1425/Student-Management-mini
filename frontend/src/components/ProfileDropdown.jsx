import { useNavigate } from "react-router-dom";

function ProfileDropdown() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("regNum");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <p>Profile</p>
      <p onClick={logout} style={{ cursor: "pointer" }}>
        Logout
      </p>
    </div>
  );
}

export default ProfileDropdown;
