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
          <a href="https://facebook.com" target="blank" className="facebook" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://x.com" target="blank" className="x" aria-label="X">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com" target="blank" className="instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="blank" className="linkedin" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://youtube.com" target="blank" className="youtube" aria-label="Youtube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;