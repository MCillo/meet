# Meet App

## Key Features
 
### User Stories
1.	Filter Events by City (Example from book)  
As a User I should be able to filter the events by city so that I may be able to view a list of events taking place in that city
-	Scenario 1 – User has not selected a city show upcoming events from all cities.
    - Given – the main page is open. 
    - When – user opens the app.
    - Then – user sees a list of upcoming events.
-	Scenario 2 – user should see a list of suggestions when they search for a city.
    - Given – the main page is open.
    - When – user starts typing in the city textbox.
    - Then – user receives a list of cities that match the typed input.
-	Scenario 3 – user can select a city from the suggestion list.
    - Given – user typed a city in the city textbox and the list of suggested cities is showing.
    - When – user selects a city from the list.
    - Then – the users city is changed to the selected city and a list of events for the selected city is displayed.

2.	Show/Hide Event Details  
As a User I should be able to show or hide event details so that I can view or hide the details of a selected event
- Scenario 1 – user can show the event details.
    - Given – the list of events for a selected city is shown.
    - When – the user selects a specific event from the displayed list.
    - Then – the details for the selected event are displayed to the user.
- Scenario 2 – user can hide the event details.
    - Given – the details for a selected event is shown.
    - When – the user closes the event details view.
    - Then – the list of events for the selected city are shown.

3.	Specify Number of Events  
As a User I should be able to select the number of events I want shown to me so that I can see more or less events in the list of events. 
- Scenario 1 – by default the number of events shown is 10.
    - Given – the user has not selected a number of events to be displayed.
    - When – the user selects a number from a dropdown. 
    - Then – the number of events shown in the list is reflected by the user’s choice.

4.	Use the App When Offline  
As a User I should be able to use the app offline so that the information is available to me when internet service is unreliable or unavailable
- Scenario 1 – data stored on the user’s device is displayed when internet connection is offline.
    - Given – the user has little or no internet connection.
    - When – the user uses the app.
    - Then – the stored data is displayed to the user.

5.	Add an App Shortcut to the Home Screen  
As a User I should be able to add a shortcut to the app on my device home screen so that the app will be easier to find
- Scenario 1 – user wants to add a shortcut to the app on their device home screen.
    - Given – the user has access to the app.
    - When – the user selects to add a shortcut to the app.
    - Then – a shortcut to the app is displayed on the device home screen.

6.	Display Charts Visualizing Event Details  
As a User I should be able to view charts that display the details of a selected event so that I can have a clear visual representation of the events details
- Scenario 1 – user wants to see chart to visualize event details.
    - Given – user has selected a city and is viewing the list of events for selected city.
    - When – user selects an event to view its details.
    - Then – chart displaying the event details is displayed.
