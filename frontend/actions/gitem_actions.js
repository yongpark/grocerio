import * as GItemAPIUtil from '../util/gitem_api_util';

export const RECEIVE_GITEMS = "RECEIVE_GITEMS";
export const RECEIVE_GITEM = "RECEIVE_GITEM";
export const REMOVE_GITEM = "REMOVE_GITEM";

export const receiveGItems = gitems => ({
  type: RECEIVE_GITEMS,
  gitems
});

export const receiveGItem = gitem => ({
  type: RECEIVE_GITEM,
  gitem
});

export const removeGItem = gitem => ({
  type: REMOVE_GITEM,
  gitem
});

export const createGItem = gitem => dispatch => (
  GItemAPIUtil.createGItem(gitem)
  .then(newGItem => dispatch(receiveGItem(newGItem)))
);

export const fetchGItems = listId => dispatch => {
  return(GItemAPIUtil.fetchGItems(listId)
  .then(gitems => dispatch(receiveGItems(gitems))));
};

export const fetchGItem = id => dispatch => (
  GItemAPIUtil.fetchGItem(id)
  .then(gitem => dispatch(receiveGItem(gitem)))
);

export const updateGItem = gitem => dispatch => (
  GItemAPIUtil.updateGItem(gitem)
  .then(updatedGItem => dispatch(receiveGItem(updatedGItem)))
);

export const deleteGItem = id => dispatch => (
  GItemAPIUtil.deleteGItem(id)
  .then(deletedGItem => dispatch(removeGItem(deletedGItem)))
);
