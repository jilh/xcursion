import "../styles/Footer.css";
import XcursionLogo from "../assets/images/xcursion-logo-grey.svg";
import Instagram from "../assets/images/instagram.png";
import LinkedIn from "../assets/images/linkedin.png";
import Twitter from "../assets/images/twitter.png";
import Email from "../assets/images/email.png";
const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="left-pan">
                        <img src={XcursionLogo} alt="Xcursion Logo" />
                        <p>At Xcursions, we are removing barriers to having a premium travel experience. Our travel processes are timely, and are handled by experts, to give you the experience you truly deserve. Travelling just got easier!</p>
                    </div>
                    <div className="right-pan">
                        <b>Contact Info</b>
                        <div className="social-icons">
                            <img src={LinkedIn} alt="LinkedIn" />
                            <img src={Twitter} alt="Twitter" />
                            <img src={Instagram} alt="Instagram" />
                        </div>
                        <p className="emails"><img src={Email} alt="Mail" />&nbsp; admin@xcursions.ng  |  &nbsp;<img src={Email} alt="Mail" />&nbsp;xcursionsng@gmail.com</p>
                        <p>+234 816 827 7417</p>
                    </div>
                </div>
                <p className="footer-note">Copyright &copy; 2023 | All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;