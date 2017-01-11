import {combineReducers} from 'redux';
import ModalReducer from './modal_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modals: ModalReducer,
});

export default RootReducer;
