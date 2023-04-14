import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Booking from '../../screens/booking/Booking';
import EventsPage from '../../screens/eventspage/events';


const EventsPageNavigatorStack = createStackNavigator<any>();
export default function EventsPageNavigator() {
    return (
        <EventsPageNavigatorStack.Navigator initialRouteName='EventsPage1'>
          <EventsPageNavigatorStack.Screen name="EventsPage1" component={EventsPage}/>
          <EventsPageNavigatorStack.Screen name="Booking" component={Booking} />
        </EventsPageNavigatorStack.Navigator>
      );
}
