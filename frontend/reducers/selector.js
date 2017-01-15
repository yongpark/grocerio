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
