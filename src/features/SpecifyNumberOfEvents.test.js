import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, within, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature('./src/features/SpecifyNumberOfEvents.feature');

defineFeature(feature, test => {
    // Scenario 1
    test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
        let AppComponent;
        let eventList;
        given('the user hasn\'t specified or filtered the number of events', () => {
            AppComponent = render(<App />);
        });

        when('the user sees the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        then('the default number of displayed events will be 32', () => {
            expect(eventList.length).toEqual(32);
        });
    });

    // Scenario 2
    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppComponent;
        given('the user has events displayed', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        when(
            'the user chooses to change the number of events displayed',
            async () => {
                const numberOfEventsInput = AppComponent.queryByRole('textbox');

                // await userEvent.type(numberOfEventsInput, '{backspace}{backspace}10');

                //const numberOfEventsInput = screen.queryByRole('textbox');
                await userEvent.type(numberOfEventsInput, '{backspace}{backspace}10');
                expect(screen.getByRole("textbox")).toHaveValue('10');

            });

        then(
            'the number of events displayed will update to the number the user selected',
            () => {
                const AppDOM = AppComponent.container.firstChild;
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList.length).toEqual(10);
            });
    });
});