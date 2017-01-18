import React, {Component} from 'react';
import ColumnIndexItem from './column_index_item';

class ColumnIndex extends Component {
  render(){
    const listId = this.props.listId;
    return (
      <ul className="column-index">
        {
          this.props.columns.map(column =>
          <ColumnIndexItem column={column} key={column.id} listId={listId}/>)
        }
      </ul>
    );
  }
}

export default ColumnIndex;
