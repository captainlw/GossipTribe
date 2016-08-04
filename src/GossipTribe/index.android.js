/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    BackAndroid,

} from 'react-native';


import Main from './Main';
var _navigator;


class GossipTribe extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', function () {
      if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
      }
      return false;
    });
  }
  render() {

    let defaultName='main';
    let defaultComponent = Main;

    return (
        <Navigator
            style={styles.init}
            initialRoute={{name: defaultName,component: defaultComponent}}
            configureScene={() => Navigator.SceneConfigs.FadeAndroid}
            renderScene={
              (route,navigator)=>{
                let Component = route.component;
                _navigator = navigator;
                return <Component {...route.params} navigator={navigator}/>
              }
            }
        />
    );
  }


}


const styles = StyleSheet.create({

  init: {
    flex:1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GossipTribe', () => GossipTribe);
