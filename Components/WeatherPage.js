import React from 'react';
import { StyleSheet, Text, View, Navigator, Alert, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Input } from 'react-native-elements'
import { createStackNavigator, createAppContainer, DrawerNavigator, } from "react-navigation";
import axios from 'axios';


export default class WeatherPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cityImageURI: '',
      imageURI: '',
      preImageURI: 'city',
      city: {},
      location: null,
      error: '',
    }
    this.getWeatherData = this.getWeatherData.bind(this);
    // this.findCoordinates = this.findCoordinates.bind(this);
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      this.getWeatherData();
      });
  }

  

  // findCoordinates = () => {
  //    const myFunc = async () => { 
  //     navigator.geolocation.getCurrentPosition(
  //       position => {
  //         const location = JSON.stringify(position);
  //          this.setState({ location: position }, function () {
  //           this.getWeatherData();
  //       });
  //       },
  //       error => Alert.alert(error.message),
  //       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //     );
  //   }
  //   myFunc();

  // };

  getWeatherData() {
    this.setState({error: ''});
    // const latitude = this.state.location.coords.latitude.toString();
    // const longitude = this.state.location.coords.longitude.toString();
    const cityName = this.props.navigation.getParam('city', 'error');


    // fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=63dd0d75cb039f76bb9b092405a90895&units=imperial")
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.replace(/\s+/g, '+') + "&appid=63dd0d75cb039f76bb9b092405a90895&units=imperial")    
    .then(res => res.json())
    .then(weatherData => {
      this.setState({ city: weatherData });
      console.log('egg');
      console.log(weatherData);
      console.log(this.state.city);
      if (weatherData.cod !== "404") {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${cityName.replace(/\s+/g, '+')}&client_id=4c1f5525e6dcace5b7a268ca4f5ac18f69dd4b46f3b01226b4287772783938e4`)
          .then(res => res.json())
          .then(imgData => {
            console.log(imgData);

            if (imgData.total !== 0) {
              this.setState({ cityImageURI: imgData.results[Math.floor(Math.random() * 3) + 1].urls.regular });
              this.setState({ imageURI: this.state.preImageURI.toUpperCase() });
            } else {
              this.setState({ error: 'City was not found' });
            }
          });
      } else {
        this.setState({ error: 'City was not found' });
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>

<Image source={{uri: this.state.cityImageURI}} style={{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover', // or 'stretch'
    backgroundColor: 'rgba(0,0,0,0.5)',
  }} />
  <View style={{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover', // or 'stretch'
    backgroundColor: 'rgba(0,0,0,0.5)',
  }}>

  </View>
  <View style={{position: 'absolute',
    top: 30,
    left: 10,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',}}>
        <Icon
   containerStyle={{}}
  raised
  name='bars'
  type='font-awesome'
  color='black'
  onPress={() => this.props.navigation.openDrawer()} />
        <Text style={{fontSize: 35, textAlign: 'center', color: 'white'}}>{this.state.city && this.state.city.name}</Text>
        </View>
        {/* <Text>Hands shoulders knees and toes</Text> */}
        {/* <Text style={styles.header} h1>Weather Man</Text> */}
       
        <Text style={{fontSize: 75,  textAlign: 'center', color: 'white'}}>{this.state.city && this.state.city.main && this.state.city.main.temp}{String.fromCharCode(176)}</Text>
        <Text style={{fontSize: 23, textAlign: 'center', color: 'white'}}>{this.state.city && this.state.city.weather && this.state.city.weather[0].description}</Text>
        <Text style={{fontSize: 23, textAlign: 'center', color: 'white'}}>{
          this.state.error !== '' ? this.state.error : ''
        }</Text>

{/* <Button
          title="Go to Forecasts"
          onPress={() => this.props.navigation.navigate('Forecasts')}
          buttonStyle={{marginTop: 25}}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    fontSize: 50
  },

});

