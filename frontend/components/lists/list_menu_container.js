import {connect} from 'react-redux';
import {deleteList} from '../../actions/list_actions';
import ListMenu from './list_menu';

const mapDispatchToProps = dispatch => ({
  deleteList: id => dispatch(deleteList(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ListMenu);
