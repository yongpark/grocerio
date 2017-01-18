import * as GItemActions from '../actions/gitem_actions';
import merge from 'lodash/merge';

const GItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case GItemActions.RECEIVE_GITEMS:
      return merge({}, action.gitems);
    case GItemActions.RECEIVE_GITEM:
      return merge({}, state, {[action.gitem.id]: action.gitem});
    case GItemActions.REMOVE_GITEM:
      const newState = merge({}, state);
      delete newState[action.gitem.id];
      return newState;
    default:
      return state;
  }
};

export default GItemsReducer;
