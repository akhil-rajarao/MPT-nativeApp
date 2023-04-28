import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../../app/hooks';

import {Pressable} from 'react-native';
import {getPageDataGo} from '../../screens/appSlice';
import {useNavigation} from '@react-navigation/native';

const PopularPlaces = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const sectionsData = useAppSelector(state => state.dashboard.sectionsData);
  const popularPlaces = sectionsData[4]?.contents;
  useEffect(() => {
    dispatch(getPageDataGo(80373489));
  }, [dispatch]);

  return (
    <View style={styles.popular}>
      <Text style={styles.packagesHeading}>Popular Places</Text>
      <View style={styles.imageTop}>
        {popularPlaces && (
          <FlatList
            horizontal={true}
            data={popularPlaces}
            renderItem={({item}) => (
              <View>
                <Pressable
                  onPress={() =>
                    navigation.navigate('Cities', {
                      city_id: `${item?.city_id}`,
                    })
                  }>
                  <Image
                    style={styles.packagesImage}
                    source={{
                      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
                    }}
                  />
                </Pressable>
                <View style={styles.opacityPlace}></View>
                <Text style={styles.PlaceText}> {item?.content_title}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default PopularPlaces;
const styles = StyleSheet.create({
  popular: {
    width: wp('100%'),
    height: hp('50%'),
    backgroundColor: '#fff2da',
    marginTop: 30,
  },
  packagesHeading: {
    fontSize: hp('4.5%'),
    color: 'darkred',
    marginTop: 2,
    paddingBottom: 8,
    fontFamily: 'YouthPower-X34qG',
    marginLeft: 10,
  },
  imageTop: {
    alignItems: 'center',
    margin: 10,
  },
  packagesImage: {
    width: wp('95%'),
    height: hp('40'),
    marginHorizontal: 8,
  },
  opacityPlace: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 250,
    bottom: 0,
    left: 0,
    right: 215,
    opacity: 0.3,
  },
  PlaceText: {
    fontSize: hp('3.0%'),
    color: '#ffffff',
    position: 'absolute',
    top: 250,
    left: 6,
    fontFamily: 'YouthPower-X34qG',
  },
});
