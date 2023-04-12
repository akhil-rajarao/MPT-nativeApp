import 'react-native-gesture-handler';

import CustomDrawerContent from '../CustomDrawerContent';
import Destination from '../screens/Destination';
import EventsPage from '../screens/eventspage/events';
import Explore from '../screens/Explore';
import HomeScreen from '../screens/HomeScreen';
import Institutions from '../screens/institutions/institutions';
import NavBar from '../component/NavBar';
import React from 'react';
import TenderPage from '../screens/tenders/tenders';
// import StackNavigator from './StackNavigator';
import WelcomeScreen from '../screens/mice&facilities';
import WellnessPage from '../screens/wellnesspage/wellness';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
        component={HomeScreen}
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
