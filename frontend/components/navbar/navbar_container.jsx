import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { closeAuthModal, openAuthModal } from '../../actions/modal_actions';
import {hashHistory} from 'react-router';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openAuthModal: () => dispatch(openAuthModal('login'))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
