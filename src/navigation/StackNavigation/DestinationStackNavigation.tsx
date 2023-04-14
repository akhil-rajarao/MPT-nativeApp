import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Booking from '../../screens/booking/Booking';
import Destination from '../../screens/Destination';


const DestinationStack = createStackNavigator<any>();
export default function DestinationStackNavigator() {
    return (
        <DestinationStack.Navigator initialRouteName='Destination1'>
          <DestinationStack.Screen name="Destination1" component={Destination}/>
          <DestinationStack.Screen name="Booking" component={Booking} />
        </DestinationStack.Navigator>
      );
}
