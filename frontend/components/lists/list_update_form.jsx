import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card, CardTitle} from 'material-ui/Card';
import merge from 'lodash/merge';

class ListUpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
      list: props.list
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e){
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.hide();
    }
  }

  componentDidMount(){
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  componentWillReceiveProps(newProps){
    this.state.list = newProps.list;
  }

  show(){
    this.refs.update.style.display = 'flex';
    this.setState({show: true});
  }

  hide(){
    this.refs.update.style.display = 'none';
    this.setState({show: false});
  }

  update(prop){
    return e => {
      const list = merge({}, this.state.list, {
        [prop]: e.target.value
      });
      this.setState({list});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateList(this.state.list).then(this.hide);
  }

  render(){
    return(
      <div className="list-update-form">
        <h2 className="list-container-heading" onClick={this.show}>{this.props.list.title}</h2>
        <div className="list-update-container" ref='update'>
          <form onSubmit={this.handleSubmit}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Card>
                <CardTitle title="Rename List" subtitle="List Name"/>
                  <TextField
                    id="titleinput"
                    type="text"
                    value={this.state.list.title}
                    placeholder="i.e. Weekly Grocery List"
                    onChange={this.update('title')}
                  />
                <RaisedButton type="submit" secondary={true} label="Update"/>
              </Card>
            </MuiThemeProvider>
          </form>
        </div>
      </div>
    );
  }
}

export default ListUpdateForm;
