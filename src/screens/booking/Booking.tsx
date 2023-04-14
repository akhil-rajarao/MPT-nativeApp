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

//   import Header from '../../components/Header';
import Footer from '../../component/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

// import style from '../mice&facilities/style';

const Destination = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageSlice}>
          <Image
            style={styles.image}
            source={require('../../assets/images/Booking.jpeg')}
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
        <View style={styles.HotelBox}>
          <Image
            style={styles.hotelImage}
            source={require('../../assets/images/palash.jpeg')}
          />
          <View style={styles.boxText}>
            <Text style={styles.Residency}>Residency</Text>
            <Text style={styles.mptText}>MPT Palash Residency, Bhopal</Text>

            <View style={styles.stars}>
              {/* <Icon name="eyes" size={15} color="lightblue" /> */}
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
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
            source={require('../../assets/images/hotelWind.jpeg')}
          />
          <View style={styles.boxText}>
            <Text style={styles.Residency}>Residency</Text>
            <Text style={styles.mptText}>MPT Palash Residency, Bhopal</Text>

            <View style={styles.stars}>
              {/* <Icon name="eyes" size={15} color="lightblue" /> */}
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
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
            source={require('../../assets/images/hotelTourist.png')}
          />
          <View style={styles.boxText}>
            <Text style={styles.Residency}>Residency</Text>
            <Text style={styles.mptText}>MPT Palash Residency, Bhopal</Text>

            <View style={styles.stars}>
              {/* <Icon name="eyes" size={15} color="lightblue" /> */}
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
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
            source={require('../../assets/images/hotelKerwa.jpeg')}
          />
          <View style={styles.boxText}>
            <Text style={styles.Residency}>Residency</Text>
            <Text style={styles.mptText}>MPT Palash Residency, Bhopal</Text>

            <View style={styles.stars}>
              {/* <Icon name="eyes" size={15} color="lightblue" /> */}
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
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
            source={require('../../assets/images/hotelLake.jpeg')}
          />
          <View style={styles.boxText}>
            <Text style={styles.Residency}>Residency</Text>
            <Text style={styles.mptText}>MPT Palash Residency, Bhopal</Text>

            <View style={styles.stars}>
              {/* <Icon name="eyes" size={15} color="lightblue" /> */}
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
              <Icon name="star" size={15} color="goldenrod" />
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
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contact}>
        <Image
          style={styles.contactImage}
          source={require('../../assets/images/contact3.jpeg')}
        />
        <View style={styles.contactText}>
          <Text style={styles.contactHeading}>Contact Us</Text>
          <Text style={styles.contentSubText}>
            Tourist Helpline (Toll Free): 1800 233 7777
          </Text>
          <Text style={styles.contentSubText}>Timing: (10 AM to 6PM) </Text>
          <Text style={styles.contentSubText}>
            (Sunday holiday, Saturday and other holiday Half Day)
          </Text>
          <Text style={styles.contentSubText}>
            Email : mpthelpline@mpstdc.com
          </Text>
        </View>
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

    fontWeight: '800',
    // paddingBottom: 8,
    alignSelf: 'flex-start',
    paddingLeft: 5,
    // fontFamily: 'YouthBrushDaylightRegular',
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

  footer: {
    width: wp('100%'),
    height: hp('90%'),
    paddingLeft: 10,
  },
});