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
var Pizza = require('./App/Components/PizzaTranslator');
var ListViewBasics = require('./App/Components/ListViewBasics');

class AwesomeProject extends Component {
  render() {
    return (
        <View>
          <ListViewBasics />
          {
            /*
             <Text>Hello world </Text>
             <Apple></Apple>
             <Greeting name="Fulano" />
             <Greeting name="Mengano" />
             <Blink text="Hello world!"/>
             <Blink text="Pensamiento magico" />
             <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
             <Pizza />
             */
          }
       </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
