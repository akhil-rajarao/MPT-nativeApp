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

import ContactUs from '../../component/common/ContactUs';
import Footer from '../../component/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getDestinationData} from '../appSlice';

const Ujjain = () => {
  const dispatch = useAppDispatch();

  const destinationData = useAppSelector(
    state => state.dashboard.destinationData,
  );

  const destDataBanner = destinationData.banners[0];
  const destSection = destinationData.section.contents;
  const dataAccomadationImages = destinationData.properties[0].property_image;
  const dataAccommodation = destinationData.properties;

  console.log(dataAccommodation, 'UJJANNNN DATAA=====>');
  const rating = 4;
  useEffect(() => {
    dispatch(getDestinationData(8198182));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {destDataBanner && (
          <Image
            style={styles.wildlifeImage}
            source={{
              uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${destDataBanner.banner_image}`,
            }}
          />
        )}
        <View style={styles.opacity} />
        <Text style={styles.imageText}>{destDataBanner.banner_title}</Text>
      </View>
      {/* >>>>>>>>>>>>>>>>>>>> */}

      <View style={styles.AccommodationView}>
        <Text style={styles.headingText}>Accommodation</Text>
        {dataAccommodation && (
          <FlatList
            horizontal={true}
            data={dataAccommodation}
            renderItem={({item}) => (
              <View style={styles.imageTop}>
                <Image
                  style={styles.packagesImage}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item.property_image[0]}`,
                  }}
                />
                <View>
                  <Text style={{color: 'black'}}>{item.property_type}</Text>
                </View>
                <View style={{}}>
                  <Text style={styles.packagesHeading}>
                    {item.property_name}
                  </Text>
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
                  <Text style={{color: 'black'}}>{item.price_range}</Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
      {/* >>>>>>>>>>>>>> */}
      <View>
        <Text style={{color: 'black'}}>{destDataBanner.description}</Text>
      </View>
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.packages}>
        <Text style={styles.packagesHeading}>Places To See ...</Text>
        {destSection && (
          <FlatList
            horizontal={true}
            data={destSection}
            renderItem={({item}) => (
              <View style={styles.imageTop}>
                <Image
                  style={styles.packagesImage}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item.content_images}`,
                  }}
                />
                <View style={{}}>
                  <Text style={styles.packagesHeading}>
                    {item.content_title}
                  </Text>
                </View>
                <View>
                  <Text style={{color: 'black'}}>
                    {item.description.value0}
                  </Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
      {/* {>>>>>>>>>>>>>>>>>>>>>>>>>} */}
      <View>
        <ContactUs />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Ujjain;

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
    height: hp('100%'),
    backgroundColor: 'lightgrey',
    marginTop: 50,
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
  Residency: {
    fontSize: 13,
    color: 'black',
    marginTop: 5,
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
  footer: {
    marginLeft: 10,
  },
});
