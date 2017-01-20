import {connect} from 'react-redux';
import {selectGItems} from '../../reducers/selector';
import GItemIndex from './gitem_index';
import {fetchGItems} from '../../actions/gitem_actions';


const mapStateToProps = (state, ownProps) => ({
  gitems: selectGItems(state, ownProps.columnId),
  columnId: ownProps.columnId,
  listId: ownProps.listId
});

const mapDispatchToProps = dispatch => ({
  fetchGItems: listId => dispatch(fetchGItems(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GItemIndex);
