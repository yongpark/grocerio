export const createList = (list, success, error)=> (
  $.ajax({
    method: "GET",
    url: 'api/lists',
    data: {list},
    success,
    error
  })
);

export const fetchLists = (success, error) => (
  $.ajax({
    method: "GET",
    url: `api/lists/`,
    success,
    error
  })
);

export const fetchList = (id, success, error) => (
  $.ajax({
    method: "GET",
    url: `api/lists/${id}`,
    success,
    error
  })
);

export const deleteList = (id, success, error) => (
  $.ajax({
    method: "POST",
    url: `api/lists/${id}`,
    success,
    error
  })
);

export const updateList = (list, success, error) => (
  $.ajax({
    method: "PATCH",
    url: `api/lists/${list.id}`,
    success,
    error
  })
);
