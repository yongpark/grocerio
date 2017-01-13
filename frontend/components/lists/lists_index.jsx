import React from 'react';
import ListIndexItem from './lists_index_item';

class ListsIndex extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div className="ListsIndex">
          <h1 className="ListsIndexHeader">Your Grocery Lists</h1>
          <div className="ListsIndexBody">
            <ul>
              {this.props.children}
            </ul>
          </div>
        </div>
      );
    }
}

export default ListsIndex;
