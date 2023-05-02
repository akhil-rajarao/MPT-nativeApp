import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useIsFocused, useRoute} from '@react-navigation/native';

import ContactUs from './ContactUs';
import ExploreImageContainer from './ExploreImageContainer';
import Footer from '../Footer';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const KnowMoreUE = () => {
  const route = useRoute();

  const {content}: any = route.params;

  // const isFocused = useIsFocused();

  console.log(content, 'content=========>>>>');
  return (
    <ScrollView>
      <View style={styles.container}>
        {content && (
          <Image
            style={styles.wildlifeImage}
            source={{
              uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${content?.content_images}`,
            }}
          />
        )}
        <View style={styles.opacity} />
        <Text style={styles.imageText}>{content?.content_title}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{content?.description.value0}</Text>
      </View>
      <View>
        <ExploreImageContainer />
      </View>
      <View>
        <ContactUs />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default KnowMoreUE;

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
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 7,
    position: 'absolute',
    opacity: 0.6,
  },
  textContainer: {
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 15,
    letterSpacing: 2,
  },
  footer: {
    marginLeft: 10,
  },
});
