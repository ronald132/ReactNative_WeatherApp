'use strict';
import StatusBar from 'StatusBar';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  navigator: any;
}

class Footer extends Component {
  constructor(props: Props){
    super(props);

  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.left}>
          <TouchableHighlight onPress={this.navigateToLocations} style={{width: 30}} underlayColor='transparent'>
            <Icon name='ios-list' size={35} color='#8F97A4' />
          </TouchableHighlight>
        </View>
        <View style={styles.center}>

        </View>
        <View style={styles.right}>
          <TouchableHighlight onPress={this.navigateToSettings} underlayColor='transparent'>
            <Icon name='ios-settings-outline' size={25} color='#8F97A4' />
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  navigateToSettings() {

  }

  navigateToLocations() {

  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:22,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 44,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#c4c4c4'
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9'
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
});

module.exports = Footer;
