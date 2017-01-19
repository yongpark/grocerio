import * as GItemActions from '../actions/gitem_actions';
import merge from 'lodash/merge';


const GItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newGItem;
  let newState;

  switch(action.type){
    case GItemActions.RECEIVE_GITEMS:
      return merge({}, action.gitems);
    case GItemActions.RECEIVE_GITEM:
      newState = merge({}, state);
      const currentGItem = state[action.gitem.id];
      const currentColumnId = currentGItem ? currentGItem.column_id : null;
      const currentOrd = currentGItem ? currentGItem.ord : null;
      const newColumnId = action.gitem.column_id;
      const newOrd = action.gitem.ord;

      if (currentColumnId !== null && currentColumnId != newColumnId){
        newState = Object.assign(
          newState,
          updateOtherGItemOrds(state, currentColumnId, currentOrd, null),
          updateOtherGItemOrds(state, newColumnId, null, newOrd)
        );
      } else if (currentOrd !== null && currentOrd !== newOrd){
        newState = Object.assign(
          newState,
          updateOtherGItemOrds(state, newColumnId, currentOrd, newOrd)
        );
      }
      newState[action.gitem.id] = action.gitem;
      return newState;
    case GItemActions.REMOVE_GITEM:
      const {column_id, ord} = action.gitem;
      newState = Object.assign({}, state,
      updateOtherGItemOrds(state, column_id, ord, null));
      delete newState[action.gitem.id];
      return newState;
    default:
      return state;
  }
};

const updateOtherGItemOrds = (state, columnId, currentOrd, newOrd) =>{
  const newState = {};
  const columnGItems = Object.keys(state)
  .map((key) => state[key])
  .filter((gitem) => gitem.column_id === columnId);

  const nextOrd = columnGItems.map((gitem) => gitem.ord)
  .reduce((x, y) => ((x > y) ? x : y), -1) + 1;

  if (newOrd === null) newOrd = nextOrd;
  if (currentOrd === null) currentOrd = nextOrd;

  if(currentOrd > newOrd){
    columnGItems.forEach((gitem) => {
      if (gitem.ord < currentOrd && gitem.ord >= newOrd){
        newState[gitem.id] = Object.assign({}, gitem, { ord: gitem.ord +1});
      } else {
        newState[gitem.id] = gitem;
      }
    });
  } else if (currentOrd < newOrd){
    columnGItems.forEach((gitem) => {
      if(gitem.ord > currentOrd && gitem.ord <= newOrd){
        newState[gitem.id] = Object.assign({}, gitem, {ord: gitem.ord -1});
      } else{
        newState[gitem.id] = gitem;
      }
    });
  }
  return newState;
};

export default GItemsReducer;
