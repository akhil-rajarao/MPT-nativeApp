import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Booking from '../../screens/booking/Booking';

import WelcomeScreen from '../../screens/mice&facilities';

const WelcomeScreenStack = createStackNavigator<any>();
export default function WelcomeScreenStackNavigator() {
    return (
        <WelcomeScreenStack.Navigator initialRouteName='WelcomeScreen'>
          <WelcomeScreenStack.Screen name="WelcomeScreen1" component={WelcomeScreen}/>
          <WelcomeScreenStack.Screen name="Booking" component={Booking} />
        </WelcomeScreenStack.Navigator>
      );
}
