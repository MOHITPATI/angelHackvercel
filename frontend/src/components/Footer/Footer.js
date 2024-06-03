import React from "react";
import "../../assets/styles/footer.css";
import gitHub from "../../img/github.png"
import linkedIn from "../../img/linkedin.png"

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-left">
        <p>
          Made with <span role="img" aria-label="love">❤️</span> by Team Members
        </p>
        <p>For Hackerearth Hackathon</p>
      </div>
      <div className="footer-right">
        <a href="https://github.com/MOHITPATI" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src={gitHub} alt="github" width={30} height={30}/>
        </a>
        <a href="https://www.linkedin.com/in/mohit-pati-1b2160176/" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <img src={linkedIn} alt="linkedin" width={30} height={30}/>
        </a>
      </div>
      <div className="footer-bottom">
        <p>
          <span role="img" aria-label="copyright">©️</span> Copyright 2024 @Team
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
