// src/_tests_/EventList.test.js

// // original code
// import { render, screen } from "@testing-library/react";
// import Event from "../components/Event";
// import mockData from "../mock-data";

// const mockEvent = mockData[0];

// // App Unit Testing Code
// describe('<Event />, component', () => {
//   let EventComponent;
//   beforeEach(() => {
//     EventComponent = render(<Event event={mockEvent} />)
//   });

//   test('has the events title', () => {
//     const eventTitle = screen.queryByText(mockEvent.summary);
//     expect(eventTitle).toBeInTheDocument();
//   });

//   test('has the events location', () => {
//     const eventLocation = screen.queryByText(mockEvent.location);
//     expect(eventLocation).toBeInTheDocument();
//   });

//   test('has the event details button', () => {
//     const showDetailsButton = screen.queryByText('Show Event Details');
//     expect(showDetailsButton).toBeInTheDocument();
//   });

// })

// test/reading code

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import Event from '../components/Event';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />)
  });

  test('renders event Title', () => {
    //expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    expect(EventComponent.screen(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event location', () => {
    //expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    expect(EventComponent.screen(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event details button with the title (show details)', () => {
    //expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    expect(EventComponent.screen('show details')).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText('show details'));

    expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const user = userEvent.setup();

    await user.click(EventComponent.queryByText('show details'));
    expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();

    await user.click(EventComponent.queryByText('hide details'));
    expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });
});