import * as ColumnActions from '../actions/column_actions';
import merge from 'lodash/merge';

const ColumnReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case ColumnActions.RECEIVE_COLUMNS:
      return action.columns;
    case ColumnActions.RECEIVE_COLUMN:
      return merge({}, state, {[action.column.id]: action.column});
    case ColumnActions.REMOVE_COLUMN:
      const newState = merge({}, state);
      delete newState[action.column.id];
      return newState;
    default:
      return state;
  }
};

export default ColumnReducer;
