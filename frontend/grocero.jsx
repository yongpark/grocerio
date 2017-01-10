import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import injectTapEventPlugin from 'react-tap-event-plugin';

document.addEventListener("DOMContentLoaded", () => {
  let store = {};
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<h1>grcoero</h1>, root);
  window.store = store;
});
