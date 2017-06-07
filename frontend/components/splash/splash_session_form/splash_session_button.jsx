import React from 'react';
import { Link } from 'react-router';
import {FlatButton, RaisedButton, TextField} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue300} from 'material-ui/styles/colors';
import {grey300} from 'material-ui/styles/colors';
import {grey50} from 'material-ui/styles/colors';

const style = {
  width: "300px",
  height: "50px",
  borderRadius: '3px'
};

const labelstyle={
  paddingTop: '10%',
  top: '12px',
  fontWeight: 300,
  color: grey50
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
            backgroundColor="#78909C"
            onClick={this.props.logout} className={"splash-session-button"}/>
        </MuiThemeProvider>
      );
    }
    else{
      return(
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <RaisedButton label="sign up"
            backgroundColor="#78909C"
            onClick={this.props.openAuthModal}  labelStyle={labelstyle}
            style={style} className="splash-session-button"/>
        </MuiThemeProvider>
      );
    }
  }
}

export default SplashSessionButton;
