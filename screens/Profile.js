import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Profile Screen</Text>
        <Text>gallery here</Text>
      </View>
    );
  }
}