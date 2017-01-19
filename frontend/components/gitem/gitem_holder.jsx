import React from 'react';
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';
import {findDOMNode} from 'react-dom';
import ItemTypes from '../dnd/item_types';
import {receiveGItem, updateGItem} from '../../actions/gitem_actions';

import GItemIndexItemContainer from './GItemIndexItemContainer';

const mapDispatchToProps = dispatch => ({
  receiveGItem: gitem => dispatch(receiveGItem(gitem)),
  updateGItem: gitem => dispatch(updateGItem(gitem))
});

const cardHolderTarget ={
  hover: (props, monitor) => {
    const sourceGItem = monitor.getItem().gitem;
    const targetGItem
    
  }
}
