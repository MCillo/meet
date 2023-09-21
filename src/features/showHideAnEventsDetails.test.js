/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  // Scenario 1
  test('event details are closed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('the user has first opened the app', () => {
      AppComponent = render(<App />);
    });

    when('the list of cities is displayed', async () => {
      const AppDOM = AppComponent.container.firstchild;
      const EventListDOM = AppDOM.querySelector('#event-list');  // ERROR 

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      })
    });

    then('the event details are collapsed (hidden)', () => {
      const eventDom = AppComponent.container.firstchild;
      const details = eventDom.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });

  // Scenario 2
  test('user can show the event details.', ({ given, when, then }) => {
    let AppComponent;
    given('the list of events for all or selected city is shown', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      })
    });

    when('the user selects a specific event from the displayed list', async () => {
      const button = AppComponent.queryAllByText('Show Details')[0];

      await userEvent.click(button);
    });

    then('the details for the selected event are displayed to the user', () => {
      const eventDom = AppComponent.container.firstChild;
      const details = eventDom.querySelector('.details');
      expect(details).toBeInTheDocument(); //ERROR
    });
  });

  // Scenario 3
  test('user can hide the event details.', ({ given, when, then }) => {
    let AppComponent;
    let button;

    given('the details for a selected event are shown', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });

      button = AppComponent.queryAllByAltText('Show Details')[0];
      await userEvent.click(button);

      const eventDom = AppComponent.container.firstChild;
      const details = eventDom.querySelector('.details');
      expect(details).toBeInTheDocument(); // ERROR
    });

    when('the user closes the event details view', async () => {
      await userEvent.click(button);
    });

    then('the list of events for all or selected city is shown', () => {
      const eventDom = AppComponent.container.firstChild;
      const details = eventDom.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });
});