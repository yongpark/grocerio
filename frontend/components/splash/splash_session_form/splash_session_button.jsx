import React from 'react';
import { Link } from 'react-router';
import {FlatButton, RaisedButton, TextField} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const style = {
  width: "200px"
};


class SplashSessionButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.session.currentUser){
      return(
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <RaisedButton
            label="logout"
            onClick={this.props.logout} className={"splash-session-button"}/>
        </MuiThemeProvider>
      );
    }
    else{
      return(
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <RaisedButton label="sign up"
            onClick={this.props.openAuthModal}  style={style} className="splash-session-button"/>
        </MuiThemeProvider>
      );
    }
  }
}

export default SplashSessionButton;
