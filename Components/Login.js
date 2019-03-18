import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon, Input } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Hands shoulders knees and toes</Text> */}
        <Text style={styles.header} h1>Weather Man</Text>
        

<Card containerStyle={{width: 300, height: 300}} title="Login">
  {
    // users.map((u, i) => {
    //   return (
    //     <View key={i} style={styles.user}>
    //       <Image
    //         style={styles.image}
    //         resizeMode="cover"
    //         source={{ uri: u.avatar }}
    //       />
    //       <Text style={styles.name}>{u.name}</Text>
    //     </View>
    //   );
    // })
  }
  {/* <Text>Card text, pretty cool</Text> */}
  <Input
  placeholder='Email'
  // leftIcon={
  //   <Icon
  //     name='user'
  //     size={24}
  //     color='black'
  //   />
  // }
/>
<Input
  placeholder='Password'
  // leftIcon={
  //   <Icon
  //     name='user'
  //     size={24}
  //     color='black'
  //   />
  // }
/>
<Text style={styles.name}>Not a member? Sign Up Here</Text>

</Card>
<Button
          title="Go to Forecasts"
          onPress={() => this.props.navigation.navigate('Forecasts')}
        />
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