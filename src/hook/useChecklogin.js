// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function useCheckLogin() {
  const [isLogin, setIsLogin] = useState(false);
  // localStorage.removeItem("token");
  var token = localStorage.getItem("token");

  // const token = useSelector((state) => state.auth.authToken);
  // const

  // const id = useSelector((state) => state.auth.id);
  // console.log(id);

  useEffect(() => {
    // Sử dụng useEffect để kiểm tra trạng thái đăng nhập khi token thay đổi
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [token]); // Dependency array ensures the effect runs when the token changes

  return { isLogin };
}

export default useCheckLogin;
