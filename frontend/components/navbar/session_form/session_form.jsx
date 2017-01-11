import React from 'react';
import { Link, withRouter } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';

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
        ? 'signup'
        : 'login'
    });
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user ={
      username: 'Guest',
      password: 'password'
    };
    this.props.login({user});
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render()
}

export default SessionForm;
