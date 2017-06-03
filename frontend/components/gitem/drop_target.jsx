import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import ItemTypes from '../dnd/item_types';
import { receiveGItem, updateGItem } from '../../actions/gitem_actions';

const mapDispatchToProps = (dispatch) => ({
  receiveGItem: gitem => dispatch(receiveGItem(gitem)),
  updateGItem: gitem => dispatch(updateGItem(gitem))
});


const gitemHolderTarget ={
  hover: (props, monitor) => {
    const sourceGItem = monitor.getItem().gitem;
    const gitemIds = props.gitems.map((gitem) => gitem.id);
    if (!gitemIds.includes(sourceGItem.id)){
      const updatedSourceGItem = Object.assign({}, sourceGItem, {
        ord: props.gitems.length,
        column_id: props.listId,
      });
      props.receiveGItem(updatedSourceGItem);
    }
  },
  drop: (props, monitor) => {
    const sourceGItem = monitor.getItem().gitem;
    if(sourceGItem.column_id !== props.columnId){
      const updatedSourceGItem = Object.assign({}, sourceGItem, {
        ord: props.gitems.length,
        column_id: props.columnId,
      });
      props.updateGItem(updatedSourceGItem);
    }
  }
};

const collect = (dndConnect) => ({
  connectDropTarget: dndConnect.dropTarget(),
});

const GItemTarget = ({connectDropTarget, children}) => {
  return connectDropTarget(
    <li className="drop-target">
      {children}
      Drop Grocery Card Here
    </li>
  );
};


export default connect(
  null,
  mapDispatchToProps
)(DropTarget(
  ItemTypes.GITEM,
  gitemHolderTarget,
  collect
)(GItemTarget));
