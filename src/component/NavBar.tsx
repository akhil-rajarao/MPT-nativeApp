import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Booking from '../screens/booking/Booking';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.navContainer}>
      <Image
        style={styles.image}
        source={require('../assets/images/MPTlogo.png')}
      />
      <View style={styles.g2Logo}>
        <Image
          style={styles.image}
          source={require('../assets/images/G20theme.png')}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.bookButton}>
          <Text style={styles.bookText}>BOOK A STAY</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Booking)}>
        <Text style={styles.diveText}>Dive In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="bars" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
const styles = StyleSheet.create({
  navContainer: {
    width: wp('100%'),
    height: hp('6%'),
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.8,
    paddingHorizontal: 10,
  },
  image: {
    height: hp('4%'),
    width: wp('10%'),
  },
  bookButton: {
    height: hp('3.5%'),
    width: wp('17%'),
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 90,
  },
  g2Logo: {
    height: hp('4.2%'),
    width: wp('10%'),
    backgroundColor: 'white',
    borderRadius: 5,
  },
  bookText: {
    fontSize: 10,
    color: 'white',
  },
  diveText: {
    fontSize: 15,
    color: 'white',
  },
});