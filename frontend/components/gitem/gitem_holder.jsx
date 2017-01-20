import React from 'react';
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';
import {findDOMNode} from 'react-dom';
import ItemTypes from '../dnd/item_types';
import {receiveGItem, updateGItem} from '../../actions/gitem_actions';

import GItemIndexItemContainer from './gitem_index_item_container';

const mapDispatchToProps = dispatch => ({
  receiveGItem: gitem => dispatch(receiveGItem(gitem)),
  updateGItem: gitem => dispatch(updateGItem(gitem))
});

const gitemHolderTarget ={
  hover: (props, monitor) => {
    const sourceGItem = monitor.getItem().gitem;
    const targetGItem = props.gitem;
    if(sourceGItem.id !== targetGItem.id){
      const updatedSourceGItem = Object.assign({}, sourceGItem, {
        ord: targetGItem.ord,
        column_id: targetGItem.column_id,
      });
      props.receiveGItem(updatedSourceGItem);
    }
  },
  drop: (props, monitor) => {
    const sourceGItem = monitor.getItem().gitem;
    const targetGItem = props.gitem;
    const updatedSourceGItem = Object.assign({}, sourceGItem, {
      ord: targetGItem.ord,
      column_id: targetGItem.column_id,
    });
    props.updateGItem(updatedSourceGItem);
  },
};

const collect = (dndConnect) => ({
  connectDropTarget: dndConnect.dropTarget(),
});

const GItemHolder = ({gitem, disabled, connectDropTarget}) => (
  connectDropTarget(
    <li>
      <GItemIndexItemContainer gitem={gitem} disabled={disabled}/>
    </li>
  )
);

export default connect(
  null,
  mapDispatchToProps
)(DropTarget(
  ItemTypes.GITEM,
  gitemHolderTarget,
  collect
)(GItemHolder));
