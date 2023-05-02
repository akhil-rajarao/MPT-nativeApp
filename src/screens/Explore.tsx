import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import Footer from '../../components/footer';/
// import Header from '../../components/Header';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../app/hooks';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import ContactUs from '../component/common/ContactUs';
import ExploreImageContainer from '../component/common/ExploreImageContainer';
import Footer from '../component/Footer';
import {getPageDataGo} from './appSlice';

const Explore = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  const ExploreBannerData = useAppSelector(state => state.dashboard.bannerData);
  const ExploresectionsData = useAppSelector(
    state => state.dashboard.sectionsData,
  );
  let experienceData = ExploresectionsData?.filter(
    (item, index) =>
      item.experience === true && item.section_title != 'Explore',
  );

  const attractionsData = ExploresectionsData[0]?.contents;

  const unexploredofMP = ExploresectionsData[6]?.contents;
  // const exploreData = ExploresectionsData[1].contents;
  // const unexploredData = ExploresectionsData[6].contents;
  // const exploreotherinterestsData = ExploresectionsData[1]?.contents;
  // ExploresectionsData &&

  console.log('===unexploredofMP side=====>', unexploredofMP);

  useEffect(() => {
    dispatch(getPageDataGo(59789662));
  }, [dispatch, isFocused]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageSlice}>
          {ExploreBannerData && (
            <FlatList
              data={ExploreBannerData}
              horizontal={true}
              renderItem={({item}) => (
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.banner_image}`,
                  }}
                />
              )}
            />
          )}
          <View style={styles.text}>
            <Text style={styles.heading1}>EXPLORE</Text>
          </View>
        </View>
      </View>
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <View style={styles.attractionView}>
        <Text style={styles.headingText}>Attractions</Text>
        {attractionsData && (
          <FlatList
            data={attractionsData}
            horizontal={true}
            renderItem={({item}) => (
              <View>
                <Pressable
                  onPress={() =>
                    navigation.navigate('InnerPages', {
                      id: item?.id,
                    })
                  }>
                  <Image
                    style={styles.exploreImage}
                    source={{
                      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
                    }}
                  />
                </Pressable>
                <View style={styles.exploreOpacity}></View>
                <Text style={styles.exploreText}>{item?.content_title}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <View style={styles.bannerHeading}>
        <Text style={styles.heartText}>Explore</Text>
      </View>
      <View style={styles.banners}>
        <View>
          <Pressable
            onPress={() =>
              navigation.navigate('InnerPages', {
                id: experienceData[0]?.contents[0]?.id,
              })
            }>
            <Image
              style={styles.wildlife}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${experienceData[0]?.contents[0]?.content_images[0]}`,
              }}
            />
          </Pressable>
          <View style={styles.opacity} />
          <Text style={styles.bannerText}>Know more</Text>
        </View>
        <View style={styles.bannersRow}>
          <View>
            <Pressable
              onPress={() =>
                navigation.navigate('InnerPages', {
                  id: experienceData[0]?.contents[1]?.id,
                })
              }>
              <Image
                style={styles.adventure}
                source={{
                  uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${experienceData[0]?.contents[1]?.content_images[0]}`,
                }}
              />
            </Pressable>
            <View style={styles.opacity2} />
            <Text style={styles.bannerText2}>Know more</Text>
          </View>
          <View>
            <Pressable
              onPress={() =>
                navigation.navigate('InnerPages', {
                  id: experienceData[0]?.contents[2]?.id,
                })
              }>
              <Image
                style={styles.food}
                source={{
                  uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${experienceData[0]?.contents[2]?.content_images[0]}`,
                }}
              />
            </Pressable>
            <View style={styles.opacity2} />

            <Text style={styles.bannerText2}>Know more</Text>
          </View>
        </View>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <View style={styles.unexploredView}>
        <Text style={styles.unexplored}>Unexplored side of MP</Text>
        <View>
          {unexploredofMP && (
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={unexploredofMP}
              renderItem={({item}) => (
                <View>
                  <Image
                    style={styles.exploreImage}
                    source={{
                      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
                    }}
                  />
                  <Text style={styles.relaxText}>{item.content_title}</Text>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('ExploreInterest', {
                        content: item,
                      })
                    }>
                    <Text style={styles.read}>Read more -- </Text>
                  </Pressable>
                </View>
              )}
            />
          )}
        </View>
      </View>

      {/* <View style={styles.unexploredView}>
        <Text style={styles.headingText}>Unexplored side of MP</Text>
        <FlatList
          data={attractionsData}
          horizontal={true}
          renderItem={({item}) => (
            <View>
              <Image
                style={styles.exploreImage}
                source={{
                  uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
                }}
              />
              <Text style={styles.lifestyle}>{item?.content_title}</Text>
              <Text style={styles.read}>Read more -- </Text>
            </View>
          )}
        />
      </View> */}

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <View>
        <ExploreImageContainer />
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View>
        <ContactUs />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ScrollView>
  );
};
export default Explore;

