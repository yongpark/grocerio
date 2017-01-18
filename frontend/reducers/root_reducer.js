import {combineReducers} from 'redux';
import ModalReducer from './modal_reducer';
import SessionReducer from './session_reducer';
import ListReducer from './lists_reducer';
import ColumnsReducer from './columns_reducer';
import GItemsReducer from './gitems_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modals: ModalReducer,
  lists: ListReducer,
  columns: ColumnsReducer,
  gitems: GItemsReducer
});

export default RootReducer;
