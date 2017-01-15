import React from 'react';
import {connect} from 'react-redux';
import {toggleMenu} from '../../actions/menu_actions';
import ListsIndexCreate from './lists_index_create';

const mapStateToProps = ({menuState}) => ({
  show: menuState.showListsIndexCreatem
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleMenu('showListsIndexCreate', true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsIndexCreate);
