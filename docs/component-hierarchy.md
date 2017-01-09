## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - TopBar
 - SignUpButton
 - BottomBar

**TopBar**
 - ListsButton
  * ListIndex
 - RecipeButton
  * RecipeIndex
 - ProfileButton
 - CreateButton
  - NewListContainer

**ListsContainer**
 - TopBar
 - ListIndex
 - CreateListButton/Link

**ListContainer**
- TopBar
- ListHeader
- ListColumns
 * ColumnContainer
- RecipeContainer

**ColumnContainer**
  * ColumnHeader
  * GItemIndex
  * AddCardButton ("to_buy col only")

**GItemDetailContainer**
 - GItemHeader
 - ExpirationDateForm
 - DeleteButton

**ProfileContainer**
 - TopBar
 - ProfileForm
 - StatsContainer
 - SignOutButton

**StatsContainer**
 - TotalItemsExpired
 - NumberofItemsUsed

**SearchResultsContainer**
 - Search
 - ListIndex

**NewGItemContainer**
  - GItemHeader
  - ExpirationDateForm (blocked till GItem moves to "Bought")
  - NewGItemButton

**NewListContainer**
 - ListHeader
 - CreateListButton

**RecipeContainer**
 - RecipesHeader
 - RecipeIndex

## Routes
|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/api/lists" | "ListsContainer" |
| "/api/lists/list/:listId" | "ListContainer" |
| "/api/lists/list/:listId/column/:columnID" | "ColumnContainer" |
| "/api/lists/list/:listId/column/:columnId/gitem/:gitemId" | "GItemContainer" |
| "/api/new_list" | "NewListContainer"
| "/api/lists/list/:boardId/column/:columnId/new_gitem" | "NewGItemContainer" |
| "/api/:userId" | "ProfileContainer" |
| "/search" | "Search" |
| "/api/search-results" | "SearchResultsContainer"