const styles = StyleSheet.create({
  navbar: {},
  container: {
    flex: 1,
    // done
  },
  image: {
    height: hp('40%'),
    width: wp('25%'),
    position: 'relative',
    // done
  },
  imageSlice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // done
  },
  text: {
    position: 'absolute',
    // done
  },

  heading1: {
    color: 'lightgrey',
    fontFamily: 'YouthPower-X34qG',
    marginBottom: 7,
    fontSize: hp('5%'),
    // done
  },

  bannerHeading: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    // done
  },

  heartText: {
    fontSize: hp('4.5%'),
    color: 'darkred',
    paddingBottom: 8,
    fontFamily: 'YouthPower-X34qG',
    paddingLeft: 10,
    // done
  },
  banners: {
    width: wp('100%'),
    height: hp('65%'),
    // justifyContent: 'center',
    alignItems: 'center',

    // done
  },
  wildlife: {
    width: wp('98%'),
    height: hp('27%'),
    // done
  },
  bannersRow: {
    display: 'flex',
    flexDirection: 'row',
    width: wp('98%'),
    // height: hp('30%'),
    justifyContent: 'space-around',
    paddingVertical: 10,
    // done
  },
  adventure: {
    width: wp('47%'),
    height: hp('35%'),
    // done
  },
  food: {
    width: wp('47%'),
    height: hp('35%'),
  },
  unexploredView: {
    width: wp('100%'),
    height: hp('45%'),
    marginTop: 50,
    // done
  },

  lifestyle: {
    color: 'darkred',
    fontSize: hp('2.0%'),
    fontWeight: '800',
    paddingTop: 5,
    marginLeft: 10,
    // done
  },
  exploreImage: {
    width: wp('90%'),
    height: 196,
    // borderRadius: 10,
    marginHorizontal: 5,
    position: 'relative',
    // done
  },
  exploreOpacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 170,
    bottom: 15,
    left: 0,
    right: 0,
    opacity: 0.3,
    marginHorizontal: 5,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,

    // done
  },
  exploreText: {
    fontSize: hp('2%'),
    color: '#ffffff',
    position: 'absolute',
    bottom: 15,
    top: 175,
    fontWeight: '700',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    zIndex: 200,

    // done
  },
  opacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 165,
    bottom: 0,
    left: 250,
    right: 0,
    opacity: 0.5,
    // done
  },
  opacity2: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 220,
    bottom: 0,
    left: 80,
    right: 0,
    opacity: 0.3,
    // done
  },
  bannerText: {
    fontSize: hp('2%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 170,
    left: 260,
    fontStyle: 'italic',
    fontWeight: '600',
    textDecorationLine: 'underline',
    // done
  },
  bannerText2: {
    fontSize: hp('2%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 220,
    left: 90,
    fontStyle: 'italic',
    fontWeight: '600',
    textDecorationLine: 'underline',
    // done
  },
  attractionView: {
    width: wp('100%'),
    height: hp('35%'),
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
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

  read: {
    color: 'black',
    fontSize: hp('1.8%'),
    paddingTop: 2,
    marginLeft: 10,
    // done
  },

  contact: {
    width: wp('100%'),
    height: hp('40%'),
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // done
  },
  contactHeading: {
    color: 'white',
    fontSize: hp('4%'),
    marginBottom: 35,
    fontStyle: 'italic',
    fontWeight: '600',
    // done
  },
  contactImage: {
    height: hp('30%'),
    width: wp('100%'),
    // done
  },
  contactText: {
    position: 'absolute',

    alignItems: 'center',
    // done
  },
  contentSubText: {
    color: 'white',
    fontSize: hp('1.7%'),
    // done
  },
  interests: {
    width: wp('100%'),
    height: hp('230%'),
    backgroundColor: 'tan',
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
  exploreOther: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
    flexWrap: 'wrap',

    // done
  },
  exploreOtherImage: {
    width: wp('93%'),
    height: hp('25%'),
    borderRadius: 10,
    // done
  },
  otherOpacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 100,
    bottom: 0,
    left: 80,
    right: 0,
    opacity: 0.5,
    // done
  },
  otherText: {
    fontSize: hp('2.2%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 80,
    left: 50,
    opacity: 0.5,
    // done
  },

  footer: {
    width: wp('100%'),
    height: hp('80%'),
    paddingLeft: 10,
  },
  unexplored: {
    fontSize: hp('4.5%'),
    color: 'darkred',

    paddingBottom: 8,
    fontFamily: 'YouthPower-X34qG',
    paddingLeft: 10,
  },

  relaxText: {
    color: 'darkred',
    fontSize: hp('2.0%'),
    fontWeight: '800',
    paddingTop: 5,
    marginLeft: 10,
  },
});
