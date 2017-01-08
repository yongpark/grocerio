# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `GET /api/session`
- `POST /api/session`
- `DELETE /api/session`

### Lists

- `GET /api/lists/`
  - index of all lists for user
- `GET /api/lists/:id/columns`
- `POST /api/lists`
- `PATCH /api/lists/:id`
- `DELETE /api/lists/:id`

### Columns
- `GET /api/columns/:id/groceries`

### Grocery_item

- `GET /api/groceries/:id`
- `POST /api/groceries/:id`
- `GET /api/groceries/:id`
- `DELETE /api/groceries/:id`

