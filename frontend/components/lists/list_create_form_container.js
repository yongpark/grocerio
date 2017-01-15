import React from 'react';
import {connect} from 'react-redux';
import {createList} from '../../actions/list_actions';
import {resetMenus} from '../../actions/menu_actions';
import ListCreateForm from './list_create_form';

const mapDispatchToProps = (dispatch) => ({
  createList: (list) => dispatch(createList(list)),
  resetMenus: () => dispatch(resetMenus())
});

export default connect(
  null,
  mapDispatchToProps
)(ListCreateForm);
