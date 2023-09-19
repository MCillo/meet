// src/components/NumberOfEvents.js

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = 'Please enter a positive number.';
      setErrorAlert(infoText);
    } else {
      infoText = '';
      setErrorAlert(infoText);
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        defaultValue="32"
        onChange={handleChange}
        data-testid="numberOfEventsInput"
      />
    </div>
  )
}

export default NumberOfEvents