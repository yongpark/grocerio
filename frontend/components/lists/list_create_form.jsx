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
import {blueGrey300, blueGrey600, blueGrey700} from 'material-ui/styles/colors';
import {blueGrey900} from 'material-ui/styles/colors';
import {grey50, blueGrey100, blueGrey400} from 'material-ui/styles/colors';
import {lightBlue300} from 'material-ui/styles/colors';

const labelstyle={
  fontWeight: 300,
  color: grey50
};


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
          <Card className="list-card-create">
            <CardTitle title="Create a new list..."  titleStyle={{ fontSize: '18px', color: grey50}}/>
          </Card>
        </MuiThemeProvider>
        <div className="list-create-container" ref='create'>
          <form onSubmit={this.handleSubmit}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Card className='list-create' style={{backgroundColor:blueGrey100}}>
                <CardTitle className="card-subtitle" title="New Grocery List" subtitle="Grocery List Name" ttitleStyle={{color: blueGrey900, fontSize: 18}} subtitleStyle={{color: blueGrey900}}/>
                <TextField
                  id="titleinput"
                  type="text"
                  floatingLabelText="Weekly Grocery List"
                  onChange={this.update('title')}
                  inputStyle={{paddingLeft: 5, paddingRight: 5, color: blueGrey900, width:'100%'}}
                  floatingLabelStyle={{color: blueGrey600,  left: '5px'}}
                  floatingLabelFocusStyle={{color: blueGrey600}}
                  hintStyle={{color: blueGrey900}}
                  underlineFocusStyle={{width: '200px', borderColor:blueGrey700}}
                />
              <RaisedButton type="submit" label="Create" backgroundColor="#263238" labelStyle={{fontWeight: 300, color: grey50}}/>
            </Card>
            </MuiThemeProvider>
          </form>
        </div>
    </li>
    );
  }
}

export default ListCreateForm;
