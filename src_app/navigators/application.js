import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import Login from '../components/login';
import Header from '../components/header';

type Props = {};

class ApplicationNavigator extends Component{
  constructor(props: Props){
    super(props);

    (this: any).renderScene = this.renderScene.bind(this);
  }

  render(){
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromButtom;
        }}
        initialRoute={{}}
        renderScene={this.renderScene}
        />
    );
  }

  renderScene(route: any, navigator: Navigator){
    //return <Login navigator={this} />
    return <Header navigator={this} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});

module.exports = ApplicationNavigator;
