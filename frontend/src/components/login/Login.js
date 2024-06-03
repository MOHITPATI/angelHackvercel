import React from "react";
import "./Login.css";
import LoginForm from "../login/LoginForm.js";

// const Login = () => {
//   return (
//     <div className="login-container">
//       <h2> Login </h2> <LoginForm />
//     </div>
//   );
// };

// export default Login;
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2> Login </h2> <LoginForm />
      <div className="signup-message">
        Do not have an account ? <Link to="/signup"> Sign UP </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
