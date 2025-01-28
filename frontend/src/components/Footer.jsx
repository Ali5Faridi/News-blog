// import React from 'react'

// function Footer() {
//   return (
//     <footer>
//       <div className="footer-container">
//         <p>&copy; 2025 News Blog. All rights reserved.</p>
//         <nav>
//           <a href="#">About Us</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Contact</a>
//         </nav>
//       </div>
//     </footer>
//   )
// }

// export default Footer
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

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
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
