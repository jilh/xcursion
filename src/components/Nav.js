import "../styles/Nav.css";
import XcursionLogo from "../assets/images/xcursion-logo.svg";
import MenuIcon from "../assets/images/menu.png";

const Nav = () => {
    return(
        <div className="nav">
            <div className="container">
                <div className="nav-content">
                    <img src={XcursionLogo} alt="Xcursion Logo" className="brand-logo"/>
                    <div className="nav-link-group">
                        <a href="/#" className="nav-link">About Us</a>
                        <a href="/#" className="nav-link">FAQs</a>
                    </div>
                    <button className="nav-cta">Join waitlist</button>
                    <img src={MenuIcon} alt="Menu" className="menu-button"/>
                </div>
            </div>
        </div>
    )
}

export default Nav;