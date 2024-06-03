// import React from "react";
// import { Link } from "react-router-dom";
// import "../../assets/styles/header.css";
// import logo from "../../img/logo.png"; // Ensure you have a logo image in the assets directory

// const Header = () => {
//   return (
//     <header className="header">
//       <img src={logo} alt="Company Logo" className="logo" />
//       <nav className="navbar">
//         <Link to="/" className="nav-link">
//           Home{" "}
//         </Link>{" "}
//         <Link to="/login" className="nav-link">
//           Login{" "}
//         </Link>{" "}
//         <Link to="/signup" className="nav-link">
//           Sign Up{" "}
//         </Link>{" "}
//         <Link to="/about" className="nav-link">
//           About Us{" "}
//         </Link>{" "}
//       </nav>{" "}
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../assets/styles/header.css";
import logo from "../../img/logo.png"; // Ensure you have a logo image in the assets directory
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate  = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate('/')
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logo" />
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        {user ? (
          <button onClick={handleSignOut} className="nav-link">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </>
        )}
        <Link to="/login" className="nav-link">
          See Profile    
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;

