import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import SessionButton from './session_button';
import { closeAuthModal, openAuthModal } from '../../../actions/modal_actions';
import {hashHistory} from 'react-router';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
    hashHistory.push('/');
  },
  openAuthModal: () => dispatch(openAuthModal('login'))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButton);
