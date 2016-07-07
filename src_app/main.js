'use strict';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import App from './app';

import configureStore from './store/configure';

import { doLogin } from './actions';

type State = {
  store: any;
}

class Root extends Component{
  constructor(){
    super();

    this.state = {
      store: configureStore()
    }

    this.state.store.dispatch(doLogin());

  }

  render(){
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

module.exports = Root;
