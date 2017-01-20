import React from 'react';
import { Link } from 'react-router';
import {FlatButton, RaisedButton, TextField} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue300} from 'material-ui/styles/colors';
import {grey300} from 'material-ui/styles/colors';

const style={
  height: '64px',
};

const labelstyle={
  paddingTop: '10%',
  top: '20px',
  fontWeight: 400,
  color: lightBlue300
};

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
              className='session-button'
              label="logout"
              labelStyle={labelstyle}
              style={style}
              onClick={this.props.logout}/>
          </MuiThemeProvider>
        </div>
      );
    }
    else{
      return(
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <RaisedButton className='session-button' label="login" labelStyle={labelstyle}
            style={style} onClick={this.props.openAuthModal}>
            </RaisedButton>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default SessionButton;
