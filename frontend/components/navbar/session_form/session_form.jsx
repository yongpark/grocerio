import React from 'react';
import { Link, withRouter } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {lightBlue300} from 'material-ui/styles/colors';
import {grey300, grey50} from 'material-ui/styles/colors';
import Typist from 'react-typist';
import {blueGrey600, blue700} from 'material-ui/styles/colors';

injectTapEventPlugin();

const labelstyle={
  fontWeight: 300,
  color: blueGrey600
};

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: 'login'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleFormType = this.handleToggleFormType.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.state.formType === 'login' ? this.props.login({user}) : this.props.signup({user});
  }

  handleToggleFormType(e) {
    e.preventDefault();
    this.setState({
      formType: this.state.formType === 'login'
        ? 'signup' : 'login'
    });
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user ={
      username: 'guest',
      password: 'password'
    };
    this.props.login({user});
    this.props.closeAuthModal('login');
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render(){
    let buttonName,
        linkText,
        guestLogin;
    if (this.state.formType === "login"){
      buttonName = "Log In";
      linkText = "Sign Up";
      guestLogin = (<FlatButton label='Guest Login' onClick={this.handleGuestLogin} labelStyle={labelstyle}/>);
    }
    else {
      buttonName = "Sign Up";
      linkText = "Log In";
      guestLogin = (<FlatButton label='Guest Login' onClick={this.handleGuestLogin} labelStyle={labelstyle}/>);
    }
    return(
      <section>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog open={this.props.authModalOpen} onRequestClose={this.props.closeAuthModal} modal={false} title={buttonName} bodyStyle={{color: lightBlue300}} className="dialog-form"
            bodyStyle={{backgroundColor: grey50}} titleStyle={{backgroundColor: grey50, fontWeight: 300, color: blueGrey600}}>
            <form onSubmit={this.handleSubmit}>
              <TextField type="text" floatingLabelText="Username" errorText={this.props.errors.username === undefined ? "" : `username ${this.props.errors.username.join(", ")}`} value={this.state.username}  onChange={this.update("username")} fullWidth={true}
                inputStyle={{color: blueGrey600, }}
                floatingLabelStyle={{color: blueGrey600}}
                floatingLabelFocusStyle={{color: blueGrey600}}
                hintStyle={{color: grey300}}
                underlineFocusStyle={{borderColor: blue700}}/>
              <br/>
              <TextField type="password" hintText="Password" floatingLabelText="Password" value={this.state.password} onChange={this.update("password")} fullWidth={true} errorText={this.props.errors.password === undefined ? "" : this.props.errors.password.join(", ")}
                inputStyle={{color: blueGrey600, }}
                floatingLabelStyle={{color: blueGrey600}}
                floatingLabelFocusStyle={{color: blueGrey600}}
                hintStyle={{color: grey300}}
                underlineFocusStyle={{borderColor: blue700}}/>
              <br/>
              <FlatButton label="Submit" type="submit" labelStyle={labelstyle}/>
            </form>
            <section>
              {guestLogin}
              <FlatButton label={linkText} onTouchTap={this.handleToggleFormType}  labelStyle={labelstyle}/>
            </section>
          </Dialog>
        </MuiThemeProvider>
      </section>
    );
  }
}

export default SessionForm;
