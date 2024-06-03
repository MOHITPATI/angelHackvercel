import { Link } from "react-router-dom";
import SignupForm from "../signup/signupForm.js";
import "../signup/signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2> Sign Up </h2> <SignupForm />
      <div className="login-message">
        Already have an account ? <Link to="/login"> Log In </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default Signup;
