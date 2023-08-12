// src/components/NumberOfEvents.js

const NumberOfEvents = () => {
    // const handleChange = (event) => {
    //     const value = event.target.value;
    // };
    return (
        <div id="number-of-events">
            <input
                type="text"
                className="number"
                defaultValue="32"
            // onChange={handleChange}
            />
        </div>
    )
}

export default NumberOfEvents