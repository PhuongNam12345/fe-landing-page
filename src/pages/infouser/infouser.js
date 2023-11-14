import React from "react";
import useChecklogin from "../../hook.js/useChecklogin";
import { useState } from "react";

const Info = () => {
  const { isLogin } = useChecklogin();
  const [customers, setCustomers] = useState([]);
  const fetchData = async () => {
    try {
      if (isLogin == true) {
        const response = await fetch("http://localhost:5000/infousers");
        const data = await response.json();
        setCustomers(data.People);
      }
    } catch (err) {
      console.log("lỗi r");
    }
  };
  fetchData();

  return (
    <div className="info">
      {isLogin == true ? <h1>âssssssssssss</h1> : <h1>sccccccccccccc</h1>}
      {!!customers &&
        customers.map((item, index) => (
          <tr key={index + 1}>
            <td>{index + 1}</td>
            <td>{item.Fullname}</td>
            <td>{item.Email}</td>
            <td>{item.Phone}</td>
            <td>{item.Address}</td>
          </tr>
        ))}
    </div>
  );
};
export default Info;
