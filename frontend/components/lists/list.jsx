import React, { Component } from 'react';
import { withRouter } from 'react-router';

class List extends Component{
  componentDidMount(){
    this.props.fetchList(this.props.params.listId);
  }

  render(){
    const listId = this.props.params.listId;
    console.log(this.props);
    return (
      <div>
        TEST
      </div>
  );
  }
}

export default List;
