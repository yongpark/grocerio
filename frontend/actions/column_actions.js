import * as ColumnAPIUtil from '../util/column_api_util';

export const RECEIVE_COLUMNS = "RECEIVE_COLUMNS";
export const RECEIVE_COLUMN = "RECEIVE_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";


const receiveColumns = columns => ({
  type: RECEIVE_COLUMNS,
  columns
});

const receiveColumn = column => ({
  type: RECEIVE_COLUMN,
  column
});

const removeColumn = column => ({
  type: REMOVE_COLUMN,
  column
});

export const fetchColumns = (listId) => dispatch => (
  ColumnAPIUtil.fetchColumns(listId)
    .then(columns => dispatch(receiveColumns(columns)))
);

export const fetchColumn = (id) => dispatch => (
  ColumnAPIUtil.fetchColumn(id)
    .then(column => dispatch(receiveColumn(column)))
);


export const createColumn = column => dispatch => (
  ColumnAPIUtil.createColumn(column)
    .then(newColumn => dispatch(receiveColumn(newColumn)))
);

export const deleteColumn = id => dispatch => (
  ColumnAPIUtil.deleteColumn(id)
    .then(deletedColumn => dispatch(removeColumn(deletedColumn)))
);

export const updateColumn = column => dispatch => (
  ColumnAPIUtil.updateColumn(column)
  .then(updatedColumn => dispatch(receiveColumn(updatedColumn)))
);
