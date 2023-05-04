import {
  Image,
  Linking,
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
        <Pressable onPress={() => Linking.openURL('https://www.g20.org/en/')}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://mpstdc.com/assets/G20%20theme%20and%20logo.3dd0b73a.png',
            }}
          />
        </Pressable>
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            top: 20,
          }}>
          <Pressable
            onPress={() => {
              setShowDropDown(!showDropDown);
            }}>
            <Text style={styles.diveText}>Dive In</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setShowDropDown(!showDropDown);
            }}>
            <Icon name="caretdown" size={10} color="#fff" />
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
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // alignSelf: 'center',
    // position: 'absolute',
  },
  dropboxtext: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 8,
  },
  dropbox: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    backgroundColor: 'white',
    top: 50,
    width: 100,
    height: 80,
  },
});
