import {connect} from 'react-redux';
import {fetchList} from '../../actions/list_actions';
import {selectList} from '../../reducers/selector';
import List from './list';

const mapStateToProps = (state, ownProps) => ({
  list: selectList(state, ownProps.params.listId)
});

const mapDispatchToProps = dispatch => ({
  fetchList: id => dispatch(fetchList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
