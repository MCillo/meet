// src/_tests_/NumberOfEvents.test.js

import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import { render, screen } from "@testing-library/react";

// App Unit Testing Code
describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });

    // const numberOfEventsInput = screen.queryByRole('textbox');

    // test that NumberOfEvents component contains element with role textbox
    test('has an element that has textbox role', () => {
        const numberOfEventsInput = screen.queryByRole('textbox');
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    // test that default value of number of events listed is 32
    test('test that default value for number of events field is 32', () => {
        const numberOfEventsInput = screen.queryByRole('textbox');
        expect(screen.getByRole("textbox")).toHaveValue('32');
    });

    // test that the value of NumberOfEvents components textbox value changes as user types
    test('number of events displayed updateds as the user types in input textbox', async () => {
        const numberOfEventsInput = screen.queryByRole('textbox');
        await userEvent.type(numberOfEventsInput, '{backspace}{backspace}10');
        expect(screen.getByRole("textbox")).toHaveValue('10');
    });
})

