import {combineReducers} from 'redux';
import ModalReducer from './modal_reducer';
import SessionReducer from './session_reducer';
import ListReducer from './lists_reducer';
import MenuReducer from './menu_state_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modals: ModalReducer,
  lists: ListReducer,
  menuState: MenuReducer
});

export default RootReducer;
