import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as GItemActions from './actions/gitem_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store = {};
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.createList = GItemActions.createGItem;
  window.fetchGItems = GItemActions.fetchGItems;
  window.fetchGItem = GItemActions.fetchGItem;
  window.deleteGItem = GItemActions.deleteGItem;
  window.updateGItem = GItemActions.updateGItem;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
