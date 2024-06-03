// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1> Welcome to Angel Hack </h1>{" "}
//     </div>
//   );
// }

// export default App;

//import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React from "react";
// import Login from "../src/components/login/Login.js";
// import "../src/assets/styles/App.css";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Route path="/login" component={Login} />{" "}
//       </div>{" "}
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../src/components/login/Login.js";
import Signup from "../src/components/signup/signup.js";
import ProfileDashboard from "../src/components/Profile/ProfileDashboard.js"
import Home from "./home.js";

import "../src/assets/styles/App.css";
import FormFillUp from "./components/FormFillUp/FormFillUp.js";
import Chat from "./components/Chat/Chat.js";
import Video from "./components/Video/Video.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
          <Route path="/profile" element={<ProfileDashboard />} />{" "}
          <Route path="/formFillUp" element={<FormFillUp/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/video" element={<Video/>} />
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
