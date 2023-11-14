import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/index";
import Login from "./pages/login/index";
import Info from "./pages/infouser/infouser";

function App() {
  // PROVIDERS
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
