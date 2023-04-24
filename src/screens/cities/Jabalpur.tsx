import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../../app/hooks';

import ContactUs from '../../component/common/ContactUs';
import Footer from '../../component/Footer';
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-tailwindcss';
import {getDestinationData} from '../appSlice';

export default function Jabalpur() {
  const dispatch = useAppDispatch();
  // const htmlContent = `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;
  const destinationData = useAppSelector(
    state => state.dashboard.destinationData,
  );
  const destDataBanner = destinationData.banners[0];
  // console.log(destDataBanner, '....................///////////////////');
  const destSection = destinationData.section.contents;
  const dataAccomadationImages = destinationData.properties[0].property_image;
  const dataAccommodation = destinationData.properties[0];
  useEffect(() => {
    dispatch(getDestinationData(6750710));
  }, []);

  console.log(destSection, '==========>destinationData Dataaaaa');
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
      {/* >>>>>>>>>>>> */}
      <View style={styles.packages}>
        <Text style={styles.packagesHeading}>Accommodation</Text>
        <ScrollView horizontal>
          <View style={styles.HotelBox}>
            <Image
              style={styles.hotelImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${dataAccomadationImages[0]}`,
              }}
            />
            <View style={styles.boxText}>
              <Text style={styles.Residency}>
                {dataAccommodation.property_type}
              </Text>
              <Text style={styles.mptText}>
                {dataAccommodation.property_name}
              </Text>

              <View style={styles.stars}>
                {/* <Icon name="eyes" size={15} color="lightblue" /> */}
                <Icon name="star" size={15} color="goldenrod" />
                <Icon name="star" size={15} color="goldenrod" />
                <Icon name="star" size={15} color="goldenrod" />
                <Icon name="star" size={15} color="goldenrod" />
                <Icon name="star" size={15} color="black" />
              </View>
              <Text style={styles.priceText}>RS 3,540-4,564/NIGHT</Text>
              <Text style={styles.priceText}>
                Dinner - A/C rooms - parking facilities
              </Text>
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
          <View style={styles.HotelBox}>
            <Image
              style={styles.hotelImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${dataAccomadationImages[1]}`,
              }}
            />
            <View style={styles.boxText}>
              <Text style={styles.Residency}>
                {dataAccommodation.property_type}
              </Text>
              <Text style={styles.mptText}>
                {dataAccommodation.property_name}
              </Text>

              <View style={styles.stars}>
                {/* <Icon name="eyes" size={15} color="lightblue" /> */}
                <Icon name="star" size={15} color="goldenrod" />
                <Icon name="star" size={15} color="goldenrod" />
                <Icon name="star" size={15} color="goldenrod" />
                <Icon name="star" size={15} color="goldenrod" />
                <Icon name="star" size={15} color="black" />
              </View>
              <Text style={styles.priceText}>RS 3,540-4,564/NIGHT</Text>
              <Text style={styles.priceText}>
                Dinner - A/C rooms - parking facilities
              </Text>
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
        </ScrollView>
      </View>
      {/* >>>>> */}
      <View style={{}}>
        {/* <Text>{destDataBanner.description}</Text> */}
        <HTMLView value={destDataBanner.description} stylesheet={style1} />
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
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
      <View>
        <Footer />
      </View>
    </ScrollView>
  );
}

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
  textBoxView: {
    paddingTop: 25,
    // backgroundColor: 'skyblue',
    height: hp('33%'),
  },
  textBox: {
    color: 'black',
    fontSize: 15,
    letterSpacing: 2,
    marginHorizontal: 10,
  },
  explore: {
    marginTop: 30,
  },
  contentBox: {
    width: wp('100%'),
    height: hp('80%'),
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentImage: {
    width: wp('95%'),
    height: hp('30%'),
    marginTop: 10,
  },
  contentHeading: {
    alignSelf: 'flex-start',
    margin: 10,
    fontFamily: 'YouthPower-X34qG',
    fontSize: 20,
    color: 'darkred',
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
  a: {
    fontWeight: '300',
    color: 'black',
    fontSize: 12,
  },
  styles: {
    fontWeight: '300',
    color: 'black',
    fontSize: 12,
  },
  testHtml: {
    fontWeight: '300',
    color: 'black',
    fontSize: 12,
  },
});

const style1 = StyleSheet.create({
  a: {
    color: 'black',
  },
});
