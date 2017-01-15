import React from 'react';
import {withRouter} from 'react-router';

const defaultState = {
  list: {
    title: ''
  }
};

class ListCreateForm extends React.Component{
  constructor(){
    super();

    this.state = Object.assign({}, defaultState);
    this.createList = this.createList.bind(this);
    this.updateNewList = this.updateNewList.bind(this);
  }

  updateNewList(property){
    return e=> {
      Object.freeze(this.state);
      const value = (
        typeof e.currentTarget.value !== 'undefined' ?
        e.currentTarget.value :
        e.currentTarget.dataset.value
      );
      const list = Object.assign({}, this.state.list,{
        [property]: value
      });
      this.setState({
        list
      });
    };
  }

  createList(e){
    e.preventDefault();
    const newList = Object.assign({}, this.state.list);
    newList.title = newList.title.trim();
    if (newList.title !==''){
      this.props.createList(newList).then((list) => {
        this.props.toggle();
        this.setState(Object.assign({}, defaultState));
        this.props.router.push(`/lists/${list.id}`);
        this.props.resetMenus();
      });
    }
  }

  render(){
    const {list} = this.state;
    const {title} = list;

    if (this.props.show){
      setTimeout(() => this.refs.titleInput.focus(), 1);
    }

    return(
      <form onSubmit={this.createList}>
        <label>
          Title
          <input
            type="text"
            className="input"
            ref="titleInput"
            placeholder="Weekly Grocery List"
            value={title}
            onChange={this.updateNewList('title')}
          />
        </label>
        <input type="submit" value="Create"/>
      </form>
    );
  }
}

export default withRouter(ListCreateForm);
