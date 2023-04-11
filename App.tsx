// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import WelcomeScreen from './src/screens/mice&facilities';
// import Institutions from './src/screens/institutions/institutions';
 import CareerPage from './src/screens/careers/career';
// import TenderPage from './src/screens/tenders/tenders';
// import EventsPage from './src/screens/eventspage/events';
// import OffersPage from './src/screens/offersandDiscounts/offers';
// import MiceandFacilities from './src/screens/mice&facilities';
// import WellnessPage from './src/screens/wellnesspage/wellness';
// import CovidPage from './src/screens/covidGuidelines/covidPage';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaView>
//       <CovidPage />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import CustomDrawerContent from './src/CustomDrawerContent';

import NavBar from './src/NavBar';

const Drawer = createDrawerNavigator();

 function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator   screenOptions={{drawerPosition:'right'}} drawerContent={(props: any) => <CustomDrawerContent {...props} />} initialRouteName="Home">
        <Drawer.Screen  name="WelcomeScreen" component={WelcomeScreen} options={{
          header: () => <NavBar />
          
        }} />
        <Drawer.Screen  name="CareerPage" component={CareerPage} options={{
          header: () => <NavBar />
          
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;