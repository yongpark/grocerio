import React from 'react';
import { Toolbar, ToolbarGroup, FlatButton, RaisedButton, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { hashHistory, Link } from 'react-router';

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
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;
