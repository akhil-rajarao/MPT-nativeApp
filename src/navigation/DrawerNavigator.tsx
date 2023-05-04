import 'react-native-gesture-handler';

import Career from '../screens/drawerPages/careers/Career';
import Contact from '../screens/drawerPages/contact/Contact';
import Covid from '../screens/drawerPages/covid-19/Covid';
import CustomDrawerContent from '../CustomDrawerContent';
import DestinationStackNavigator from './StackNavigation/DestinationStackNavigation';
import Events from '../screens/drawerPages/events/Events';
import ExploreStackNavigator from './StackNavigation/ExploreStackNavigator';
import HomeStackNavigator from './StackNavigation/HomeStackNavigator';
import Institutions from '../screens/drawerPages/institutions/Institutions';
import Mice from '../screens/drawerPages/mice&facilities/Mice';
import NavBar from '../component/NavBar';
import Offers from '../screens/drawerPages/offersandDiscounts/offers';
import Order from '../screens/drawerPages/orders&circulars/Order';
import React from 'react';
import Tender from '../screens/drawerPages/tenders/Tenders';
import Wellness from '../screens/drawerPages/wellnesspage/wellness';
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
      <Drawer.Screen name="HomeScreen" component={HomeStackNavigator} />
      {/* <Drawer.Screen name="Explore" component={ExploreStackNavigator} /> */}
      {/* <Drawer.Screen name="Destination" component={DestinationStackNavigator} /> */}
      <Drawer.Screen name="WELLNESS TOURISM" component={Wellness} />
      <Drawer.Screen name="OFFER $ DISCOUNT" component={Offers} />
      <Drawer.Screen name="MICE & OTHER FACILITIES" component={Mice} />
      <Drawer.Screen name="Institutions" component={Institutions} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="TENDERS" component={Tender} />
      <Drawer.Screen name="ORDERS & CIRCULARS" component={Order} />
      <Drawer.Screen name="COVID-19 PROTOCOLS" component={Covid} />

      <Drawer.Screen name="CAREERS" component={Career} />
      <Drawer.Screen name="CONTACT" component={Contact} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
