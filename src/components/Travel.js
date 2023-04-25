import "../styles/Travel.css";
import TravelImage from "../assets/images/travel-image.png";
const Travel = () => {
    return(
        <div className="travel">
            <div className="container">
                <div className="travel-content">
                    <div className="travel-text">
                        <h2>Save & Travel On The Go</h2>
                        <p>Automate your savings & reach your travel goals faster with our ‘pay small small’ plan. No Charges. No Penalties. Absolutely Free.</p>
                    </div>
                    <div className="right-pan">
                        <img src={TravelImage} alt="Travel" className="trave-image"/>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Travel;