import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeScreen from '../../screens/HomeScreen';
import Booking from '../../screens/booking/Booking';
import Trial from '../../screens/Trial';


const HomeStack = createStackNavigator<any>();
export default function HomeStackNavigator() {
    return (
        <HomeStack.Navigator initialRouteName='HomeScreen1'>
          <HomeStack.Screen name="HomeScreen1" component={HomeScreen}/>
          <HomeStack.Screen name="Booking" component={Booking} />
          <HomeStack.Screen name="Trial" component={Trial} />
        </HomeStack.Navigator>
      );
}
