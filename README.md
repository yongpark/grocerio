# FresherNote

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/tbd

## Minimum Viable Product

Grocer.io is a web application based on Trello built using Ruby on Rails and React/Redux. This app will satisfy the following MVP requirements:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Create new grocery lists
- [ ] Add grocery items to the "To Buy" column. 
- [ ] Click grocery item pops up modal to allowing users to delete grocery items from any* column. 
- [ ] Users can drag and drop card from the "To Buy" and drop them into the "Bought" column + add an expiration date. They can then move items from the "Bought" column to the "Used column"
- [ ] Items that expire will automatically move to the "Expired" column.
- [ ] Spoonacular API displays recipes with "soon-to-expire" (< x days left) ingredients.
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

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Notes Model, API, and components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

### Phase 3: Notebooks (2 day)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

### Phase 4: Tags (1 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

### Phase 5: Allow Complex Styling in Notes (1 days, W2 Th 6pm)

**objective:** Allow rich text editing of notes.

### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Notes Index

### Bonus Features (TBD)
- [ ] Search notes by content
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions
