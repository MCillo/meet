// src/_tests_/CitySearch.test.js

import userEvent from '@testing-library/user-event';
import CitySearch from "../components/CitySearch";
import App from "../App";

import { render, screen, within } from "@testing-library/react";
import { extractLocations, getEvents } from "../api";

// App Unit Testing Code
describe('<CitySearch /> component', () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch allLocations={[]} setCurrentCity={() => { }} setInfoAlert={() => { }} />);
  });

  test('renders text input', () => {
    const cityTextBox = screen.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  // Tests using user interactions
  test('suggestions list is hidden by default', () => {
    const suggestionList = screen.queryByRole('list');
    expect(suggestionList).not.toBeInTheDocument();
  });

  test('renders a list of suggestions when city textbox gains focus', async () => {
    const user = userEvent.setup();
    const cityTextBox = screen.queryByRole('textbox');
    await user.click(cityTextBox);
    const suggestionList = screen.queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestions');
  });

  test('updates list of suggestions correctly when user types in city textbox', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} setCurrentCity={() => { }} setInfoAlert={() => { }} />);

    // User types "Berlin" in city textbox
    const cityTextBox = screen.queryByRole('textbox');
    await user.type(cityTextBox, "Berlin");

    // // Filter allLocations to locations matching "Berlin"
    const suggestions = allLocations ? allLocations.filter((location) => {
      return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
    }) : [];

    // Get all <li> elements inside the suggestion list
    const suggestionListItems = screen.queryAllByRole('listitem');
    expect(suggestionListItems).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
    }
  });

  // Scenario 3
  test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch
      allLocations={allLocations}
      setCurrentCity={() => { }} setInfoAlert={() => { }}
    />);

    const cityTextBox = screen.queryByRole('textbox');
    await user.type(cityTextBox, "Berlin");
    // The suggestion's textContent look like this: "Berlin, Germamy"
    const BerlinGermanySuggestion = screen.queryAllByRole('listitem')[0];

    await user.click(BerlinGermanySuggestion);

    expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
  });
});

//App Integration Testing Code
describe('<CitySearch /> integration', () => {
  test('renders suggestions list when the app is rendered', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
    await user.click(cityTextBox);

    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);

    const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
    expect(suggestionListItems.length).toBe(allLocations.length + 1);
  });
});