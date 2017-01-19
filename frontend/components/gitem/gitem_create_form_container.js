import {connect} from 'react-redux';
import {createGItem} from '../../actions/gitem_actions';
import GItemCreateForm from './gitem_create_form';

const mapStateToProps = (state, ownProps) => ({
  card: {title: '', column_id: ownProps.columnId, expired: false}
});

const mapDispatchToProps = dispatch => ({
  createGItem: gitem => dispatch(createGItem(gitem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GItemCreateForm);
