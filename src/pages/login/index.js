import { useState } from "react";
import "./index.css";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/authSlice";
import { Link } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const tokenn = useSelector((state) => state.auth.authToken);
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.status === 200) {
        const { token } = data;
        const { role } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        dispatch(setLogin(data));
      } else {
        console.log("Đăng nhập không thành công.");
      }
    } catch (err) {
      console.log("lỗi r");
    }
  };

  return (
    <div className="app">
      <div className="icon"></div>
      <div className="content_login">
        <div className="content_left">
          <div className="form_login">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="youname@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="login">
              <input
                type="submit"
                onClick={handleLogin}
                value="Login"
                className="signup"
                href="asas"
              ></input>
              <p>
                Don't have an account?
                <Link to="/">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
