import React from "react";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </nav>
        <div className="social-icons">
          <a href="#" className="facebook" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" className="x" aria-label="X">
            <FaXTwitter />
          </a>
          <a href="#" className="instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="linkedin" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" className="youtube" aria-label="Youtube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
