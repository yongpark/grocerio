import {connect} from 'react-redux';
import {selectGItems} from '../../reducers/selectors';
import GItemIndex from './gitem_index';

const mapStateToProps = (state, ownProps) => {
  return {
    gitems: selectGItems(state, ownProps.listId)
  };
};

export default connect(
  null,
  mapStateToProps
)(GItemIndex);
