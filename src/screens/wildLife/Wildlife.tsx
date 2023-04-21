import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ContactUs from '../../component/common/ContactUs';
import ExploreImageContainer from '../../component/common/ExploreImageContainer';
import Footer from '../../component/Footer';
import PopularPlaces from '../../component/common/PopularPlaces';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const Wildlife = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.wildlifeImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2838341042.png',
          }}
        />
        <View style={styles.opacity} />
        <Text style={styles.imageText}>WILDLIFE</Text>
      </View>
      <View style={styles.textBoxView}>
        <ScrollView>
          <Text style={styles.textBox}>
            The land of tigers and leopards. The home of Mowgli and the region
            with some of India's densest forests. That's the green heart of
            India - Madhya Pradesh.A forest-rich state, Madhya Pradesh is a
            haven for wildlife spotting and has been adding to its green cover.
            A survey by the Forest Survey of India says that the forest cover in
            Madhya Pradesh increased to 77482.49 sq km! During winter (October
            to February), Madhya Pradesh resuscitates its natural beauty, dotted
            with evergreen forests.
          </Text>
        </ScrollView>
      </View>
      <View>
        <PopularPlaces />
      </View>
      <View style={styles.explore}>
        <ExploreImageContainer />
      </View>
      <View>
        <ContactUs />
      </View>
      <View>
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wildlifeImage: {
    width: wp('100%'),
    height: hp('35%'),
    borderRadius: 1,
  },
  opacity: {
    position: 'absolute',
    backgroundColor: 'black',
    width: wp('100%'),
    height: hp('35%'),
    opacity: 0.3,
  },
  imageText: {
    color: 'lightgrey',
    fontSize: 50,
    fontWeight: '800',
    marginBottom: 7,
    position: 'absolute',
    opacity: 0.6,
  },
  textBoxView: {
    paddingHorizontal: 10,
    paddingTop: 25,
    // backgroundColor: 'skyblue',
    height: hp('33%'),
  },
  textBox: {
    color: 'black',
    fontSize: 15,
    letterSpacing: 2,
  },
  explore: {
    marginTop: 30,
  },
});
export default Wildlife;
