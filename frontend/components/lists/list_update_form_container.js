import {connect} from 'react-redux';
import {updateList} from '../../actions/list_actions';
import {selectList} from '../../reducers/selector';
import ListUpdateForm from './list_update_form';

const mapStateToProps = (state, ownProps) => ({
  list: selectList(state, ownProps.listId)
});

const mapDispatchToProps = dispatch => ({
  updateList: list => dispatch(updateList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUpdateForm);
