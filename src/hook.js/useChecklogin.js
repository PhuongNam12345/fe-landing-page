import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function useCheckLogin() {
  const [isLogin, setIsLogin] = useState(false);

  const token = useSelector((state) => state.auth.authToken);

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
