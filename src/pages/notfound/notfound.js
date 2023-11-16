import React from "react";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="body">
      <h1> You are not login</h1>
      <p>
        Login here?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
export default Notfound;
