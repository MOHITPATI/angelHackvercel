// import React, { useState } from "react";

// const SignupForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     // Add signup logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <form className="signup-form" onSubmit={handleSubmit}>
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
//       <div className="form-group">
//         <label htmlFor="confirmPassword"> Confirm Password: </label>{" "}
//         <input
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//       </div>{" "}
//       <button type="submit"> Sign Up </button>{" "}
//     </form>
//   );
// };

// export default SignupForm;

// import React, { useState } from "react";
// import { signup } from "../../auth"; // Make sure the path is correct

// const SignupForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     try {
//       await signup(email, password);
//       // Redirect to another page or show a success message
//       console.log("User signed up successfully");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form className="signup-form" onSubmit={handleSubmit}>
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
//       <div className="form-group">
//         <label htmlFor="confirmPassword"> Confirm Password: </label>{" "}
//         <input
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//       </div>{" "}
//       {error && <p className="error-message"> {error} </p>}{" "}
//       <button type="submit"> Sign Up </button>{" "}
//     </form>
//   );
// };

// export default SignupForm;

// import React, { useState } from "react";
// import { signup } from "../../auth";
// import { useNavigate } from 'react-router-dom';
// const SignupForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     try {
//       await signup(email, password);
//       // alert("User signed up successfully");
//       // Redirect to another page or show a success message
//       navigate('/formFillUp');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form className="signup-form" onSubmit={handleSubmit}>
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
//       <div className="form-group">
//         <label htmlFor="confirmPassword"> Confirm Password: </label>{" "}
//         <input
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//       </div>{" "}
//       {error && <p className="error-message"> {error} </p>}{" "}
//       <button type="submit"> Sign Up </button>{" "}
//     </form>
//   );
// };

// export default SignupForm;

import React, { useState } from "react";
import { signup } from "../../auth";
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await signup(email, password);
      // Redirect to FormFillUp page with email as state
      navigate('/formFillUp', { state: { email } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;

