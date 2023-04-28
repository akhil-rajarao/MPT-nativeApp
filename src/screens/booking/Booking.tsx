import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ContactUs from '../../component/common/ContactUs';
//   import Header from '../../components/Header';
import Footer from '../../component/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect } from 'react';
import useAppDispatch, { useAppSelector } from '../../app/hooks';
import { getAllProperties } from '../appSlice';
import { FlatList } from 'react-native-gesture-handler';

// import style from '../mice&facilities/style';

const Destination = () => {
  const [text, onChangeText] = React.useState('');
  const dispatch = useAppDispatch();
 
  const properties = useAppSelector(state =>state?.dashboard?.properties)
  useEffect(() => {
      dispatch(getAllProperties())
  },[dispatch])

  console.log("properties======>",properties)

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
          <View style={styles.search}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Bhopal"
            />
            <View style={styles.searchButton}>
              <Text style={styles.buttonText}>Search</Text>
            </View>
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
                <Image
                  style={styles.hotelImage}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.property_image[0]}`,
                  }}
                />
                <View style={styles.boxText}>
                  <Text style={styles.Residency}>{item?.property_type}</Text>

                  <Text style={styles.mptText}>{item?.property_name}</Text>

                  <View style={styles.stars}>
                    {/* <Icon name="eyes" size={15} color="lightblue" /> */}
                    <Icon name="star" size={15} color="goldenrod" />
                    <Icon name="star" size={15} color="goldenrod" />
                    <Icon name="star" size={15} color="goldenrod" />
                    <Icon name="star" size={15} color="goldenrod" />
                    <Icon name="star" size={15} color="goldenrod" />
                  </View>
                  {/* <View style={{flexDirection: 'row'}}>
                  {[...Array(5)].map((_item, index) =>
                    rating >= index + 1 ? (
                      <Icon name="star" size={15} color="goldenrod" />
                    ) : (
                      <Icon name="star" size={15} color="black" />
                    ),
                  )}
                </View> */}
                  <View>
                    <Text style={styles.priceText}>{item?.price_range}</Text>
                    <Text style={styles.priceText}>
                      Dinner - A/C rooms - parking facilities
                    </Text>
                  </View>
                </View>
                <View style={styles.button}>
                  <View style={styles.viewButton}>
                    <Text style={styles.viewText}>VIEW</Text>
                  </View>
                  <View style={styles.bookButton}>
                    <Text style={styles.bookText}>BOOK NOW</Text>
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
    top: 280,
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
