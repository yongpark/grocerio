import React from 'react';
import { Link } from 'react-router';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class SessionButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.session.currentUser){
      return(
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <RaisedButton
              label="logout"
              onClick={this.props.logout}/>
          </MuiThemeProvider>
        </div>
      );
    }
    else{
      return(
        <di>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <RaisedButton label="login"
              onClick={this.props.openAuthModal}>
            </RaisedButton>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default SessionButton;
