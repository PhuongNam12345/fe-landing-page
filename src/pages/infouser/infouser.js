import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const Info = () => {
  const dispatch = useDispatch();
  // const [customers, setCustomers] = useState([]);
  const id = localStorage.getItem("id");
  const user = useSelector((state) => state.info.userInfo);
  if (id) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/infouser?id=${id}`
          );
          const data = await response.json();
          dispatch(setUser(data));
        } catch (err) {
          console.log(err);
        }
      };

      fetchData(); // Gọi fetchData từ useEffect để tránh gọi liên tục khi render
    }, [dispatch, id]);
  } else {
    console.log("null id");
  }
  return (
    <div className="info">
      <h3>Full Name</h3>
      {user.Fullname}
      <h3>Email</h3>
      {user.Email}
      <h3>Phone</h3>
      {user.Phone}
      <h3>Adress</h3>
      {user.Address}
    </div>
  );
};
export default Info;
