import Booking from '../../screens/booking/Booking';
import BookingRules from '../../screens/footer_pages/contact_Us/BookingRules';
import Cancel from '../../screens/footer_pages/contact_Us/Cancel';
import ContactUs from '../../screens/footer_pages/contact_Us/ContactUs';
import Explore from '../../screens/Explore';
import HomeScreen from '../../screens/HomeScreen';
import React from 'react';
import Trial from '../../screens/Trial';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator<any>();
export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen1">
      <HomeStack.Screen name="HomeScreen1" component={HomeScreen} />
      <HomeStack.Screen name="Booking" component={Booking} />
      <HomeStack.Screen name="Explore" component={Explore} />
      <HomeStack.Screen name="ContactUs" component={ContactUs} />
      <HomeStack.Screen name="BookingRules" component={BookingRules} />
      <HomeStack.Screen name="Cancel" component={Cancel} />
      <HomeStack.Screen name="Trial" component={Trial} />
    </HomeStack.Navigator>
  );
}
