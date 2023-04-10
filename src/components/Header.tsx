import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {Text} from 'react-native-elements';

const Header = () => {
  return (
    <View style={styles.navContainer}>
      <Image style={styles.image} source={require('../assets/mptLogo.png')} />
      <View style={styles.g2Logo}>
        <Image
          style={styles.image}
          source={require('../assets/G20theme.png')}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.bookButton}>
          <Text style={styles.bookText}>BOOK A STAY</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.diveText}>Dive In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="bars" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
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
