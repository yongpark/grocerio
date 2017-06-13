import React from 'react';
import { Link } from 'react-router';
import {FlatButton, RaisedButton, TextField} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue300} from 'material-ui/styles/colors';
import {grey50} from 'material-ui/styles/colors';
import {blueGrey300} from 'material-ui/styles/colors';
import { withRouter, hashHistory } from 'react-router';

const style={
  height: '64px',
};

const labelstyle={
  paddingTop: '10%',
  top: '20px',
  fontWeight: 300,
  color: grey50
};

class SessionButton extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.router.push("/"), e => { console.log(e); });
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
              backgroundColor="#78909C"
              onClick={this.handleLogout}/>
          </MuiThemeProvider>
        </div>
      );
    }
    else{
      return(
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <RaisedButton className='session-button' label="login" labelStyle={labelstyle}
            backgroundColor="#78909C"
            style={style} onClick={this.props.openAuthModal}>
            </RaisedButton>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default withRouter(SessionButton);
