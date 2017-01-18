import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ListMenuContainer from './list_menu_container';
import ColumnIndexContainer from '../column/column_index_container'

class List extends Component{
  componentDidMount(){
    this.props.fetchList(this.props.params.listId)
    .then(() => this.props.fetchColumns(this.props.params.listId)
    ,() => this.props.router.push('/boards'))
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.listId !== newProps.params.listId){
      this.props.fetchList(newProps.params.listId).then(
        () =>
        this.props.fetchColumns(newProps.params.listId)
      );
    }
  }


  render(){
    const listId = this.props.params.listId;
    return (
      <div className="list-container">
        <h2 className="list-container-header">{this.props.list.title}</h2>
        <div>
          <ColumnIndexContainer listId={listId}/>
        </div>
        <ListMenuContainer listId={listId}/>
      </div>
    );
  }
}

export default List;
