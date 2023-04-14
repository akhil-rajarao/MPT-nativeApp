import Booking from '../../screens/booking/Booking';
import React from 'react';
import TenderPage from '../../screens/tenders/tenders';
import {createStackNavigator} from '@react-navigation/stack';

const TenderPagesStack = createStackNavigator<any>();
export default function TenderPageNavigation() {
  return (
    <TenderPagesStack.Navigator initialRouteName="TenderPage1">
      <TenderPagesStack.Screen name="TenderPage1" component={TenderPage} />
      <TenderPagesStack.Screen name="Booking" component={Booking} />
    </TenderPagesStack.Navigator>
  );
}
