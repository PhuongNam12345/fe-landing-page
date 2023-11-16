import { useState } from "react";
import "./index.css";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/authSlice";
import { Link, Navigate } from "react-router-dom";

// import useChecklogin from "../../hook.js/useChecklogin";
// import { Navigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(0);
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
        const { id } = data;
        setStatus(200);
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        // const { role } = data;

        console.log(data);
        dispatch(setLogin({ token, id }));
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
              {status == 200 ? <Navigate to="/"></Navigate> : null}
              <p>
                Don't have an account?
                <Link to="/info">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
