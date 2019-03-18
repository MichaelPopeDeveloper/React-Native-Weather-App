import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon, Input } from 'react-native-elements'
import { DrawerNavigator } from "react-navigation";
import {SearchBar} from 'react-native-elements'
import Home from './Components/Home';
import WeatherPage from './Components/WeatherPage';
import Login from './Components/Login';
import Forecasts from './Components/Forecasts';

export const DrawerNav = DrawerNavigator (
  {
      Home:{ screen: Home },
      Login:{ screen: Login }
  },
  {
     contentComponent: drawerContentComponents
  });

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