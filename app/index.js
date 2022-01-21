import React from 'react';
import './assets/styles/application';
import { View, Text, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './config/store';
import AppContainer from './config/routes';

export default () => {    
  return (
    <Provider store={store}>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
      <AppContainer />
    </Provider>
  )
};