import * as ListActions from '../actions/list_actions';
import {merge} from 'lodash';

const ListReducer = (state = {}, action) => {
  Object.freeze(state);
  let newList;
  let newState;
  switch(action.type){
    case ListActions.RECEIVE_LISTS:
      return merge({}, action.lists);
    case ListActions.RECEIVE_LIST:
      return merge({}, state, {[newList.id]: newList});
    case ListActions.REMOVE_LIST:
      newState = merge({}, state);
      delete newState[action.list.id];
      return newState;
    default:
      return state;
  }
};

export default ListReducer;
