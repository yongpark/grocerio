import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ListMenuContainer from './list_menu_container';
import ColumnIndexContainer from '../column/column_index_container';
import ListUpdateFormContainer from './list_update_form_container';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class List extends Component{
  componentDidMount(){
    this.props.fetchList(this.props.params.listId)
    .then(() => this.props.fetchColumns(this.props.params.listId));
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

export default withRouter(DragDropContext(HTML5Backend)(List));
