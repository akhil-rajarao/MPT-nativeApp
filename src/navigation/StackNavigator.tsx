import Booking from '../screens/booking/Booking';
import Destination from '../screens/Destination';
import HomeScreen from '../screens/HomeScreen';
// import Destination from '../screens/booking/Booking';
// import DetailsScreen from '../screens/DetailsScreen';
// import HomeScreen from '../screens/HomeScreen';
// import NavBar from '../component/NavBar';
// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const HomeStack = createStackNavigator<any>();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen1">
      <HomeStack.Screen name="HomeScreen1" component={HomeScreen} />
      {/* <HomeStack.Screen name="NavBar" component={NavBar} /> */}
      <HomeStack.Screen name="Destination" component={Destination} />
      <HomeStack.Screen name="Booking" component={Booking} />
    </HomeStack.Navigator>
  );
};
export default HomeStackNavigator;
