// import Booking from '../../screens/booking/Booking';
import React from 'react';
import Trial from '../../screens/Trial';
import WellnessPage from '../../screens/wellnesspage/wellness';
import {createStackNavigator} from '@react-navigation/stack';

const WellnessPageStack = createStackNavigator<any>();
export default function WellnessPageNavigaton() {
  return (
    <WellnessPageStack.Navigator initialRouteName="WellnessPage1">
      <WellnessPageStack.Screen name="WellnessPage1" component={WellnessPage} />
      <WellnessPageStack.Screen name="Trial" component={Trial} />
    </WellnessPageStack.Navigator>
  );
}
