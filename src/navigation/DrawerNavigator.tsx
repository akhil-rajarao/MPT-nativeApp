import 'react-native-gesture-handler';
import CustomDrawerContent from '../CustomDrawerContent';
import NavBar from '../component/NavBar';
import React, { useRef } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackNavigator from './StackNavigation/HomeStackNavigator';
import ExploreStackNavigator from './StackNavigation/ExploreStackNavigator';
import DestinationStackNavigator from './StackNavigation/DestinationStackNavigation';
import WelcomeScreenStackNavigator from './StackNavigation/WelcomeScreenStackNavigator';
import EventsPageNavigator from './StackNavigation/EventsPageNavigator';
import InstitutionsNavigator from './StackNavigation/InstitutionsNavigator';
import WellnessPageNavigaton from './StackNavigation/WellnessPageNavigaton';
import TenderPageNavigation from './StackNavigation/TenderPageNavigation';
import WellnessPage from '../screens/wellnesspage/wellness';
import Destination from '../screens/Destination';



const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<any>();
  // const drawerRef = useRef();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerActiveBackgroundColor: 'white',
        header: () => <NavBar />,
      }}
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}
      initialRouteName="HomeScreen">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        // options={{
        //   header: () => <NavBar />,
        // }}
      />
      <Drawer.Screen
        name="WelcomeScreen"
        component={WelcomeScreenStackNavigator}
      />
      <Drawer.Screen
        name="Explore"
        component={ExploreStackNavigator}
      />
      <Drawer.Screen
        name="Destination"
        component={DestinationStackNavigator}
      />
      <Drawer.Screen
        name="Events"
        component={EventsPageNavigator}
      />
      <Drawer.Screen
        name="Institutions"
        component={InstitutionsNavigator}
      />
      <Drawer.Screen
        name="Wellness"
        component={WellnessPageNavigaton}
      />

      <Drawer.Screen
        name="Tenders"
        component={TenderPageNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
