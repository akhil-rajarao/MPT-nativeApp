import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeScreen from '../../screens/HomeScreen';
import Booking from '../../screens/booking/Booking';
import Explore from '../../screens/Explore';


const ExploreStack = createStackNavigator<any>();
export default function ExploreStackNavigator() {
    return (
        <ExploreStack.Navigator initialRouteName='Explore1'>
          <ExploreStack.Screen name="Explore1" component={Explore}/>
          {/* <HomeStack.Screen name="NavBar" component={NavBar} /> */}
          <ExploreStack.Screen name="Booking" component={Booking} />
        </ExploreStack.Navigator>
      );
}
