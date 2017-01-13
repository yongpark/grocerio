import { connect } from 'react-redux';
import SplashSessionForm from './splash_session_form';
import { login, logout, signup } from '../../../actions/session_actions';
import { closeAuthModal, openAuthModal } from '../../../actions/modal_actions';
import {hashHistory} from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  authModalOpen: state.modals.signup,
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
  closeAuthModal: () => dispatch(closeAuthModal('signup'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashSessionForm);
