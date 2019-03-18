import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon, Input } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Forecasts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Hands shoulders knees and toes</Text> */}
        <Text style={styles.header} h1>Forecasts page</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    fontSize: 50
  },

});