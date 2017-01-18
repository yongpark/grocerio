import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

const removeList = list => ({
  type: REMOVE_LIST,
  list
});

export const createList = list => dispatch => (
  ListAPIUtil.createList(list).then(newList => (
    dispatch(receiveList(newList))
  ))
);

export const fetchList = id => dispatch =>(
  ListAPIUtil.fetchList(id).then(list =>
    dispatch(receiveList(list))
  )
);

export const fetchLists = () => dispatch => (
  ListAPIUtil.fetchLists().then(lists =>
    dispatch(receiveLists(lists))
  )
);

export const updateList = list => dispatch => (
  ListAPIUtil.updateList(list).then(updatedList =>
    dispatch(receiveList(updatedList))
  )
);

export const deleteList = id => dispatch => (
  ListAPIUtil.deleteList(id).then(deletedList =>
    dispatch(removeList(deletedList))
  )
);
