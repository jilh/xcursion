import "../styles/Hotels.css";
import HotelImage from "../assets/images/hotels.png";
const Hotels = () => {
    return(
        <div className="hotels">
            <div className="container">
                <div className="hotels-content">
                    <div className="hotels-text">
                        <h2>Book hotels across the globe</h2>
                        <p>Hotel booking hassles are old news here. Find your next stay with Xcursions. From hotels to short lets, to apartments for all your vacations. We've got you covered!</p>
                    </div>
                    <div className="hotels-right-pan">
                        <img src={HotelImage} alt="Travel" className="hotels-image"/>
                    </div>
                </div>
            </div>
            <div className="board-cta">
                <div className="container">
                    <div className="board-cta-content">
                        <h3>The Most Rewarding Way to Travel!</h3>
                        <small>Join waitlist to gain early access when we launch the webapp</small>
                        <form>
                            <input type="text" className="board-cta-input" placeholder="Enter email address" />
                            <input type="submit" className="board-cta-button" value="Join Waitlist" />
                        </form>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Hotels;