import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import DashboardLayout from "./layouts/DashboardLayout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
        </Route>
    </Routes>
  );
}

export default App;
