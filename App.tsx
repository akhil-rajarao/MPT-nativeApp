import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import {Provider} from 'react-redux';
import React from 'react';
import {store} from './src/app/store';

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
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
