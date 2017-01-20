export const fetchGItems = listId => {
    return $.ajax({
    type: "GET",
    url: `api/lists/${listId}/gitems`
  });
};

export const fetchGItem = id => (
  $.ajax({
    type: "GET",
    url: `api/gitems/${id}`
  })
);

export const createGItem = gitem => (
  $.ajax({
    type: "POST",
    url: 'api/gitems',
    data: {gitem}
  })
);

export const updateGItem = gitem =>(
  $.ajax({
    type: "PATCH",
    url: `api/gitems/${gitem.id}`,
    data: {gitem}
  })
);

export const deleteGItem = id => (
  $.ajax({
    type: "DELETE",
    url: `api/gitems/${id}`
  })
);
