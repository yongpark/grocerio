import React from 'react';
import { hashHistory, Link } from 'react-router';
import SplashSessionButtonContainer from './splash_session_form/splash_session_button_container';
import SplashSessionFormContainer from './splash_session_form/splash_session_form_container';

class Splash extends React.Component{
  render(){
    return(
      <div>
        <div className="home">
          <div className="main-text">
            Grocero is a smart grocery list that saves you money
          </div>
          <div className="main-description">
            Grocero's lists act as a smart to-do list that recommends delicious meals before your groceries expire, saving you money and help you discover tasty new recipes!
          </div>
          <SplashSessionButtonContainer/>
          <SplashSessionFormContainer/>
        </div>
      </div>
    );
  }
}

export default Splash;
