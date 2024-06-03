import React from "react";
import Header from "../src/components/Header/Header.js";
import Body from "./components/Body/Body.js";
const Home = () => {
  return (
    <div>
      <Header />
      {/* <main>
        <h1>Welcome to Our Company</h1>
        <p>This is the home page.</p>
      </main> */}
      <Body />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
