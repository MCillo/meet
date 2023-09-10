// src/components/NumberOfEvents.js

const NumberOfEvents = ({ setCurrentNOE }) => {
    const handleChange = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);
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