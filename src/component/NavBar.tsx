import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//import Booking from '../screens/booking/Booking';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation<any>();
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <View style={styles.navContainer}>
      <Pressable onPress={() => navigation.navigate('HomeScreen1')}>
        <Image
          style={styles.image}
          source={{uri: 'https://mpstdc.com/assets/MPT%20logo.e77c5286.png'}}
        />
      </Pressable>
      <View style={styles.g2Logo}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://mpstdc.com/assets/G20%20theme%20and%20logo.3dd0b73a.png',
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
        <View style={styles.bookButton}>
          <Text style={styles.bookText}>BOOK A STAY</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text style={styles.diveText}>Dive In</Text>
      </TouchableOpacity> */}

      <View style={styles.diveIn}>
        <View style={{display: 'flex', flexDirection: 'row', top: 15}}>
          <Pressable
            onPress={() => {
              setShowDropDown(true);
            }}>
            <Text style={styles.diveText}>Dive In</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setShowDropDown(true);
            }}>
            <Icon name="caretdown" size={15} color="#fff" />
          </Pressable>
        </View>
        {showDropDown && (
          <View style={styles.dropbox}>
            <TouchableOpacity
              onPress={() => {
                setShowDropDown(false);
                navigation.navigate('Explore');
              }}>
              <Text style={styles.dropboxtext}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowDropDown(false);
                navigation.navigate('Destination');
              }}>
              <Text style={styles.dropboxtext}>Destination</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

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
  diveIn: {
    // display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // position: 'absolute',
  },
  dropboxtext: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  dropbox: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'white',
    // display: 'flex',
    // top: 30,
    // top: 21,
    // justifyContent: 'space-between',

    width: wp('30%'),
    height: hp('7%'),
    // zIndex: 1,
    // elevation: 2,
  },
});
