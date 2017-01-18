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


class ListCreateForm extends React.Component{
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

  componentDidMount(){
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  componentWillReceiveProps(newProps){
    this.state.list = newProps.list;
  }

  handleClickOutside(e){
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.hide();
    }
  }

  show(){
    this.refs.create.style.display = 'flex';
    this.setState({show: true});
  }

  hide(){
    this.refs.create.style.display = 'none';
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
    this.props.createList(this.state.list).then(this.hide);
  }

  render(){
    return(
      <li className='list-box' onClick={this.show}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card className="list-box">
            <CardTitle title="Create a new list..."/>
          </Card>
        </MuiThemeProvider>
        <div className="list-create-container" ref='create'>
          <form onSubmit={this.handleSubmit}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Card>
                <CardTitle className="card-subtitle" title="Grocery List Name" subtitle="List Name"/>
                <TextField
                  id="titleinput"
                  type="text"
                  placeholder="Weekly Grocery List"
                  onChange={this.update('title')}
                />
              <RaisedButton type="submit" secondary={true} label="Create"/>
            </Card>
            </MuiThemeProvider>
          </form>
        </div>
    </li>
    );
  }
}

export default ListCreateForm;
