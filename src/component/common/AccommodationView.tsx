import {Image, Linking, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useIsFocused, useRoute} from '@react-navigation/native';

import ContactUs from '../../component/common/ContactUs';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Footer from '../../component/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import Icon from 'react-native-vector-icons/FontAwesome';

const AccommodationView = () => {
  const route = useRoute();

  const {content}: any = route.params;

  console.log(content, 'content=========>>>>');

  const amenitiesObj: any = {
    1: 'Dinner',
    2: 'A/C Rooms',
    3: 'BAR Facilities',
    4: 'WiFi Facilities',
    5: 'Conference Room',
    6: 'Transport',
    7: 'Gym Facilities',
    8: 'Parking facilities',
    9: 'Pool facilities',
    10: 'Health',
  };

  const amenitiesIconsObj: any = {
    1: (
      <MaterialCommunityIcons
        name="silverware-fork-knife"
        size={20}
        color="gray"
      />
    ),
    2: <MaterialCommunityIcons name="air-conditioner" size={20} color="gray" />,
    3: <Entypo name="drink" size={20} color="gray" />,
    4: <FontAwesome name="wifi" size={20} color="gray" />,
    5: <MaterialIcons name="meeting-room" size={20} color="gray" />,
    6: <MaterialIcons name="emoji-transportation" size={20} color="gray" />,
    7: <MaterialCommunityIcons name="dumbbell" size={20} color="gray" />,
    8: <FontAwesome5 name="parking" size={24} color="gray" />,
    9: <MaterialIcons name="pool" size={24} color="gray" />,
    10: <FontAwesome5 name="first-aid" size={24} color="gray" />,
  };

  return (
    <ScrollView>
      <View style={styles.mainview}>
        <View style={{marginTop: 15}}>
          <Text style={styles.title}>{content.property_name}</Text>
          {/* <View>pending icons</View> */}

          <View style={styles.stars}>
            <View style={{marginRight: 5}}>
              <Entypo name="tripadvisor" size={25} color="green" />
            </View>
            {Array.from({length: 5}).map((_item, index) =>
              content?.rating >= index + 1 ? (
                <FontAwesome
                  key={index}
                  name="star"
                  size={25}
                  color="goldenrod"
                />
              ) : (
                <FontAwesome
                  key={index}
                  name="star-o"
                  size={25}
                  color="black"
                />
              ),
            )}
          </View>

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
          <ScrollView horizontal>
            <View style={styles.amenetiesOfIconMainV}>
              {content?.ammenities &&
                content?.ammenities?.map((number: number) => {
                  return (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 15,
                      }}>
                      {amenitiesIconsObj[Number(number)]}
                      <Text style={{color: 'black'}}>
                        {amenitiesObj[Number(number)]}
                      </Text>
                    </View>
                  );
                })}
            </View>
          </ScrollView>
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
              <Ionicons name="person" size={20} color="red" />
              <FontAwesome name="mobile-phone" size={22} color="red" />
              <MaterialCommunityIcons name="email" size={20} color="red" />
              <Entypo name="phone" size={20} color="red" />
              <Ionicons name="location" size={20} color="red" />
            </View>
            <View style={styles.propartyContactTextVi}>
              <Text style={styles.contactText}>{content.manager_name}</Text>
              <Text style={styles.contactText}>{content.mobile_number}</Text>
              <Text style={styles.contactText}>{content.email}</Text>
              <Text style={styles.contactText}>{content.phone_number}</Text>
              <Pressable onPress={() => Linking.openURL(`${content.location_url}`)}>
              <Text style={styles.contactText}>Location</Text>
              </Pressable>
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
    marginTop: 10,
  },
  mainImage: {
    height: hp('30%'),
    width: wp('95%'),
    alignSelf: 'center',
    borderRadius: 10,
  },
  secondImageView: {
    width: wp('97%'),
    height: hp('100%'),
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
    // marginTop: -120,
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
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
    alignSelf: 'center',
    // alignItems: 'center',
  },
  PropertyContactView: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  stars: {
    flexDirection: 'row',
    padding: 2,
    marginTop: 10,
    marginLeft: 12,
  },
  iconView: {
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  propartyContactTextVi: {
    marginHorizontal: 0,
    marginRight: 140,
    justifyContent: 'space-evenly',
    alignSelf:'auto'
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
