import * as ListAPIUtil from '../util/list_api_util'

export const RECEIVE_LISTS = "RECIEVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

export const receiveLists = lists => ({
  type: RECEIVE_LIST,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const removeList = list => ({
  type: REMOVE_LIST,
  list
});

export const createList = list => dispatch => (
  ListAPIUtil.createList(list).then(newList => {
    dispatch(receiveList(list));
    return list;
  })
);

export const fetchList = id => dispatch =>(
  ListAPIUtil.fetchList(id).then(list =>{
    dispatch(receiveList(list));
    return list;
  })
);

export const fetchLists = () => dispatch => (
  ListAPIUtil.fetchLists().then(lists =>{
    dispatch(receiveLists(lists));
    return lists;
  })
);

export const updateList = id => dispatch => (
  ListAPIUtil.fetchLists().then(updatedList =>{
    dispatch(receiveList(updatedList));
    return updatedList;
  })
);

export const deleteList = id => dispatch => (
  ListAPIUtil.fetchList().then(deletedList =>{
    dispatch(removeList);
    return deletedList;
  })
);
