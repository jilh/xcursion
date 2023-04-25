import "../styles/Vacation.css";
import VacationImage from "../assets/images/vacation.png";
const Vacation = () => {
    return(
        <div className="vacation">
            <div className="container">
                <div className="vacation-content">
                    <div className="left-pan">
                        <img src={VacationImage} alt="Travel" className="vacation-image"/>
                    </div> 
                    <div className="vacation-text">
                        <h2>Access Vacation Options in One Click</h2>
                        <p>With our wide range of budget-friendly vacation deals, you will be exploring the world without breaking the bank. No stress. Just maximum enjoyment!</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Vacation;