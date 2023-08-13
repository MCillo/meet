// src/_tests_/EventList.test.js

import { render, screen } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";

const mockEvent = mockData[0];

// App Unit Testing Code
describe('<Event />, component', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />)
  });

  test('has the events title', () => {
    const eventTitle = screen.queryByText(mockEvent.summary);
    expect(eventTitle).toBeInTheDocument();
  });

  test('has the events location', () => {
    const eventLocation = screen.queryByText(mockEvent.location);
    expect(eventLocation).toBeInTheDocument();
  });

  test('has the event details button', () => {
    const showDetailsButton = screen.queryByText('Show Event Details');
    expect(showDetailsButton).toBeInTheDocument();
  });

})