import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, Text} from 'react-native';
import {Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.container}>
        <View style={styles.SquareShapeView1} />
        <View style={styles.SquareShapeView2} />
        <View style={styles.SquareShapeView3} />
      </View>

      <View style={styles.container2}>
        <View style={styles.SquareShapeView1} />
        <View style={styles.SquareShapeView2} />
        <View style={styles.SquareShapeView3} />
      </View>

      <View style={styles.container3}>
        <View style={styles.SquareShapeView1} />
        <View style={styles.SquareShapeView2} />
        <View style={styles.SquareShapeView3} />
      </View>

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
    position: 'relative',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    top: 10,
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,

    top: 300,
  },

  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,

    top: 500,
    left: 100,
  },

  SquareShapeView3: {
    width: 80,
    height: 80,
    backgroundColor: '#ffffff',
    opacity: 0.2,
    zIndex: 300,
  },

  SquareShapeView1: {
    width: 80,
    height: 80,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    left: 20,
    top: 30,
    opacity: 0.2,
    zIndex: 300,
  },

  SquareShapeView2: {
    width: 80,
    height: 80,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    left: 0,
    top: 0,
    opacity: 0.2,
    zIndex: 300,
  },
  SquareShapeView3: {
    width: 80,
    height: 80,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    left: 45,
    top: -150,
    opacity: 0.3,
    zIndex: 300,
  },

  RectangleShapeView: {
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    backgroundColor: '#FFC107',
  },

  prop: {
    height: 50,
    width: 50,
    background: '#ffffff',
    position: 'absolute',
    opacity: 1,
    left: '10%',
    top: '0%',
    zIndex: 1300,
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
