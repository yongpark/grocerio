export const selectAllLists = state => (
  Object.keys(state.lists).map(id => state.lists[id])
);
