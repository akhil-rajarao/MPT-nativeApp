import 'react-native-gesture-handler';

import CustomDrawerContent from '../CustomDrawerContent';
// import Destination from '../screens/Destination';
import DestinationStackNavigator from './StackNavigation/DestinationStackNavigation';
import EventsPageNavigator from './StackNavigation/EventsPageNavigator';
import ExploreStackNavigator from './StackNavigation/ExploreStackNavigator';
import HomeStackNavigator from './StackNavigation/HomeStackNavigator';
import InstitutionsNavigator from './StackNavigation/InstitutionsNavigator';
import NavBar from '../component/NavBar';
import React from 'react';
import TenderPageNavigation from './StackNavigation/TenderPageNavigation';
import WelcomeScreenStackNavigator from './StackNavigation/WelcomeScreenStackNavigator';
// import WellnessPage from '../screens/wellnesspage/wellness';
import WellnessPageNavigaton from './StackNavigation/WellnessPageNavigaton';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
      <Drawer.Screen name="Explore" component={ExploreStackNavigator} />
      <Drawer.Screen name="Destination" component={DestinationStackNavigator} />
      <Drawer.Screen name="Events" component={EventsPageNavigator} />
      <Drawer.Screen name="Institutions" component={InstitutionsNavigator} />
      <Drawer.Screen name="Wellness" component={WellnessPageNavigaton} />

      <Drawer.Screen name="Tenders" component={TenderPageNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
