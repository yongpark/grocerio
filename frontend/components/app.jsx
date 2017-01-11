import React from 'react';
import SessionFormContainer from './navbar/session_form/session_form_container';
// import NavBarContainer from './navbar/navbar_container';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>Bench BnB</h1></Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);
