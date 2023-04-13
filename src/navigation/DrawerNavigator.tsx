import 'react-native-gesture-handler';

import Booking from '../screens/booking/Booking';
import CustomDrawerContent from '../CustomDrawerContent';
import Destination from '../screens/Destination';
import EventsPage from '../screens/eventspage/events';
import Explore from '../screens/Explore';
// import HomeScreen from '../screens/HomeScreen';
import HomeStackNavigator from './StackNavigator';
import Institutions from '../screens/institutions/institutions';
import NavBar from '../component/NavBar';
import React from 'react';
import TenderPage from '../screens/tenders/tenders';
// import StackNavigator from './StackNavigator';
import WelcomeScreen from '../screens/mice&facilities';
import WellnessPage from '../screens/wellnesspage/wellness';
import {createDrawerNavigator} from '@react-navigation/drawer';

// const HomeStack = createStackNavigator<any>();
// const HomeStackNavigator = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="HomeScreen1" component={HomeScreen} />
//       {/* <HomeStack.Screen name="NavBar" component={NavBar} /> */}
//       <HomeStack.Screen name="Booking" component={Booking} />
//     </HomeStack.Navigator>
//   );
// };

// const DrawerStack = createStackNavigator<any>();
// const DrawerStackNavigator = () => {
//   return (
//     <DrawerStack.Navigator>
//       <DrawerStack.Screen name="Destination1" component={Destination} />
//       {/* <HomeStack.Screen name="NavBar" component={NavBar} /> */}
//       <DrawerStack.Screen name="Booking" component={Booking} />
//     </DrawerStack.Navigator>
//   );
// };

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerActiveBackgroundColor: 'white',
      }}
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        options={{
          header: () => <NavBar />,
        }}
      />
      <Drawer.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          header: () => <NavBar />,
        }}
      />
      <Drawer.Screen
        name="Explore"
        component={Explore}
        options={{
          header: () => <NavBar />,
        }}
      />
      <Drawer.Screen
        name="Destination"
        component={Destination}
        options={{
          header: () => <NavBar />,
        }}
      />
      <Drawer.Screen
        name="Events"
        component={EventsPage}
        options={{
          header: () => <NavBar />,
        }}
      />
      <Drawer.Screen
        name="Institutions"
        component={Institutions}
        options={{
          header: () => <NavBar />,
        }}
      />
      <Drawer.Screen
        name="Wellness"
        component={WellnessPage}
        options={{
          header: () => <NavBar />,
        }}
      />

      <Drawer.Screen
        name="Tenders"
        component={TenderPage}
        options={{
          header: () => <NavBar />,
        }}
      />
      <Drawer.Screen
        name="Booking"
        component={Booking}
        options={{
          header: () => <NavBar />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
