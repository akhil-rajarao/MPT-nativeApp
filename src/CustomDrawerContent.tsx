import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StyleSheet, View} from 'react-native';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView style={styles.drawer} {...props}>
        <View style={styles.items}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawerContent;
const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'darkred',
    paddingLeft: 100,
  },
  drawerContainer: {
    flex: 1,
    //flexDirection:'row'

    justifyContent: 'flex-end',
  },
  items: {
    flex: 1,
    color: 'darkred',
  },
});
