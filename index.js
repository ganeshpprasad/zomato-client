/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducer';

const store = createStore(reducer);

const AppStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// AppRegistry.registerComponent(appName, () => (
//
// ));
AppRegistry.registerComponent(appName, () => AppStore);
