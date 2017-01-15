import React from 'react';
import {withRouter} from 'react-router';
import TextField from 'material-ui/TextField';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardTitle} from 'material-ui/Card';

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
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card>
            <CardTitle title="Title"  />
            <TextField
              id="titleinput"
              type="text"
              placeholder="Weekly Grocery List"
              value={title}
              onChange={this.updateNewList('title')}
            />
          <RaisedButton type="submit" secondary={true} label="Create"/>
        </Card>
        </MuiThemeProvider>
      </form>
    );
  }
}

export default withRouter(ListCreateForm);
