import React from 'react';
import { Link, withRouter } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

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
  }

  handleToggleFormType(e) {
    e.preventDefault();
    this.setState({
      formType: this.state.formType === 'login'
        ? 'signup'
        : 'login'
    });
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }
}

export default SessionForm;
