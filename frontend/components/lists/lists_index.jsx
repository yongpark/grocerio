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
        <section className="lists-index">
          <h2 className="lists-index-header">Your Grocery Lists</h2>
          <ul className='lists-list'>
            {
              this.props.lists.map(list =>
              <ListIndexItem key={list.id} list={list} />
              )
            }
          </ul>
        </section>
      );
    }
}

export default ListsIndex;
