import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import React from 'react';

// const images = [
//     require('../assets/images/img1.jpeg'),
//     require('../assets/images/img2.jpeg'),
//     require('../assets/images/img3.jpeg'),
//     require('../assets/images/img4.jpeg')
//   ];

const Trial = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <Text>Hello</Text>
        {/* <View style={{ flexDirection: 'row', height:hp('25%')}}>
        {images.map((image, index) => (
          <Image key={index} style={styles.image} source={image} />
        ))}
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor:"red",
    height: hp('20%'),
  },

  image: {
    width: wp('95%'),
    height: hp('25%'),
    marginRight: 10,
    // resizeMode: 'cover',
    resizeMode: 'stretch',
    // aspectRatio:1,
  },
});

export default Trial;
