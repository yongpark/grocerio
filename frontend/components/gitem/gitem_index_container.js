import {connect} from 'react-redux';
import {selectGItems} from '../../reducers/selector';
import GItemIndex from './gitem_index.';

const mapStateToProps = (state, ownProps) => ({
  gitems: selectGItems(state, ownProps.columnId)
});

export default connect(
  mapStateToProps
)(GItemIndexItem);
