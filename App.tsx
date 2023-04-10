import Destination from './src/screens/destination/Destination';
import Explore from './src/screens/explore/Explore';
// import Header from './src/components/Header';
import HomeScreen from './src/screens/home/HomeScreen';
// import LoginScreen from './src/screens/Login';
// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

//import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

function App() {
  return (
    <View>
      <HomeScreen />
      {/* <Explore /> */}
      {/* <Destination /> */}
      {/* <Header /> */}
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="LoginScreen" component={LoginScreen} />
    //     <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
export default App;
