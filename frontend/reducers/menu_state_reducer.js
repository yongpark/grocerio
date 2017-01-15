import * as MenuActions from '../actions/menu_actions';
import {merge} from 'lodash';

const initialState={
  showListsIndexCreate: false,
};

export default (state = initialState, action) =>{
  Object.freeze(state);
  let newState;
  switch(action.type){
    case MenuActions.ADD_MENU:
      newState = Object.merge({}, state);
      newState[action.menu] = false;
      return newState;
    case MenuActions.REMOVE_MENU:
      newState = Object.merge({}, state);
      delete newState[action.menu];
      return newState;
    case MenuActions.TOGGLE_MENU:
      newState = {};
      Object.keys(state).forEach((currentMenu) =>{
        if(currentMenu === action.menu){
          newState[currentMenu] = !state[currentMenu];
        } else if (!action.otherMenus){
          newState[currentMenu] = false;
        } else {
          newState[currentMenu] = state[currentMenu];
        }
      });
      return newState;
    case MenuActions.RESET_MENUS:
      return initialState;
    default:
      return state;
  }
};
