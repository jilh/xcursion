import Accordion from "./Accordion";
import "../styles/Faq.css";

const Faq = () => {
    return(
        <div className="faq">
            <div className="container">
                <div className="faq-content">
                    <h3>Frequently asked questions</h3>
                    <div className="accordion-group">
                        <Accordion />
                        <Accordion />
                        <Accordion />
                        <Accordion />
                        <Accordion />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;