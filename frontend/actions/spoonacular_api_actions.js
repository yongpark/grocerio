import * as SpoonacularAPIUtil from '../util/spoonacular_api_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";

const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
});

export const fetchRecipes = () => dispatch => (
  SpoonacularAPIUtil.fetchRecipes().then(recipes =>
    dispatch(receiveRecipes(recipes))
  )
);
