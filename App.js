import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import {SearchBar} from 'react-native-elements'
import Home from './Components/Search';
import WeatherPage from './Components/WeatherPage';
import Login from './Components/Login';
import Forecasts from './Components/Forecasts';

const AppNavigator = createStackNavigator(
  {
  
    Home,
    Login,
    Forecasts,
  },
  {
    initialRouteName: "Home",
     headerMode: 'none' 
  },
  );

  const MyDrawerNavigator = createDrawerNavigator({
    Search: {
      screen: Home
    },
    Weather: {
     screen: WeatherPage,
    },
  });

export default createAppContainer(MyDrawerNavigator);
