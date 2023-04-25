import "../styles/Header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="header-overlay">
                <div className="container">
                    <div className="header-content">
                        <h1>Discover a better way to travel</h1>
                        <p>Find your dream holiday destinations, get great hotel deals, and save for your next travel, all in one space</p>
                        <div className="form-wrapper">
                            <small>Join Ope, Andy, and 3189 others on the waitlist</small>
                            <form>
                                <input type="text" className="header-input" placeholder="Enter email address" />
                                <input type="submit" className="header-button" value="Join Waitlist" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;