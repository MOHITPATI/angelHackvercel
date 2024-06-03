import React from "react";
import "../../assets/styles/body.css";
import image1 from "../../img/body_1.png"; // Replace with actual image path
import image2 from "../../img/body_2.png"; // Replace with actual image path
import image3 from "../../img/body_3.png"; // Replace with actual image path
import Footer from "../Footer/Footer";


const Body = () => {
  return (
    // <div className="body-container">
    //   <div className="overlay">
    //     <h1>Welcome to AngelHack</h1>
    //     <p>We connect with investors</p>
    //   </div>
    // </div>
    <div>
    <div className="body-container">
      <div className="overlay">
        <h1>Welcome to AngelHack</h1>
        <p>We connect with investors</p>
      </div>
    </div>
    <div>  
      <div className="content-section">
        <div className="content-item">
          <img src={image1} alt="Sample 1" className="content-image" />
          <p className="content-text">
          Welcome to AngelHack, an innovative platform designed to streamline and enhance the experience of hackathon participants and organizers. Our application provides a seamless interface for users to sign up, log in, and engage with the community. With real-time chat and collaboration tools, AngelHack ensures that teams can communicate effectively, share ideas, and stay connected throughout the event, making your hackathon journey smooth and enjoyable.
          </p>
        </div>
        <div className="content-item reverse">
        <img src={image2} alt="Sample 2" className="content-image" />
          <p className="content-text">
          AngelHack leverages the power of modern technologies like Firebase for secure user authentication and real-time database management. Our robust backend, built with Node.js and Express, ensures fast and reliable performance, while the frontend, developed with React, offers an intuitive and responsive user experience. Whether you're a participant or an organizer, AngelHack provides the tools and features needed to succeed in your hackathon endeavors.
          </p>
          
        </div>
        <div className="content-item">
          <img src={image3} alt="Sample 3" className="content-image" />
          <p className="content-text">
          In addition to facilitating smooth communication and collaboration, AngelHack offers comprehensive support for project submissions, judging, and feedback. Our platform is designed to handle all aspects of hackathon management, from initial registration to final project evaluation. By bringing together participants, mentors, and judges in one cohesive environment, AngelHack aims to foster innovation, creativity, and learning, ensuring a rewarding experience for everyone involved.
          </p>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Body;
