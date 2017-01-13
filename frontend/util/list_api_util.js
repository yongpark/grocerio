export const createList = list => {
  return $.ajax({
    method: "GET",
    url: 'api/lists',
    data: {list}
  });
};

export const fetchList = (id, success) => {
  return $.ajax({
    method: "GET",
    url: `api/lists/${id}`,
    success
  });
};

export const deleteList = id => {
  return $.ajax({
    method: "POST",
    url: `api/lists/${id}`
  });
};

export const updateList = (list, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/lists/${list.id}`,
    success,
    error
  });
};
