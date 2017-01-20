import {connect} from 'react-redux';
import {selectGItem} from '../../reducers/selector';
import GItemIndexItem from './gitem_index_item';
import {updateGItem} from '../../actions/gitem_actions';

const mapStateToProps = (state, ownProps) => ({
  gitem: selectGItem(state, ownProps.gitem.id)
});

const mapDispatchToProps = dispatch => ({
  updateGItem: gitem => dispatch(updateGItem(gitem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GItemIndexItem);
