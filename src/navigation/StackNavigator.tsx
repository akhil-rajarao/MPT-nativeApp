import Booking from '../screens/booking/Booking';
// import DetailsScreen from '../screens/DetailsScreen';
// import HomeScreen from '../screens/HomeScreen';
import NavBar from '../component/NavBar';
// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NavBar" component={NavBar} />
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
