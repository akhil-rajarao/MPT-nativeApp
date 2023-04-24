import Booking from '../../screens/booking/Booking';
import Destination from '../../screens/Destination';
import Jabalpur from '../../screens/cities/Jabalpur';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Jabalpur from '../../screens/cities/Jabalpur';

const DestinationStack = createStackNavigator<any>();
export default function DestinationStackNavigator() {
  return (
    <DestinationStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Destination1">
      <DestinationStack.Screen name="Destination1" component={Destination} />
      <DestinationStack.Screen name="Booking" component={Booking} />
      <DestinationStack.Screen name="Jabalpur" component={Jabalpur} />
    </DestinationStack.Navigator>
  );
}
