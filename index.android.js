/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var  Apple  =  require('./App/Components/Apple');
var Greeting = require('./App/Components/Greeting');
var Blink = require('./App/Components/Blink');

class AwesomeProject extends Component {
  render() {
    return (
        <View>
          <Text>Hello world </Text>
          <Apple></Apple>
          <Greeting name="Fulano" />
          <Greeting name="Mengano" />
          <Blink text="Hello world!"/>
          <Blink text="Pensamiento magico" />
       </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
