# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# TODO ***
1. Show topics from database
    1. Make database (Prisma/Postgres on Supabase)
    2. Add some fake topics objects like 
    {name: "topic name", link: "link to the topic", stage: "today" / "tomorrow" / "third day" / "7th day" / "remembered", date: 'current date'} to the "Progress" database object
    3. Make api call to that db in topicsSlice thunk to receive all topics
    4. Add those topics to store with extra Reducer
    5. Show all these topics in main page
2. Add new topic to db
3. Add user email from form to db object like {name: "Username", email: "usersemail@..}
4. Send message to each email with info like "Hi Name, today is the day to repeat this topic: link"
5. Send notifications depending on stages of each topic in "Progress" database object
6. Change stage of sent topic for the next
7. Move notification with "remembered" stage to the "Completed" database object.
8. Show status of each topic(from "Progress" db object) right behind this topic in topicsList component
9. Deploy it to the vercel