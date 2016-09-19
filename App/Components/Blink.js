import React, { Component } from 'react';
import {Text} from 'react-native';

class Blink extends Component {

  constructor(props) {
    super(props);
    this.state = {showText: false};

    setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 1000);
  }

  render() {
    var display = (this.state.showText) ? this.props.text : '';
    return (
      <Text>{display}</Text>
    )
  }
}

module.exports = Blink;
