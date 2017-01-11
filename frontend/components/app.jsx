import React from 'react';
import SessionFormContainer from './navbar/session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';

const App = ({children}) => (
  <div>
    <header>
      <NavBarContainer/>
    </header>
    {children}
  </div>
);

export default App;
