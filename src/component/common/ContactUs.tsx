import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import React from 'react';

const ContactUs = () => {
  return (
    <View style={styles.contact}>
      <Image
        style={styles.contactImage}
        source={require('../../assets/images/contact3.jpeg')}
      />
      <View style={styles.contactText}>
        <Text style={styles.contactHeading}>Contact Us</Text>
        <Text style={styles.contentSubText}>
          Tourist Helpline (Toll Free): 1800 233 7777
        </Text>
        <Text style={styles.contentSubText}>Timing: (10 AM to 6PM) </Text>
        <Text style={styles.contentSubText}>
          (Sunday holiday, Saturday and other holiday Half Day)
        </Text>
        <Text style={styles.contentSubText}>
          Email : mpthelpline@mpstdc.com
        </Text>
        <Image
          style={styles.Logo}
          source={{
            uri: 'https://mpstdc.com/assets/MPT%20logo.e77c5286.png',
          }}
        />
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  contact: {
    width: wp('100%'),
    height: hp('40%'),
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactImage: {
    height: hp('30%'),
    width: wp('100%'),
  },
  contactText: {
    position: 'absolute',
    // left: 50,
    // bottom: 200,
    // right: '10%',
    // height: '30%',
    alignItems: 'center',
  },
  contactHeading: {
    color: 'white',
    fontSize: hp('5%'),
    marginBottom: 35,
    fontFamily: 'YouthPower-X34qG',
  },
  contentSubText: {
    color: 'white',
    fontSize: hp('1.7%'),
  },
  Logo: {
    height: hp('5%'),
    width: wp('12%'),
    marginTop: 20,
  },
});
