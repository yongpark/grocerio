# Grocero

[Grocero][grocero] is a web application that allows users to add grocery items to a list and tracks their expiration date. Grocero's design was inspired by Trello, allowing users to drag and drop grocery items from one column to another. The application uses the grocery item's expiration date, recommending recipes before the grocery items expire and automatically moving items to the expired column when they expire.

Grocero is a Yong Park's a/A capstone project.

![Grocero home page: http://www.grocero.com][home page]

## Features

- User accounts with secure authentication
- Create grocery lists
- Automatically creates separate columns when users create lists
- Add new grocery items to "To Buy" and "Bought"
- Add expiration dates to grocery items.
- Expired grocery items automatically move to the expired column.
- Recipes are recommended based on items in the "Bought" column that are close to expiring.

![List Page: https://grocero.herokuapp.com/#/lists][tracks]

## Project Design

Grocero was designed and built in three weeks.

A [proposal][proposal] was used to provide a timeline during the dev process.
was drafted to help provide an implementation timeline during the development process.

A [database schema][schema] was included along with the proposal.

## Technology

Grocero is a single-page application built on Rails and React.js with dependencies on the frontend and backend including Material UI, React DnD, and Moment.js.

# Backend Technology
Grocero runs on Ruby on Rails and is hosted on Heroku. The purpose of the backend is to provide RESTful APIs and respond with JSON-formatted data.

## Heroku
NewRelic application performance management (APM) is used to automatically ping the Heroku dyno, allowing for faster response times.

NewRelic also keeps track of server-side error logs.

## Database
PostgreSQL RDMBS is used for Heroku.

## Dependencies

Notable dependencies include:

- BCrypt for password-salting and hashing for a secure authentication system
- Moment.js for parsing and standardizing expiration dates for grocery items.

# Frontend Technology
Grocero uses the React.js framework and the Redux architecture to manage data flow through the frontend.

## npm

Use NPM to install all the frontend dependencies.

A install script is configured so that webpack bundles all the front end files after deploying to Heroku.

## Webpack

Webpack bundles all frontend components. The bundled file is in `/app/assets/javascripts`.


## React & Redux

All React components, Redux thunk action creators, API utilities, dispatchers, and stores are located in the [frontend](../frontend) directory.

## jQuery

jQuery is used to make the AJAX requests with the Rails server.


## Material UI
Site layout and styling is done through custom CSS and the use of the NPM Material UI library. Material UI was useful for speeding up the build process of React components.

## React DND
React's drag and drop library allows for easy movement between columns for grocery items inside each list.

## Others

Other frontend dependencies are:

- React DOM
- React Router
- React History to manipulating the browser history
- React Linked State Mixin
- Babel for transpiling JSX into JavaScript.

# Future Implementations

## Recipes Page
Users will be able to aggregate expiring items for all grocery lists for a larger pool of ingredients for their Recipes

## User Page
- Users will be able to track how many grocery items expired and how how efficient they are with their grocery purchases.
- Tracks through Amazon API how much money you saved and wasted.

## Mobile
Users will be able to use this application on their mobile devices for on-the-fly changes to their grocery lists while shopping because of mobile responsiveness.

## Search
Users will be able to search through their lists by name.

## Sharing
Reap karma from shairing your profile page and how much money you saved.

## Other Features

- Account activation via email
- Client session on multiple browsers (multiple session)
- Authentication integration with Facebook and Google+

[grocero]: https://grocero.herokuapp.com/
[home page]: ./docs/images/home_page.png "Grocero Home page"
[lists]: ./docs/images/lists_page.png "Grocery List Page"
[proposal]: ./docs/proposal.md
[schema]: ./docs/schema.md
