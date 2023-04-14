import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import React from 'react';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    text: '#ffffff',
  },
};
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
