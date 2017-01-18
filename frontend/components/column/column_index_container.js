import {connect} from 'react-redux';
import {selectColumns} from '../../reducers/selector';
import ColumnIndex from './column_index';

const mapStateToProps = (state, ownProps) => ({
  columns: selectColumns(state)
});

export default connect(
  mapStateToProps
)(ColumnIndex);
