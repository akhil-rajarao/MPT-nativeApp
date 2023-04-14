import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Booking from '../../screens/booking/Booking';
import Institutions from '../../screens/institutions/institutions';


const InstitutionsStack = createStackNavigator<any>();
export default function InstitutionsNavigator() {
    return (
        <InstitutionsStack.Navigator initialRouteName='Institutions1'>
          <InstitutionsStack.Screen name="Institutions1" component={Institutions}/>
          <InstitutionsStack.Screen name="Booking" component={Booking} />
        </InstitutionsStack.Navigator>
      );
}
