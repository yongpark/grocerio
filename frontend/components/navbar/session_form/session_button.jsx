import React from 'react';
import { Link } from 'react-router';
import {FlatButton, RaisedButton, TextField} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const style={
  height: '64px',
};

const labelstyle={
  lineHeight: '55px'
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
              labelStyle={labelstyle}
              label="logout"
              onClick={this.props.logout}/>
          </MuiThemeProvider>
        </div>
      );
    }
    else{
      return(
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <RaisedButton className='session-button' label="login" style={style} labelStyle={labelstyle}
              onClick={this.props.openAuthModal} iconElementRight={<FlatButton label="Login" onClick={this.props.openAuthModal} />}>
            </RaisedButton>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default SessionButton;
