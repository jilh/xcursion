import { useState } from "react";

const Accordion = () => {

    const [hideDetails, setHideDetails] = useState(false);

    const handleHideDetails = () => {
        setHideDetails(!hideDetails);
    }

    return(
        <div className="accordion">
            <div className="accordion-header" onClick={ handleHideDetails }>
                <b>Does Xcursions currently operate offline?</b>
                <b>{ hideDetails ? "+" : "-" }</b>
            </div>
            <div className={hideDetails ? "accordion-hide" : "accordion-boddy" }>
                <p>The release date for the web app is currently under development, and we'll notify you as soon as we have a confirmed date. Our team is working hard to create the best possible user experience, and we appreciate your patience.</p>
            </div>
        </div>
    )
}

export default Accordion;