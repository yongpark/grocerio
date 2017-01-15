import {connect} from 'react-redux';
import ListsIndex from './lists_index';
import {selectAllLists} from '../../reducers/selector.js';
import {fetchLists} from '../../actions/list_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  lists: selectAllLists(state)
});

const mapDispatchToProps = dispatch => ({
  fetchLists: () => dispatch(fetchLists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsIndex);
