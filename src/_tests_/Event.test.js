// src/_tests_/EventList.test.js

import { render } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";
import { UserEvent } from "@testing-library/user-event";

const mockEvent = mockData[0];

describe('<Event />, component', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />)
  });

  test('has the events title', () => {
    const eventTitle = EventComponent.queryByText(mockEvent.summary);
    expect(eventTitle).toBeInTheDocument();
  });

  test('has the events location', () => {
    const eventLocation = EventComponent.queryByText(mockEvent.location);
    expect(eventLocation).toBeInTheDocument();
  });

  test('has the event details button', () => {
    const showDetailsButton = EventComponent.queryByText('Event Details');
    expect(showDetailsButton).toBeInTheDocument();
  });

})