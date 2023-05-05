

import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../../app/hooks';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';

import ContactUs from '../../component/common/ContactUs';
import Footer from '../../component/Footer';
// import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {getDestinationData} from '../appSlice';
const Cities = () => {

  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const isFocused = useIsFocused();

  const {city_id}: any = route.params;
  const destinationData = useAppSelector(
    state => state.dashboard.destinationData,
  );


  const destDataBanner = destinationData?.banners;
  const destSection = destinationData?.section?.contents;
  const dataAccommodation = destinationData?.properties;

 
  const amenitiesObj: any = Object.freeze({
    1: 'Dinner',
    2: 'A/C Rooms',
    3: 'BAR Facilities',
    4: 'WiFi Facilities',
    5: 'Conference Room',
    6: 'Transport',
    7: 'Gym Facilities',
    8: 'Parking facilities',
    9: 'Pool facilities',
    10: 'Kerala Ayurvedic Panchkarma',
  });

  useEffect(() => {
    dispatch(getDestinationData(city_id));
  }, [city_id, dispatch, isFocused]);

  return (
   <FlatList
    data = {[{key:'outer'}]}
    renderItem={() =>(
      <><View style={styles.container}>
        {destDataBanner && (
          <Image
            style={styles.wildlifeImage}
            source={{
              uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${destDataBanner[0]?.banner_image}`,
            }} />
        )}
        <View style={styles.opacity} />
        <Text style={styles.imageText}>{destDataBanner[0]?.banner_title}</Text>
      </View><View style={styles.AccommodationView}>
          <Text style={styles.packagesHeading}>Accommodation</Text>
          {dataAccommodation && (
            <FlatList
              horizontal={true}
              data={dataAccommodation}
              renderItem={({ item }) => (
                <View style={styles.HotelBox}>
                  {item.property_image && (
                    <Image
                      style={styles.hotelImage}
                      source={{
                        uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.property_image[0]}`,
                      }} />
                  )}
                  <View style={styles.boxText}>
                    <Text style={styles.Residency}>{item?.property_type}</Text>

                    <Text style={styles.mptText}>{item?.property_name}</Text>

                    <View style={styles.stars}>
                      <View style={{ marginRight: 5 }}>
                        <Entypo name="tripadvisor" size={15} color="green" />
                      </View>
                      {Array.from({ length: 5 }).map((_item, index) => item?.rating >= index + 1 ? (
                        <Icon
                          key={index}
                          name="star"
                          size={15}
                          color="goldenrod" />
                      ) : (
                        <Icon
                          key={index}
                          name="star-o"
                          size={15}
                          color="black" />
                      )
                      )}
                    </View>
                    {/* ??????????????????????/ */}
                    <View style={styles.dateNew}>
                      {item &&
                        item?.ammenities &&
                        item?.ammenities?.map((number: number) => {
                          return (
                            <View
                              // eslint-disable-next-line react-native/no-inline-styles
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                              }}>
                              <Text
                                style={{ color: 'black', flexDirection: 'row' }}>
                                - {amenitiesObj[Number(number)]}
                              </Text>
                            </View>
                          );
                        })}
                    </View>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('AccommodationView', {
                        content: item,
                      })}>
                      <View style={styles.viewButton}>
                        <Text style={styles.viewText}>VIEW</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.bookButton}>
                      <TouchableOpacity
                        onPress={() => Linking.openURL(`${item.booking_url}`)}>
                        <Text style={styles.bookText}>BOOK NOW</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )} />
          )}
        </View><View style={styles.cityTextView}>
          {/* <Text>{destDataBanner[0].description}</Text> */}
          {/* <HTMLView value={destDataBanner[0].description} stylesheet={styles} /> */}
        </View><View style={styles.packages}>
          <Text style={styles.packagesHeading}>Places To See ...</Text>
          {destSection && (
            <FlatList
              horizontal={true}
              data={destSection}
              renderItem={({ item }) => (
                <View style={styles.imageTop}>
                  <Image
                    style={styles.packagesImage}
                    source={{
                      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images}`,
                    }} />
                  <View style={styles.packagesTitleView}>
                    <Text style={styles.packagesTitle}>
                      {item?.content_title}
                    </Text>
                  </View>
                  <View style={styles.packagesDescription}>
                    <Text style={{ color: 'black', letterSpacing: 2, fontSize: 18 }}>
                      {item?.description?.value0}
                    </Text>
                  </View>
                </View>
              )} />
          )}
        </View><View>
          <ContactUs />
        </View><View style={styles.footer}>
          <Footer />
        </View></>
    )}
   />
  );
};

export default Cities;

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
  packages: {
    width: wp('100%'),
    height: hp('80%'),
    backgroundColor: 'lightpink',
    opacity: 0.8,
    marginTop: 50,
  },
  packagesHeading: {
    fontSize: hp('4.5%'),
    color: 'darkred',
    // marginTop: 2,
    paddingBottom: 8,
    fontFamily: 'YouthPower-X34qG',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
  packagesTitle: {
    fontSize: hp('4.5%'),
    color: 'darkred',
    // marginTop: 2,
    paddingBottom: 8,
    fontFamily: 'YouthPower-X34qG',
    // alignSelf: '',
  },

  packagesTitleView: {
    alignSelf: 'flex-start',
    marginLeft: 8,
    marginTop: 8,
  },
  imageTop: {
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  packagesImage: {
    width: wp('95%'),
    height: hp('40'),
    // marginHorizontal: 8,
    alignSelf: 'center',
  },
  cityTextView: {
    paddingHorizontal: 10,
  },
  p: {
    color: 'black',
    fontSize: 16,
    // paddingBottom: 20,
    letterSpacing: 1,
  },
  h2: {
    color: 'darkred',
    fontSize: 20,
    fontWeight: '800',
  },
  h1: {
    color: 'darkred',
    // fontFamily: 'YouthPower-X34qG',
    fontSize: 23,
    fontWeight: 'bold',
  },
  li: {
    color: 'black',
    fontSize: 16,
  },
  packagesDescription: {
    width: wp('95%'),
    height: hp('40'),
    marginLeft: 9,
    marginTop: 10,
  },
  AccommodationView: {
    width: wp('100%'),
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: hp('3.5%'),
    color: 'darkred',
    fontStyle: 'italic',
    fontWeight: '800',
    // paddingBottom: 8,
    alignSelf: 'flex-start',
    paddingLeft: 5,
  },
  HotelBox: {
    height: hp('50%'),
    width: wp('96%'),
    borderWidth: 1,
    borderColor: 'darkred',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotelImage: {
    width: wp('92%'),
    height: hp('25%'),
  },
  boxText: {
    width: wp('92%'),
    height: hp('15%'),
  },
  Residency: {
    fontSize: 13,
    color: 'black',
    marginTop: 5,
  },
  mptText: {
    fontSize: 12,
    color: 'darkred',
    marginTop: 5,
  },
  stars: {
    flexDirection: 'row',
    padding: 2,
  },
  priceText: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    marginTop: 20,
  },
  viewButton: {
    width: wp('20%'),
    height: hp('4%'),
    borderWidth: 1,
    borderColor: 'darkred',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButton: {
    width: wp('20%'),
    height: hp('4%'),
    backgroundColor: 'darkred',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewText: {
    fontSize: 12,
    color: 'darkred',
  },
  bookText: {
    fontSize: 12,
    color: 'white',
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
  dateNew: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // marginHorizontal: 10,
    flexWrap: 'wrap',
  },
  footer: {
    width: wp('100%'),
    height: hp('90%'),
    paddingLeft: 10,
  },
});

