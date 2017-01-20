import {connect} from 'react-redux';
import {selectGItem, selectColumns} from '../../reducers/selectors';
import {fetchGItem, updateGItem, deleteGItem} from '../../actions/gitem_actions';
import GItemDetail from './gitem_detail';

const mapStateToProps = (state, ownProps) => ({
  gitem: selectGItem(state, ownProps.params.gitemId),
  columns: selectColumns(state)
});

const mapDispatchToProps = dispatch => ({
  fetchGItem: id => dispatch(fetchGItem(id)),
  updateGItem: gitem => dispatch(updateGItem(gitem)),
  deleteGItem: id => dispatch(deleteGItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GItemDetail);
