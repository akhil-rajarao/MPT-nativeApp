import HomeScreen from './src/screens/HomeScreen';
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
