import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as ListActions from './actions/list_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store = {};
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.createList = ListActions.createList;
  window.fetchLists = ListActions.fetchLists;
  window.fetchList = ListActions.fetchList;
  window.deleteList = ListActions.deleteList;
  window.updateList = ListActions.updateList;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
