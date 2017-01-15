import {connect} from 'react-redux';
import ListsIndex from './lists_index';
import {selectPersonalLists} from '../../reducers/selector.js';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  personalLists: selectPersonalLists(state)
});

export default connect(
  mapStateToProps
)(ListsIndex);
