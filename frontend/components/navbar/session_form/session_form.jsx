import React from 'react';
import { Link, withRouter } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
    this.props.closeAuthModal();
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
      guestLogin = (<FlatButton label='Guest Login' secondary={true} onClick={this.handleGuestLogin}/>);
    }
    else {
      buttonName = "Sign Up";
      linkText = "Log In";
      guestLogin = (<FlatButton label='Guest Login' secondary={true} onClick={this.handleGuestLogin}/>);
    }
    return(
      <section>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog open={this.props.authModalOpen} onRequestClose={this.props.closeAuthModal} modal={false} title={buttonName}>
            <form onSubmit={this.handleSubmit}>
              <TextField type="text" floatingLabelText="Username" errorText={this.props.errors.username === undefined ? "" : "Username is required"} value={this.state.username}  onChange={this.update("username")} fullWidth={true}/>
              <br/>
              <TextField type="password" hintText="Password" floatingLabelText="Password" value={this.state.password} onChange={this.update("password")} fullWidth={true} errorText={this.props.errors.password === undefined ? "" : "Password is required"}/>
              <br/>
              <FlatButton label="Submit" type="submit" primary={true}/>
            </form>
            <section>
              {guestLogin}
              <FlatButton label={linkText} secondary={true} onTouchTap={this.handleToggleFormType}/>
            </section>
          </Dialog>
        </MuiThemeProvider>
      </section>
    )
  }
}

export default SessionForm;
