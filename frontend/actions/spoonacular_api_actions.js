import * as SpoonacularAPIUtil from '../util/spoonacular_api_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE_IDS = "RECEIVE_RECIPE_IDS";

const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
});

const receiveRecipeIDs = recipeIDs => ({
  type: RECEIVE_RECIPE_IDS,
  recipeIDs
});

export const fetchRecipes = ingredients => dispatch => (
  SpoonacularAPIUtil.fetchRecipes(ingredients).then(recipes =>
    dispatch(receiveRecipes(recipes))
  )
);

export const fetchRecipeIDs = ingredients => dispatch => (
  SpoonacularAPIUtil.fetchRecipeIDs(ingredients).then(recipes =>
    dispatch(receiveRecipeIDs(recipes))
  )
);
