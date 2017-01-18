import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ListMenuContainer from './list_menu_container';
import ColumnIndexContainer from '../column/column_index_container';
import ListUpdateFormContainer from './list_update_form_container';

class List extends Component{
  componentDidMount(){
    this.props.fetchList(this.props.params.listId)
    .then(() => this.props.fetchColumns(this.props.params.listId)
    ,() => this.props.router.push('/boards'));
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
        <div>
            <div className="list-container-header">
              <ListUpdateFormContainer listId={listId}/>
              <div></div>
                <ColumnIndexContainer listId={listId}/>
            </div>
        </div>
        <ListMenuContainer listId={listId}/>
      </div>
    );
  }
}

export default List;
