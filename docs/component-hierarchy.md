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
| "/api/lists/:listId" | "ListContainer" |
| "/api/:userId" | "ProfileContainer" |
| "/search" | "Search" |
| "/api/search-results" | "SearchResultsContainer"
