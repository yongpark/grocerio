import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { openAuthModal, openAddAlbumModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openAuthModal: () => dispatch(openAuthModal()),
  openAddAlbumModal: () => dispatch(openAddAlbumModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
