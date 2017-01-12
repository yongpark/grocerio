import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import SplashSessionButton from './splash_session_button';
import { closeAuthModal, openAuthModal } from '../../../actions/modal_actions';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openAuthModal: () => dispatch(openAuthModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashSessionButton);
