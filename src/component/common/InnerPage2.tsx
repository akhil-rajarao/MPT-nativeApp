import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../../app/hooks';
import {useIsFocused, useRoute} from '@react-navigation/native';

import ContactUs from './ContactUs';
import ExploreImageContainer from './ExploreImageContainer';
// import ExploreInterest from './ExploreInterest';
import Footer from '../Footer';
import {getInnerPageContentById} from '../../screens/appSlice';

const InnerPages = () => {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  const innerPageData = useAppSelector(
    state => state?.dashboard?.innerPageData,
  );

  const route = useRoute();

  const {id}: any = route.params;

  // if(id===93187332)
  let innerPageSections =
    id === 93187332
      ? innerPageData?.sections[7]?.contents
      : id === 24947658
      ? innerPageData?.sections[3]?.contents
      : id === 67870362
      ? innerPageData?.sections[5]?.contents
      : id === 17779663
      ? innerPageData?.sections[0]?.contents
      : id === 32157115
      ? innerPageData?.sections[1]?.contents
      : id === 59789662
      ? innerPageData?.sections[6]?.contents
      : id === 45523481
      ? innerPageData?.sections[8]?.contents
      : id === 43105675
      ? innerPageData?.sections[3]?.contents
      : id === 11771867
      ? innerPageData?.sections[3]?.contents
      : id === 29788625
      ? innerPageData?.sections[3]?.contents
      : undefined;

  console.log('==========>innerPageDataSEctions', innerPageSections);

  useEffect(() => {
    dispatch(getInnerPageContentById(id));
  }, [dispatch, id, isFocused]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {innerPageData && (
          <Image
            style={styles.wildlifeImage}
            source={{
              uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${innerPageData?.content_images}`,
            }}
          />
        )}
        <View style={styles.opacity} />
        <Text style={styles.imageText}>{innerPageData?.content_title}</Text>
      </View>
      <View>
        <Text style={{color: 'black', marginHorizontal: 10, marginTop: 20}}>
          {innerPageData?.description?.value0}
        </Text>
      </View>
      <View style={styles.imageTop}>
        <Text style={styles.headingText}>Popular Places</Text>
        {innerPageSections && (
          <FlatList
            showsVerticalScrollIndicator={false}
            horizontal={true}
            data={innerPageSections}
            renderItem={({item}) => (
              <View style={styles.imagePackage}>
                <Image
                  style={styles.packagesImage}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images}`,
                  }}
                />

                {/* <View style={styles.opacityPlace}></View>
                  <Text style={styles.PlaceText}> {item?.content_title}</Text> */}
                <View>
                  <Text style={{marginTop: 10, fontSize: 18, color: 'darkred'}}>
                    sanchi
                  </Text>
                  <Text style={{color: 'black', marginTop: 30}}>
                    {item?.description?.value0}
                  </Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
      <View style={{marginTop: 50}}>
        <ExploreImageContainer />
      </View>
      <ContactUs />
      <Footer />
    </ScrollView>
  );
};

export default InnerPages;

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
  popularView: {
    width: wp('100%'),
    height: hp('38%'),
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: hp('3.5%'),
    color: 'darkred',
    fontStyle: 'italic',
    fontWeight: '800',
    paddingBottom: 8,
    alignSelf: 'flex-start',
    paddingLeft: 5,
  },

  read: {
    color: 'black',
    fontSize: hp('1.8%'),
    paddingTop: 2,
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
  imagePackage: {
    paddingHorizontal: 10,
    backgroundColor: '#DEB887',
    paddingTop: 40,
    paddingBottom: 10,
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
    height: hp('113%'),
    backgroundColor: 'tan',
    marginTop: 30,
  },
  exploreBox: {
    width: wp('48%'),
    height: hp('25%'),
    backgroundColor: 'black',
    borderRadius: 10,
    // done
  },
  exploreOther: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
    // done
  },
  exploreOtherImage: {
    width: wp('48%'),
    height: hp('25%'),
    // borderRadius: 10,
    // done
  },
  otherOpacity: {
    backgroundColor: 'white',
    alignItems: 'center',
    position: 'absolute',
    top: 160,
    bottom: 0,
    left: 0,
    right: 70,
    // opacity: 0.4,

    // done
  },
  otherText: {
    fontSize: hp('2.1%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 102,
    left: 10,
    fontWeight: '500',
    fontStyle: 'italic',
    // opacity: 0.5,
    // done
  },
  storyContainer: {
    width: wp('100%'),
    height: hp('80%'),
    // backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImage: {
    width: wp('96%'),
    height: hp('30%'),
  },
  textBox: {
    width: wp('96%'),
    height: hp('35%'),
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBox: {
    width: wp('96%'),
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyText: {
    color: 'black',
    marginHorizontal: 110,

    fontStyle: 'italic',
  },

  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor:"red",
    height: hp('20%'),
    marginTop: 110,
  },

  image1: {
    width: wp('95%'),
    height: hp('25%'),
    marginRight: 10,

    // resizeMode: 'cover',
    resizeMode: 'stretch',
    // aspectRatio:1
    // borderRadius:10
  },
  opacityPlace: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 220,
    bottom: 10,
    left: 10,
    right: 210,
    opacity: 0.6,
    height: 50,
  },
  PlaceText: {
    fontSize: hp('3.0%'),
    color: '#ffffff',
    position: 'absolute',
    top: 230,
    left: 10,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  imageTop: {
    alignItems: 'center',
    marginTop: 70,
  },
  packagesImage: {
    width: wp('95%'),
    height: hp('35%'),
  },
});
