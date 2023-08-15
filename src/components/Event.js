// Src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h2>{event && event.summary}</h2>
      <h4>{event && event.location}</h4>

      {/* test code */}
      {showDetails ?
        <p className="details">{event && event.description}</p> :
        null
      }
      <button className="details" onClick={() => {
        showDetails ? setShowDetails(false) : setShowDetails(true)
      }}>{showDetails ? "hide details" : "show details"}</button>

      {/* original code */}
      {/* <button
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
      ) : null} */}
    </li>
  );
};

export default Event;