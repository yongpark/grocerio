import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SplashContainer from './splash/splash_container';
import ListsIndexContainer from './lists/lists_index_container';

const Root = ({ store }) => {

  const _ensureSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
      if (!currentUser) {
        replace('/');
      }
    };

  const _redirectIfSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
      if (currentUser) {
        replace('/lists');
      }
    };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
         <Route path="/" component={App}>
           <IndexRoute component={SplashContainer}/>
           <Route path="/lists" component={ListsIndexContainer} onEnter={_ensureSignedIn}>
           </Route>
         </Route>
      </Router>
    </Provider>
  );
};

export default Root;
