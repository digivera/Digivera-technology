
import { Link } from 'react-router-dom';


interface FooterProps {
  addTFiveClass?: boolean;
}
const Footer = ({ addTFiveClass = true }: FooterProps) => {
  return (
    <footer className={`footer-section ${addTFiveClass ? 'pt-5' : ''}`}>
      <div className="container">
        <div className="row gy-4">

          {/* Logo + About */}
          <div className="col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="footer-logo">
              <img src="/assets/img/logo.png" alt="DigiVera Logo" />
            </div>
            <p className="footer-text">
              Integrated IT, automation, customer support, and workforce
              management services — accelerating digital transformation
              for businesses worldwide.
            </p>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><Link to="/"><i className="fa-solid fa-arrow-right"></i>Home</Link></li>
              <li><Link to="/about-us"><i className="fa-solid fa-arrow-right"></i>About Us</Link></li>
              <li><Link to="/services"><i className="fa-solid fa-arrow-right"></i>Services</Link></li>
              <li><Link to="/why-us"><i className="fa-solid fa-arrow-right"></i>Why Us</Link></li>
              <li><Link to="/contact-us"><i className="fa-solid fa-arrow-right"></i>Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Duplicate */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services"><i className="fa-solid fa-arrow-right"></i>Software Development</Link></li>
              <li><Link to="/services"><i className="fa-solid fa-arrow-right"></i>AI Solutions</Link></li>
              <li><Link to="/services"><i className="fa-solid fa-arrow-right"></i>Automation Solutions</Link></li>
              <li><Link to="/services"><i className="fa-solid fa-arrow-right"></i>Digital Marketing</Link></li>
              <li><Link to="/services"><i className="fa-solid fa-arrow-right"></i>Call Center / BPO</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0.7s">
            <h3 className="footer-title contact-title">Contact Details</h3>
            <ul className="contact-list">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>G-103, AceCity, Sector 1, Greater Noida West, Uttar Pradesh-201306.</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>+91 87962 94441, +91 87962 94442, <br />
                  +91 87962 94443</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <span>customersupport@digivera.co.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="copyright">
          <div className="row">
            <div className="col-md-3 wow fadeInLeft" data-wow-delay="0.1s">
              <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms">Terms and Conditions</Link>
            </div>
            <div className="col-md-5 wow fadeInUp" data-wow-delay="0.1s">
              <p>&copy; 2026 DigiVera Technologies India Pvt. Limited. All rights reserved.</p>
            </div>
            <div className="col-md-4 wow fadeInRight" data-wow-delay="0.1s">
              <p><a href="https://www.multidimensionwebsolutions.com/" target="_blank" rel="noopener noreferrer">Powered By Multi Dimension Web Solutions</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
