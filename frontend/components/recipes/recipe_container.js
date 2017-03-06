import {connect} from 'react-redux';
import Recipe from './recipe';
import {fetchList} from '../../actions/list_actions';
import {selectList} from '../../reducers/selector';
import {fetchColumns} from '../../actions/column_actions';

const mapStateToProps = (state, ownProps) => ({
  list: selectList(state, ownProps.listId)
});

const mapDispatchToProps = dispatch => ({
  fetchList: id => dispatch(fetchList(id)),
  fetchColumns: listId => dispatch(fetchColumns(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
