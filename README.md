# Team Selector App

This app was produced to fulfill the brief of the individual technical challenge set at the end of the DevelopMe Fellowship. This is the repo for the front-end of the app. The app can be viewed [here](https://mdm106.github.io/team-selector-frontend/#/).

The app utilises an API on the back-end, and the repository for this can be found [here](https://github.com/mdm106/team-selector-backend). The production endpoint is set up on the app, and is as follows: https://stark-ravine-35553.herokuapp.com/

## Brief

The brief was to create a tool which randomly picks 5-a-side football teams from a list of 10 names.

## Planning

I researched the possible features that would be useful to people playing 5-a-side by looking for existing applications. I also asked friends who play 5-a-side what they would look for in an app. I then outlined the features of the MVP, and advanced features that would be implemented. Following this, the content and behaviour of the app pages were wireframed on pen and paper. 

## Features

MVP:
- App that takes 10 names and randomly assigns them to two separate teams of 5 each.

Additional features implement in app:
- About page to provide details to user about the app's features.

- Functionality to select teams of n-size
    - The user can select a team size from 3-11 in the settings form. The selection determines how many name spaces appear on the name entry form.

- Functionality to select teams based on ability to produce as balanced teams as possible
    - The user ticks a checkbox to say whether they would like to select teams based on ability. If this checkbox is ticked a range bar appears alongside player names in the name entry form. The range is from 0-100, and 50 is default. If the user chooses to select by ability but then leaves all abilities as the default, the app will assign players using the randomised function rather than the by ability function. The greedy algorithm was used to select teams based on ability.

- Validation of input 
    - Validation was added such that a message appears and the submit button is disabled if the user has not added all the player names or if a player name is duplicated. When the user has entered valid names, a message appears to ask the user to submit, and the button is enabled. There is no requirement for the user to select abilities prior to submission, in case they change their mind about using the ability feature when faced with the task of selecting abilities.

- Functionality to allow user to amend team details after submission
    - After submission and viewing their teams, the user can go back to the form and see their previously entered data, and amend as they wish.

- Copy to clipboard button to allow user to copy team details for use in messaging, email etc
    - The pre-built copy-to-clipboard component was used for this feature. As this feature is intented to allow the user to paste the teams and send to their friends, I did not include the player abilities in the copied text.

- Name picker tool to randomly assign user with team names requested from an API
    - This was added as a fun feature to allow the user to choose interesting player names. The names are held on an API to allow scope for the database to hold hundreds of team names.

- Form for user to enter team details and post to API
    - The form holds the team names for the game presently held in state, and the user can amend the team names and must add a date prior to saving to the API. As it is thought that immediately after selecting teams the score will not be known, the game complete field is set to default and the user can save the game without amending scores. If the API request is successful the user is shown a message to inform them and prompted to either return to home or view game history. Validation is present which disables the submit button if the necessary data has not been completed, to prevent invalid api requests.

- Form for user to update previously entered team details and send put request to API
    - The user can amend previously entered team details. If the user selects that the game is complete the team scores form inputs appear and the user can submit scores. Users are able to amend details for complete games in case of dispute about scores when team mates and opposition view the game history. The user is again shown a save successful message if the put request to the API is successful. 

- Game history feature to allow user to view previously entered games and link to the update form for each game
    - The game history shows previous team game dates, team names and scores. There is a link for each game so that the user can update details if necessary. The game history appears in ascending date order, regardless of the date order in which the user enters games.

- API requests have been set up so if the user goes to URLs without first going to the reset of the app, the API request will be made and there will not be an error. If the user tries to go to the url for a game id that does not exist, the user will see the loading page with a message advising them to return to home.

Plans for future features:
- User message for when API requests have not been successful
- Authorisation for users to make requests to API, and login feature on app
- Recording of player names for each game, so that a league of players can be produced. This would involve many-to-many relationship between players and games
- Functionality to allow a user to delete games
- Pagination of game history table

## Improvements

Improvements that I think could be made to the code base:
- Use of a better algorithm than the greedy algorithm to select teams by ability. I think this would be a recursive function but as I had limited time I decided to concentrate on the app's functionality rather than trying to get the recursive function working.
- Making the components more reuseable, including having one component for the post request for new game details and one for the put request for updating game details
- The logic for selecting teams was placed in the state actions file. The reasoning for this was that the random assignment function was not a pure function and thus could not be in the reducer. I therefore also put the selecting by ability function in the state actions file for consistency. I found it difficult to know whether this was the right choice and it may be that the logic for selecting by ability should have been in the reducer.
- I think I could have used better CSS class naming, and it would have been better to use a naming structure such as BEM. I also didn't fully understand how best to customise bootstrap CSS which meant I sometimes had to use the important attribute to override bootstrap styling which I know isn't ideal.
- I think it is possible that the number of times API requests are made could be slimmed down, by making better use of the data already in state

## Technologies

As the MVP did not require records to be saved, but would involve the management of state and user interactivity, I chose to build the front-end in React Redux. The API was built using the Laravel framework, which I have previously worked with. I chose to use Bootstrap 4 CSS to allow me to quickly style a responsive and professional looking website.

## Version Management

I used git and GitHub throughout the project. I used the Gitflow Workflow, by working on feature branches that were merged back into master using pull requests.

# Getting Started:

1. cd into the directory on your local machine where you would like the project to be saved
```bash
cd {directory}
```
2. Clone the repository to your local machine as follows
```bash
git clone {git@github.com:mdm106/team-selector-frontend.git} {foldername}
```
3. Run npm install to install all the required packages
```bash
npm install
```
4. Run npm start to run the app locally in development mode
```bash
npm start
```

# Create React App Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
