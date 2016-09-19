import React, { Component } from 'react';
import { AppRegistry, Image, View, Text } from 'react-native';

class Apple extends Component {

  render() {

    let pic = {
      uri: 'http://pngimg.com/upload/small/apple_PNG12458.png'
    };

    return (
      <View>
      <Text>This is asldf an apple asdfgsdf </Text>
    <Image source={pic} style={{width: 193, height: 110}} />
  </View>
  )
  }

}

module.exports = Apple;