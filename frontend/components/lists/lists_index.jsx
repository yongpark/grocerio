import React from 'react';
import ListIndexItem from './list_index_item';
import ListsCreateFormContainer from './list_create_form_container';
import SplashContainer from '../splash/splash_container';


class ListsIndex extends React.Component{
    componentDidMount(){
      this.props.fetchLists();
    }

    render(){
      if (this.props.lists) {
        return(
          <section className="lists-index">
            <h2 className="lists-index-header">Your Grocery Lists</h2>
            <ul className='lists-list'>
              {
                this.props.lists.map(list =>
                <ListIndexItem key={list.id} list={list} />
                )
              }
              <ListsCreateFormContainer/>
            </ul>
          </section>
        );
      }
      else{
        return(
          <SplashContainer/>
        );
      }
    }
}

export default ListsIndex;
