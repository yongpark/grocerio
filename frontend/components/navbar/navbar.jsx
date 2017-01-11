import React from 'react';
import { Toolbar, ToolbarGroup, FlatButton, RaisedButton, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { hashHistory, Link } from 'react-router';
import SessionButtonContainer from './session_form/session_button_container';
import SessionFormContainer from './session_form/session_form_container';

const navbarStyle = {
  backgroundColor: '#FF3D00',
  width: '100%'
};



class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(url){
    hashHistory.push(url);
  }
  render(){
    const handleClick = url => () => hashHistory.push(url);
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar title="Grocero">
          <SessionButtonContainer/>
          <SessionFormContainer/>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;
