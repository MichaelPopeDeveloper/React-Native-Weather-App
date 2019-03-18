import React from 'react';
import { StyleSheet, Text, View, Navigator, Alert, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Input, SearchBar } from 'react-native-elements'
import { createStackNavigator, createAppContainer, DrawerNavigator } from "react-navigation";
import axios from 'axios';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      cityImageURI: '',
      imageURI: '',
      preImageURI: 'city',
      city: {},
      location: null,
    }
    this.getBackgroundImage = this.getBackgroundImage.bind(this);
    this.findCoordinates = this.findCoordinates.bind(this);
  }

  componentWillMount() {
    this.getBackgroundImage();
  }

  updateSearch = search => {
    this.setState({ search });
  };

  findCoordinates = () => {
     const myFunc = async () => { 
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = JSON.stringify(position);
           this.setState({ location: position }, function () {
            this.getWeatherData();
        });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
    myFunc();

  };

  getBackgroundImage()  {
      fetch(`https://api.unsplash.com/search/photos?page=1&query=${this.state.preImageURI.replace(/\s+/g, '+')}&client_id=4c1f5525e6dcace5b7a268ca4f5ac18f69dd4b46f3b01226b4287772783938e4`)
        .then(res => res.json())
        .then(imgData => {
          console.log(imgData);
          console.log('total: ' + typeof imgData.total)

          if (imgData.total !== 0) {
            this.setState({ cityImageURI: imgData.results[Math.floor(Math.random() * 3) + 1].urls.regular });
            this.setState({ imageURI: this.state.preImageURI.toUpperCase() });
          } else {
            this.setState({ imageURI: 'City was not found' });
          }
        })
        .catch(err => console.log(err));
}

  render() {
    const { search, cityImageURI } = this.state;
    return (
      <View style={styles.container}>
      <Image source={{uri: cityImageURI}} style={{
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
        </View>
        <SearchBar
        containerStyle={{width: '80%', backgroundColor: 'white', marginBottom: 130}}
        inputContainerStyle={{backgroundColor: 'white'}}
        placeholder="Type Here..."
        value={search}
        onChangeText={this.updateSearch}
      onSubmitEditing={() =>   this.props.navigation.navigate('Weather', {
        city: search.toLocaleLowerCase()
      })}
      />
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