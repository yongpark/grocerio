import {connect} from 'react-redux';
import {fetchList} from '../../actions/list_actions';
import {selectList} from '../../reducers/selector';
import {fetchColumns} from '../../actions/column_actions';
import List from './list';

const mapStateToProps = (state, ownProps) => ({
  list: selectList(state, ownProps.params.listId)
});

const mapDispatchToProps = dispatch => ({
  fetchList: id => dispatch(fetchList(id)),
  fetchColumns: listId => dispatch(fetchColumns(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
