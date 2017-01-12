import React from 'react';
import SessionFormContainer from './navbar/session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';

const App = ({children}) => (
  <div>
    <section>
      <NavBarContainer/>
    </section>
    {children}
  </div>
);

export default App;
