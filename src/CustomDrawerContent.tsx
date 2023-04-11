import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


function CustomDrawerContent(props: DrawerContentComponentProps) {

    return (
      <DrawerContentScrollView style={{backgroundColor:'darkred'}} {...props}>
        
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );

  
}

export default CustomDrawerContent;