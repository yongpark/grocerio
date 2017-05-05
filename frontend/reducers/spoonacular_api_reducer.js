import * as RecipeActions from '../actions/spoonacular_api_actions';
import {merge} from 'lodash';

const RecipeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RecipeActions.RECEIVE_RECIPES:
      return action.recipes;
    case RecipeActions.RECEIVE_RECIPES_IDs:
      return action.recipeIDs;
    default:
      return state;
  }
};

export default RecipeActions;
