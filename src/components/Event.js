// Src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li>
            {/* displays the event name/title */}
            <h2> {event.summary} </h2>
            {/* displays the event date */}
            <h3> {event.start} </h3>
            {/* displays the event location */}
            <p> {event.location} </p>
            {/* button for displaying event details */}
            <button onClick={showDetails}>Details</button>
        </li>
    );
}

export default Event;