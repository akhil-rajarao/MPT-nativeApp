import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllCities, getAllProperties} from '../appSlice';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../../app/hooks';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import ContactUs from '../../component/common/ContactUs';
import Entypo from 'react-native-vector-icons/Entypo';
import {FlatList} from 'react-native-gesture-handler';
//   import Header from '../../components/Header';
import Footer from '../../component/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';

// import style from '../mice&facilities/style';

const Destination = () => {
  // const [text, onChangeText] = React.useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const isFocused = useIsFocused();
  const properties = useAppSelector(state => state?.dashboard?.properties);

  let cities = useAppSelector(state => state?.dashboard?.cities);
  useEffect(() => {
    dispatch(getAllProperties());
    dispatch(getAllCities());
  }, [dispatch, isFocused]);

  const [inputText, setInputText] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCity, setSelectedCity] = useState<number | undefined>();

  const handleInputChange = (text: string) => {
    setInputText(text);
    setShowDropDown(true);
    const city = cities.find(
      c => c.city_name.toLowerCase().trim() === text.toLowerCase().trim(),
    );
    setSelectedCity(city?.id);
    // handleFilterDropdown(text);
  };

  // const url =
  //   'https://www.secure-booking-engine.com/accounts/v4T40B8UuLAiX2rrsTheFw/properties/fFLD6k4WzC15QFf5yWFGrA/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/cart/Gv38iSQgjRdNQ3IMeSwxSw/#/search';
  // const handleClick = () => {
  //   Linking.canOpenURL(url).then(supported => {
  //     if (supported) {
  //       Linking.openURL(url);
  //     } else {
  //       console.log("Don't know how to open URI: " + url);
  //     }
  //   });
  // };
  console.log('properties======>', properties);
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
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageSlice}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3544608669.png',
            }}
          />
        </View>

        <View style={styles.search}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: wp('60%'),
              height: hp('5%'),
            }}>
            <TextInput
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: 'white',
                fontFamily: 'Poppins-LightItalic',
                color: '#888',
                fontSize: 16,
                textAlign: 'center',
              }}
              value={inputText}
              placeholder="City/Destination"
              onFocus={() => {
                setShowDropDown(false);
              }}
              onChangeText={handleInputChange}
            />
            {inputText && showDropDown && (
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  borderWidth: 2,
                  borderColor: 'red',
                  backgroundColor: 'skyblue',
                }}>
                {cities
                  .filter(item =>
                    item.city_name
                      .toLowerCase()
                      .includes(inputText.toLowerCase()),
                  )
                  .map(item => (
                    // eslint-disable-next-line react/jsx-no-undef
                    <TouchableOpacity
                      key={item.id}
                      style={{paddingVertical: 10}}
                      onPress={() => {
                        setInputText(item.city_name);
                        setSelectedCity(item.id);
                        setShowDropDown(false);
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'black',
                          textAlign: 'center',
                        }}>
                        {item.city_name}
                      </Text>
                    </TouchableOpacity>
                  ))}
              </View>
            )}
          </View>
          {/* text input  */}
          <View style={styles.searchButton}>
            <Pressable
              onPress={() =>
                navigation.navigate('Cities', {
                  city_id: selectedCity,
                })
              }>
              <Text style={styles.buttonText}>Search</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <View style={styles.AccommodationView}>
        <Text style={styles.headingText}>Accommodation</Text>
        {properties && (
          <FlatList
            data={properties}
            renderItem={({item}) => (
              <View style={styles.HotelBox}>
                {item.property_image && (
                  <Image
                    style={styles.hotelImage}
                    source={{
                      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.property_image[0]}`,
                    }}
                  />
                )}
                <View style={styles.boxText}>
                  <Text style={styles.Residency}>{item?.property_type}</Text>

                  <Text style={styles.mptText}>{item?.property_name}</Text>

                  <View style={styles.stars}>
                    <View style={{marginRight: 5}}>
                      <Entypo name="tripadvisor" size={15} color="green" />
                    </View>
                    {Array.from({length: 5}).map((_item, index) =>
                      item?.rating >= index + 1 ? (
                        <Icon
                          key={index}
                          name="star"
                          size={15}
                          color="goldenrod"
                        />
                      ) : (
                        <Icon
                          key={index}
                          name="star-o"
                          size={15}
                          color="black"
                        />
                      ),
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
                              style={{color: 'black', flexDirection: 'row'}}>
                              - {amenitiesObj[Number(number)]}
                            </Text>
                          </View>
                        );
                      })}
                  </View>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AccommodationView', {
                        content: item,
                      })
                    }>
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
            )}
          />
        )}
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <View>
        <ContactUs />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ScrollView>
  );
};
export default Destination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: hp('40%'),
    width: wp('100%'),
    position: 'relative',
  },
  imageSlice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    position: 'absolute',
    top: 265,
    display: 'flex',
    alignSelf: 'center',

    // width: 100,
  },

  input: {
    height: hp('5%'),
    width: wp('60%'),
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'darkred',
  },
  searchButton: {
    height: hp('5%'),
    width: wp('30%'),
    borderWidth: 1,
    backgroundColor: 'darkred',
    borderColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
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
  //   text: {
  //     position: 'absolute',
  //     // done
  //   },

  //   heading1: {
  //     color: 'lightgrey',
  //     fontSize: 35,
  //     fontWeight: '800',
  //     marginBottom: 7,
  //     // done
  //   },

  // heartText: {
  //   fontSize: hp('3.5%'),
  //   color: 'darkred',
  //   fontStyle: 'italic',
  //   fontWeight: '600',
  //   paddingLeft: 10,
  //   // done
  // },
  // banners: {
  //   width: wp('100%'),
  //   height: hp('80%'),
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // done
  // },
  // wildlife: {
  //   width: wp('98%'),
  //   height: hp('30%'),
  //   // done
  // },
  // bannersRow: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   width: wp('98%'),
  //   height: hp('50%'),

  //   justifyContent: 'space-between',
  //   paddingVertical: 10,
  //   // done
  // },
  // adventure: {
  //   width: wp('47%'),
  //   height: hp('35%'),
  //   // done
  // },
  // food: {
  //   width: wp('47%'),
  //   height: hp('35%'),
  // },
  // unexploredView: {
  //   width: wp('100%'),
  //   height: hp('45%'),

  //   marginTop: 30,
  //   // done
  // },

  // lifestyle: {
  //   color: 'darkred',
  //   fontWeight: 'bold',
  //   fontSize: hp('1.8%'),
  //   marginLeft: 5,
  //   // done
  // },
  // exploreImage: {
  //   width: wp('95%'),
  //   height: hp('30%'),
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // exploreOpacity: {
  //   backgroundColor: 'white',
  //   position: 'absolute',
  //   top: 255,
  //   bottom: 0,
  //   left: 0,
  //   right: 335,
  //   opacity: 0.3,
  //   borderBottomLeftRadius: 10,
  //   borderBottomRightRadius: 10,
  // },
  // exploreText: {
  //   fontSize: hp('2%'),
  //   color: 'floralwhite',
  //   position: 'absolute',
  //   top: 255,
  //   fontWeight: '600',
  //   alignSelf: 'flex-start',
  //   paddingLeft: 15,
  // },
  // opacity: {
  //   backgroundColor: 'white',
  //   position: 'absolute',
  //   top: 200,
  //   bottom: 0,
  //   left: 250,
  //   right: 0,
  //   opacity: 0.5,
  //   // done
  // },
  // opacity2: {
  //   backgroundColor: 'white',
  //   position: 'absolute',
  //   top: 240,
  //   bottom: 0,
  //   left: 80,
  //   right: 0,
  //   opacity: 0.3,
  //   // done
  // },
  // bannerText: {
  //   fontSize: hp('2%'),
  //   color: 'floralwhite',
  //   position: 'absolute',
  //   top: 200,
  //   left: 260,
  //   fontStyle: 'italic',
  //   fontWeight: '600',
  //   // done
  // },
  // bannerText2: {
  //   fontSize: hp('2%'),
  //   color: 'floralwhite',
  //   position: 'absolute',
  //   top: 240,
  //   left: 90,
  //   fontStyle: 'italic',
  //   fontWeight: '600',
  //   // done
  // },

  // read: {
  //   color: 'black',
  //   fontSize: hp('1.8%'),
  //   paddingTop: 2,
  //   // done
  // },

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
  // interests: {
  //   width: wp('100%'),
  //   height: hp('113%'),
  //   backgroundColor: 'tan',
  //   marginTop: 30,
  // },
  // exploreBox: {
  //   width: wp('48%'),
  //   height: hp('25%'),
  //   backgroundColor: 'black',
  //   borderRadius: 10,
  //   // done
  // },
  // exploreOther: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   paddingBottom: 10,
  //   // done
  // },
  // exploreOtherImage: {
  //   width: wp('48%'),
  //   height: hp('25%'),
  //   // borderRadius: 10,
  //   // done
  // },
  // otherOpacity: {
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   top: 160,
  //   bottom: 0,
  //   left: 0,
  //   right: 70,
  //   opacity: 0.4,

  //   // done
  // },
  // otherText: {
  //   fontSize: hp('2.1%'),
  //   color: 'floralwhite',
  //   position: 'absolute',
  //   top: 162,
  //   left: 10,
  //   fontWeight: '500',
  //   fontStyle: 'italic',
  //   // opacity: 0.5,
  //   // done
  // },
  // storyContainer: {
  //   width: wp('100%'),
  //   height: hp('80%'),
  //   backgroundColor: 'skyblue',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // storyImage: {
  //   width: wp('96%'),
  //   height: hp('30%'),
  // },
  // textBox: {
  //   width: wp('96%'),
  //   height: hp('30%'),
  //   backgroundColor: 'tan',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // headingBox: {
  //   width: wp('96%'),
  //   height: hp('10%'),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // storyText: {
  //   color: 'black',
  //   marginHorizontal: 10,

  //   fontStyle: 'italic',
  // },

  footer: {
    width: wp('100%'),
    height: hp('90%'),
    paddingLeft: 10,
  },
});
