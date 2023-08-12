// Src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <h4>{event.location}</h4>

      <button
        className="showDetailsButton"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? 'Hide Event Details' : 'Show Event Details'}
      </button>
      {showDetails ? (
        <div className="details">
          <h3>Event Details</h3>
          <p>Description: {event.description}</p>
          <p></p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;