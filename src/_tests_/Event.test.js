// src/_tests_/Event.test.js

import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Event from "../components/Event";
import mockData from "../mock-data";
import { getEvents } from "../api";

const mockEvent = mockData[0];

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />);
    })

    test('renders the events location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event title', () => {

    })

    test('renders event details button wioth the title (show details', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

})