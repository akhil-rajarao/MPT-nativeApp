import AccommodationView from '../../component/common/AccommodationView';
// import PackageView from '../../screens/packageView/PackageView';
// import AccomodatinView from '../../component/common/AccomodatinView';
import Adventure from '../../screens/adventure/Adventure';
import Booking from '../../screens/booking/Booking';
import BookingRules from '../../screens/footer_pages/contact_Us/BookingRules';
import Cancel from '../../screens/footer_pages/contact_Us/Cancel';
import Cities from '../../screens/cities/Cities';
// import Contact from '../../screens/drawerPages/contact/Contact';
import ContactUS from '../../screens/footer_pages/contact_Us/ContactUs';
// import ContactUs from '../../screens/footer_pages/contact_Us/ContactUs';
import Destination from '../../screens/Destination';
import Explore from '../../screens/Explore';
import ExploreInterest from '../../component/common/ExploreInterest';
import Food from '../../screens/food/Food';
// import Heritage from '../../component/common/InnerPages'
import HomeScreen from '../../screens/HomeScreen';
import InnerPage2 from '../../component/common/InnerPage2';
import InnerPages from '../../component/common/InnerPages';
import KnowMoreUE from '../../component/common/KnowMoreUE';
import PackageView from '../../component/common/PackageView';
import Privacy from '../../screens/footer_pages/Privacy';
import React from 'react';
import Trial from '../../screens/Trial';
import Wildlife from '../../screens/wildLife/Wildlife';
import {createStackNavigator} from '@react-navigation/stack';
// import PackageView from '../../screens/packageView/PackageView';
// import AccomodatinView from '../../component/common/AccomodatinView';
import FAQ from '../../screens/footer_pages/FAQ';
import GeneralSales from '../../screens/footer_pages/GeneralSales';

const HomeStack = createStackNavigator<any>();
export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen1">
      <HomeStack.Screen name="HomeScreen1" component={HomeScreen} />
      <HomeStack.Screen name="Booking" component={Booking} />
      <HomeStack.Screen name="Explore" component={Explore} />
      <HomeStack.Screen name="Destination" component={Destination} />
      <HomeStack.Screen name="BookingRules" component={BookingRules} />
      <HomeStack.Screen name="Cancel" component={Cancel} />
      <HomeStack.Screen name="Trial" component={Trial} />
      <HomeStack.Screen name="Wildlife" component={Wildlife} />
      <HomeStack.Screen name="Adventure" component={Adventure} />
      <HomeStack.Screen name="Food" component={Food} />
      <HomeStack.Screen name="InnerPages" component={InnerPages} />
      <HomeStack.Screen name="InnerPage2" component={InnerPage2} />
      <HomeStack.Screen name="Cities" component={Cities} />
      <HomeStack.Screen name="ExploreInterest" component={ExploreInterest} />
      <HomeStack.Screen name="PackageView" component={PackageView} />
      <HomeStack.Screen name="KnowMoreUE" component={KnowMoreUE} />
      <HomeStack.Screen
        name="AccommodationView"
        component={AccommodationView}
      />
      <HomeStack.Screen name="FAQ" component={FAQ} />
      <HomeStack.Screen name="GeneralSales" component={GeneralSales} />

      <HomeStack.Screen name="ContactUS" component={ContactUS} />
      <HomeStack.Screen name="Privacy" component={Privacy} />
    </HomeStack.Navigator>
  );
}
