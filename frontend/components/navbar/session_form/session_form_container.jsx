import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../../actions/session_actions';
import { closeAuthModal, openAuthModal } from '../../../actions/modal_actions';
import {hashHistory} from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  authModalOpen: state.modals.login,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => {
    hashHistory.push("/lists");
    dispatch(login(user));
  },
  signup: user => {
    hashHistory.push("/lists");
    dispatch(signup(user));
  },
  closeAuthModal: () => dispatch(closeAuthModal('login'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
