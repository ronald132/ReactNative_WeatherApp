'use strict';

import StatusBar from 'StatusBar';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux';

const SCREEN_WIDTH = Dimensions.get('window').width;

type Props = {
  isInitialised: bool;
  navigator: any;
}

class Login extends Component{
  props: Props;
  constructor(props: Props){
    super(props);
  }
  render(){
    console.log("isInitialised: " + this.props.isInitialised);
    return(
        <View style={styles.container} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
});

function select(store: any, props: Props){
  return{
    isInitialised: store.login.isInitialised,
    ...props
  }
}

module.exports = connect(select)(Login);
