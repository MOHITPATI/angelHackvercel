// import React, { useState } from "react";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add authentication logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="email"> Email: </label>{" "}
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>{" "}
//       <div className="form-group">
//         <label htmlFor="password"> Password: </label>{" "}
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>{" "}
//       <button type="submit"> Login </button>{" "}
//     </form>
//   );
// };

// export default LoginForm;

// import React, { useState } from "react";
// import { login } from "../../auth.js"; // Adjust the import path as needed
// import { useNavigate } from 'react-router-dom';
// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       // Redirect to another page or show a success message
//       // alert("User logged in successfully");
//       navigate('/profile'); // Redirect to profile page
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="email"> Email: </label>{" "}
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>{" "}
//       <div className="form-group">
//         <label htmlFor="password"> Password: </label>{" "}
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>{" "}
//       {error && <p className="error-message"> {error} </p>}{" "}
//       <button type="submit"> Login </button>{" "}
//     </form>
//   );
// };

// export default LoginForm;

import React, { useState } from "react";
import { login } from "../../auth.js"; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Redirect to profile page with email state
      navigate('/profile', { state: { email } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password"> Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-message"> {error} </p>}
      <button type="submit"> Login </button>
    </form>
  );
};

export default LoginForm;

