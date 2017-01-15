import React from 'react';
import ListIndexItem from './list_index_item';

class ListsIndex extends React.Component{
    constructor(props){
      super(props);
    }

    componentDidMount(){
      this.props.fetchLists();
    }

    render(){
      return(
        <div className="lists-index">
          <h1 className="lists-index-header">Your Grocery Lists</h1>
          <ul className='lists-list'>
            {
              this.props.lists.map(list =>
              <ListIndexItem key={list.id} list={list} />
              )
            }
          </ul>
        </div>
      );
    }
}

export default ListsIndex;
