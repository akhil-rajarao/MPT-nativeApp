import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ContactUs from '../../component/common/ContactUs';
import Footer from '../../component/Footer';
import React from 'react';
import {useRoute} from '@react-navigation/native';

// import Icon from 'react-native-vector-icons/Entypo';

const AccommodationView = () => {
  const route = useRoute();

  const {content}: any = route.params;

  console.log(content, 'content=========>>>>');
  return (
    <ScrollView>
      <View style={styles.mainview}>
        <View>
          <Text style={styles.title}>{content.property_name}</Text>
          {/* <View>pending icons</View> */}

          <View style={styles.mainImageView}>
            <Image
              style={styles.mainImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${content.property_image[0]}`,
              }}
            />
          </View>
        </View>
        <View style={styles.secondImageView}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.secondImages}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${content.property_image[1]}`,
                  }}
                />
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.secondImages}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${content.property_image[2]}`,
                  }}
                />
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.secondImages}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${content.property_image[3]}`,
                  }}
                />
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.secondImages}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${content.property_image[4]}`,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.contentView}>
            <Text style={styles.contentText}>{content.description}</Text>
          </View>
        </View>
        <View style={styles.amenetiesMainView}>
          <View>
            <Text style={styles.title}>Amenities</Text>
          </View>
          <View style={styles.amenetiesOfIconMainV}>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
              <Text style={styles.icon}>O</Text>
              <Text style={styles.amenticsText}>Dinner</Text>
            </View>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
              <Text style={styles.icon}>O</Text>
              <Text style={styles.amenticsText}>A/C </Text>
              <Text style={styles.amenticsText}>Rooms</Text>
            </View>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
              <Text style={styles.icon}>O</Text>
              <Text style={styles.amenticsText}>BAR</Text>
              <Text style={styles.amenticsText}>Facilities</Text>
            </View>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
              <Text style={styles.icon}>O</Text>
              <Text style={styles.amenticsText}>Conference</Text>
              <Text style={styles.amenticsText}>Rooms</Text>
            </View>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
              <Text style={styles.icon}>O</Text>
              <Text style={styles.amenticsText}>Parking</Text>
              <Text style={styles.amenticsText}>facilities</Text>
            </View>
          </View>
          <View>
            <Text style={styles.underline}></Text>
          </View>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>BOOK NOW</Text>
          </View>
          <View style={styles.PropertyContactView}>
            <Text style={styles.title}>Property Contact</Text>
          </View>
          <View style={styles.proparty}>
            <View style={styles.iconView}>
              <Text style={styles.icon}>0</Text>
              <Text style={styles.icon}>0</Text>
              <Text style={styles.icon}>0</Text>
              <Text style={styles.icon}>0</Text>
              <Text style={styles.icon}>0</Text>
            </View>
            <View style={styles.propartyContactTextVi}>
              <Text style={styles.contactText}>{content.manager_name}</Text>
              <Text style={styles.contactText}>{content.mobile_number}</Text>
              <Text style={styles.contactText}>{content.email}</Text>
              <Text style={styles.contactText}>{content.phone_number}</Text>

              <Text style={styles.contactText}>location</Text>
            </View>
          </View>
          <View style={styles.contactusView}>
            <ContactUs />
          </View>
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '45%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '45%',
    padding: 5,
    // backgroundColor: 'white',
  },
  inner: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    // borderRadius:10
  },
  underline: {
    width: '80%',
    borderBottomWidth: 4,
    borderColor: 'black',
    marginHorizontal: 30,
  },
  proparty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 0,
  },
  mainview: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  title: {
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: 'darkred',
  },
  mainImageView: {
    paddingRight: 0,
    marginTop: 30,
  },
  mainImage: {
    height: hp('30%'),
    width: wp('95%'),
    alignSelf: 'center',
    borderRadius: 10,
  },
  secondImageView: {
    width: wp('97%'),
    height: hp('120%'),
    backgroundColor: 'white',
    marginTop: 10,
    alignSelf: 'center',
  },
  secondImages: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  contentView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    // backgroundColor: 'lightblue',
  },
  contentText: {
    fontSize: 18,
    color: 'black',
    letterSpacing: 2,
  },
  amenetiesMainView: {
    marginTop: -120,
    height: hp('100%'),
    width: wp('100%'),
    // backgroundColor: 'skyblue',
  },
  amenetiesOfIconMainV: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  amenticsText: {
    marginVertical: 1,
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 15,
    color: 'black',
  },
  icon: {
    color: 'red',
    fontWeight: '800',
  },
  buttonView: {
    borderRadius: 10,
    width: wp('40%'),
    height: hp('6%'),
    backgroundColor: 'darkred',
    marginHorizontal: 25,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    // alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  PropertyContactView: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  iconView: {
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  propartyContactTextVi: {
    marginHorizontal: 0,
    marginRight: 140,
    justifyContent: 'space-evenly',
  },
  contactText: {
    color: 'gray',
    fontSize: 16,
  },
  contactusView: {
    marginTop: 50,
  },
  footer: {
    marginLeft: 10,
  },
});

export default AccommodationView;
