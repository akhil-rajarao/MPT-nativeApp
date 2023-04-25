import Adventure from '../../screens/adventure/Adventure';
import Booking from '../../screens/booking/Booking';
import BookingRules from '../../screens/footer_pages/contact_Us/BookingRules';
import Cancel from '../../screens/footer_pages/contact_Us/Cancel';
import Cities from '../../screens/cities/Cities';
import ContactUs from '../../screens/footer_pages/contact_Us/ContactUs';
import Explore from '../../screens/Explore';
import ExploreInterest from '../../component/common/ExploreInterest';
import Food from '../../screens/food/Food';
import Heritage from '../../screens/heritage/Heritage';
import HomeScreen from '../../screens/HomeScreen';
import React from 'react';
import Trial from '../../screens/Trial';
import Wildlife from '../../screens/wildLife/Wildlife';
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
      <HomeStack.Screen name="Wildlife" component={Wildlife} />
      <HomeStack.Screen name="Adventure" component={Adventure} />
      <HomeStack.Screen name="Food" component={Food} />
      <HomeStack.Screen name="Heritage" component={Heritage} />
      <HomeStack.Screen name="Cities" component={Cities} />
      <HomeStack.Screen name="ExploreInterest" component={ExploreInterest} />
    </HomeStack.Navigator>
  );
}
