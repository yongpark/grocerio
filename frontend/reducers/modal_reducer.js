import {OPEN_AUTH_MODAL, CLOSE_AUTH_MODAL} from '../actions/modal_actions';
import {merge} from 'lodash';


const _defaultState = {
    auth: false
};

export default (state = _defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_AUTH_MODAL:
            return merge({}, state, {
                auth: true
            });
        case CLOSE_AUTH_MODAL:
            return merge({}, state, {
                auth: false
            });
        default:
            return state;
    }
};
