import {connect} from 'react-redx';
import ListsIndex from './lists_index';

const mapStateToProps = (state) => ({
  currentUser: state.ession.currentUser
});

export default connect(
  mapStateToProps
)(ListsIndex);
