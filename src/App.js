import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/index";
import Login from "./pages/login/index";
import Info from "./pages/infouser/infouser";
import useCheckLogin from "./hook.js/useChecklogin";
import Notfound from "./pages/notfound/notfound";
import { Navigate } from "react-router-dom";

function App() {
  // PROVIDERS
  const { isLogin } = useCheckLogin();
  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    return <Navigate to="/login" replace={true} />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/info"
          element={isLogin == true ? <Info /> : <Notfound />}
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
