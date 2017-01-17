import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ListMenuContainer from './list_menu_container';

class List extends Component{
  componentDidMount(){
    this.props.fetchList(this.props.params.listId);
  }

  render(){
    const listId = this.props.params.listId;
    return (
      <div className="list-container">
        <h1 className="list-container-header">{this.props.list.title}</h1>
        <div>

        </div>
        <ListMenuContainer listId={listId}/>
      </div>
    );
  }
}

export default List;
