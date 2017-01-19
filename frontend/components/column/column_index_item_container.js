import {connect} from 'react-redux';
import ColumnIndexItem from './column_index_item';
import {selectGItems} from '../../reducers/selector';
import {updateColumn} from '../..actions/column_actions';

const mapStateToProps = (state, {column}) => ({
  gitems: selectGItems(state, column.id)
});

const mapDispatchToProps = dispatch => ({
  updateColumn: column => dispatch(updateColumn(column))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnIndexItem);
