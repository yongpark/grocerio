# Grocer.io

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/5o8wTudK/grocerio

## Minimum Viable Product

Grocer.io is a web application based on Trello built using Ruby on Rails and React/Redux. This app will satisfy the following MVP requirements:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Create new grocery lists
- [ ] Add grocery items to the "To Buy" column.
- [ ] Click grocery item pops up modal to allowing users to delete grocery items from any* column
- [ ] Users can drag and drop card from the "To Buy" and drop them into the "Bought" column + add an expiration date. They can then move items from the "Bought" column to the "Used column"
- [ ] Spoonacular API displays recipes with "soon-to-expire" (< x days left) ingredients
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Lists Model, API, and components (1-2 days)

**Objective:** List can be created, read, edited and destroyed through
the API.

### Phase 3: Columns, model, API, and components (1-2 days)

**Objective:** Columns can be read through the API. Start looking into drag and drop functionality.

### Phase 4: GItems Model, API, and Components (2 days)

**Objective:** GItems can be created, read, edited, and destroyed through the API. Includes GItemDetailContainer.

### Phase 5: Allow Drag and Drop for GItems (2 days, W2 Th 6pm)

**objective:** Drag and drop functionality for moving GItems between columns.

### Phase 6: - Spoonacular API + Component and Styling (2 days, W2 F 6pm)

**objective:** Add Recipe Component to Lists Component. Style.

### Bonus Features (TBD)
- [ ] Items that expire will automatically move to the "Expired" column
- [ ] Recipe pages that aggregates expiring items on all lists
- [ ] User profile page w/ stats displaying # of items that user let expire
- [ ] Search for lists
