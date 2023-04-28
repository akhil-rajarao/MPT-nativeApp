import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../../app/hooks';

import {ScrollView} from 'react-native-gesture-handler';
import {getPageDataGo} from '../../screens/appSlice';
import {useNavigation} from '@react-navigation/native';
import {useScrollToTop} from '@react-navigation/native';

const ExploreImageContainer = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<any>();

  const ExploreBannerData = useAppSelector(state => state.dashboard.bannerData);
  const ExploresectionsData = useAppSelector(
    state => state.dashboard.sectionsData,
  );

  const exploreotherinterestsData = ExploresectionsData[1]?.contents;
  ExploresectionsData &&
    console.log(
      '===unexplored sideeeeeeeeeeee=====>',
      exploreotherinterestsData,
    );
  const ref = useRef(null);

  useScrollToTop(ref);

  useEffect(() => {
    dispatch(getPageDataGo(59789662));
  }, [dispatch]);
  return (
    <ScrollView ref={ref}>
      <View style={styles.interests}>
        <Text style={styles.headingText}>Explore Other Interests</Text>
        <View style={styles.exploreOther}>
          <FlatList
            data={exploreotherinterestsData}
            horizontal={false}
            renderItem={({item}) => (
              <View style={styles.exploreBox}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('ExploreInterest', {
                      content: item,
                    })
                  }>
                  <Image
                    style={styles.exploreOtherImage}
                    source={{
                      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
                    }}
                  />
                  <View style={styles.otherOpacity} />

                  <Text style={styles.otherText}>{item?.content_title}</Text>
                </Pressable>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ExploreImageContainer;
const styles = StyleSheet.create({
  interests: {
    width: wp('100%'),
    height: hp('230%'),
    backgroundColor: 'tan',
    // done
  },
  headingText: {
    fontSize: hp('4.5%'),
    color: 'darkred',
    paddingBottom: 8,
    fontFamily: 'YouthPower-X34qG',
    paddingLeft: 10,
    // done
  },
  exploreOther: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
    flexWrap: 'wrap',

    // done
  },
  exploreBox: {
    width: wp('93%'),
    height: hp('25%'),
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 10,
    // done
  },
  exploreOtherImage: {
    width: wp('93%'),
    height: hp('25%'),
    borderRadius: 10,
    // done
  },
  otherOpacity: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    // done
  },
  otherText: {
    fontSize: hp('3.2%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 80,
    left: 50,
    opacity: 0.5,
    // done
  },
});
