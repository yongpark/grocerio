export const selectAllLists = ({lists, session}) =>  (
  Object.keys(lists)
    .map(key => lists[key])
    .filter(
      (list) => list.user_id === session.currentUser.id
    )
);

export const selectList = (state, listId) => {
  listId = parseInt(listId);
  return state.lists[listId] || {};
};

export const selectColumns = state => (
  Object.keys(state.columns).map(id => state.columns[id])
);

export const selectGItems = (state, columnId) => {
  columnId = parseInt(columnId);
  return Object.keys(state.gitems)
  .map(key => state.gitems[key])
  .filter(gitem => gitem.column_id === columnId)
  .sort(ordSort);
};

export const selectGItem = (state, gitemId) => {
  gitemId = parseInt(gitemId);
  return state.gitems[gitemId];
};

const ordSort = (a, b) => {
  if (a.ord < b.ord) {
    return -1;
  } else if (a.ord > b.ord){
    return 1;
  } else {
    return 0;
  }
};
