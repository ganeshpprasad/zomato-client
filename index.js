/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/reducer';

const middlewares = [thunk];
const store = createStore(reducer, applyMiddleware(...middlewares));

const AppStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// AppRegistry.registerComponent(appName, () => (
//
// ));
AppRegistry.registerComponent(appName, () => AppStore);
