// src/_tests_/EventList.test.js

import { render } from "@testing-library/react";
import EventList from "../components/EventList";
import mockData from "../mock-data";
import { getEvents } from "../api";

describe('<EventList /> component', () => {
    let EventListComponent;
    beforeEach(() => {
        EventListComponent = render(<EventList />);
    })
    // Tests whether the app has an element with the role "list"
    test('has an element with "list" role', () => {
        expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });

    // Tests whether the app has exatly 4 elements in the above list
    // test('renders correct number of events', () => {
    //     EventListComponent.rerender(<EventList events={
    //         [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />);
    //     expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
    // });

    // Tests whether the app has elements from mockData from the mock-data.js
    test('renders correct number of events', async () => {
        const allEvents = await getEvents();
        EventListComponent.rerender(<EventList events={allEvents} />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });
});