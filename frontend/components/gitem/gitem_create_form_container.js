import {connect} from 'react-redux';
import {createGItem} from '../../actions/gitem_actions';
import GItemCreateForm from './gitem_create_form';

const mapStateToProps = (state, ownProps) => ({
  gitem: {title: '', column_id: ownProps.columnId}
});

const mapDispatchToProps = dispatch => ({
  createGItem: gitem => dispatch(createGItem(gitem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GItemCreateForm);
