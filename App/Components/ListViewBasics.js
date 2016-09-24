import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

class ListViewBasics extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Heidi','Vivi', 'Vane', 'Samy'
      ])
    };
  }

  render() {
    return (
      <View style={{paddingTop: 0}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text> }
        ></ListView>
      </View>
    );
  }

}

module.exports = ListViewBasics;
