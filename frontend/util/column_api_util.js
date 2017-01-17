export const fetchColumns = listId => (
  $.ajax({
    type: 'GET',
    url: `api/lists/${listId}/columns`
  })
);

export const createColumn = column => (
  $.ajax({
    type: "POST",
    url: `api/columns`,
    data: {column}
  })
);

export const deleteColumn = id => (
  $.ajax({
    type: "DELETE",
    url: `api/columns/${id}`
  })
);
