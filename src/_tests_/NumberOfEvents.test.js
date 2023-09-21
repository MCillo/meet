// src/_tests_/NumberOfEvents.test.js

import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import { render, screen } from "@testing-library/react";

// App Unit Testing Code
describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />);
  });

  // test that NumberOfEvents component contains element with role textbox
  test('has an element that has textbox role', () => {
    const numberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberOfEventsInput).toBeInTheDocument();
  });

  // test that the default value of number of events listed
  test('that default value for number of events field is 32', () => {
    const numberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberOfEventsInput).toHaveValue('32');
  });

  // test that the value of NumberOfEvents components textbox value changes as user types
  test('number of events displayed updates as the user types in input textbox', async () => {
    const numberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
    await userEvent.type(numberOfEventsInput, '{backspace}{backspace}10');
    expect(numberOfEventsInput).toHaveValue('10');
  });
})

