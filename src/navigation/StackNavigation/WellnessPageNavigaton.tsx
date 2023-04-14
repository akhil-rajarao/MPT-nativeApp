import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Booking from '../../screens/booking/Booking';
import WellnessPage from '../../screens/wellnesspage/wellness';
import Trial from '../../screens/Trial';


const WellnessPageStack = createStackNavigator<any>();
export default function WellnessPageNavigaton() {
    return (
        <WellnessPageStack.Navigator initialRouteName='WellnessPage1'>
          <WellnessPageStack.Screen name="WellnessPage1" component={WellnessPage}/>
          <WellnessPageStack.Screen name="Trial" component={Trial} />
        </WellnessPageStack.Navigator>
      );
}
