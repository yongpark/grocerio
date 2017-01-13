import {connect} from 'react-redux';
import ListsIndex from './lists_index';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(ListsIndex);
