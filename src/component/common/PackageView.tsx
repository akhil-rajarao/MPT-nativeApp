import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ContactUs from '../../component/common/ContactUs';
import Footer from '../../component/Footer';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

const PackageView = () => {
  return (
    <ScrollView>
      <View>
        <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
          <Image
            style={styles.getstories2}
            source={{
              uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2589369229.png',
            }}
          />

          <Text
            style={{
              position: 'absolute',
              fontSize: 35,
              fontWeight: '800',
              alignSelf: 'center',
              color: 'white',
              paddingTop: 120,
            }}>
            PACHMARHI REGION
          </Text>

          <View
            style={{
              width: wp('100%'),
              backgroundColor: 'white',
              paddingBottom: 0,
              alignContent: 'center',

              marginTop: 50,
            }}>
            <View style={styles.content}>
              <Text
                style={{
                  marginVertical: 1,
                  fontSize: 18,
                  color: 'black',
                }}>
                Popularly known as the 'Satpura ki Rani' (Queen of Satpura) is
                the glorious land called Pachmarhi. Pachmarhi is one of the most
                popular destinations in the Heart of Incredible India and is a
                treasure trove of rich history and nature's bounty.
              </Text>
            </View>
            <Text
              style={{
                fontSize: 34,
                fontFamily: 'YouthPower-X34qG',
                color: 'darkred',
                paddingLeft: 10,
                marginTop: 20,
              }}>
              Itenary For Pachmarhi Region
            </Text>

            <Text
              style={{
                marginVertical: 1,
                paddingLeft: 10,

                fontSize: 16,
                color: 'darkgray',
                marginTop: 10,
              }}>
              Pipariya ‐ Tawa ‐ Pachmarhi ‐ Tamia ‐ Patalkot ‐ Pench ‐ Rookhad ‐
              Seoni
            </Text>
          </View>
          <View>
            <View
              style={{
                borderColor: 'red',
                borderRadius: 5,
                width: wp('30%'),
                height: hp('4%'),
                backgroundColor: 'darkred',
                margin: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: 'white',
                }}>
                4 Nights / 5 Days
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.dayText}>Day1</Text>
              {/* <Text style={styles.icon}></Text> */}
            </View>
          </View>
          {/* <View
            style={{
              width: wp('100%'),
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 180,
                  height: '100%',
                  paddingLeft: 10,
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    height: 200,
                    width: 170,
                    paddingTop: 0,
                  }}>
                  <Text
                    style={{
                      paddingTop: 20,
                      fontSize: 20,
                      color: 'darkred',
                      fontWeight: '500',
                    }}>
                    Day1
                  </Text>
                  <Text style={{paddingTop: 20}}>
                    <Icon name="disc" size={20} color="red" />
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    height: 300,
                    width: 170,
                    paddingTop: 60,
                  }}>
                  <Text
                    style={{
                      paddingTop: 40,
                      fontSize: 20,
                      color: 'darkred',
                      fontWeight: '700',
                    }}>
                    Day2
                  </Text>
                  <Text style={{paddingTop: 40}}>
                    <Icon name="disc" size={20} color="red" />
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    height: 300,
                    width: 170,
                    paddingTop: 60,
                  }}>
                  <Text
                    style={{
                      paddingTop: 40,
                      fontSize: 20,
                      color: 'darkred',
                      fontWeight: '700',
                    }}>
                    Day3
                  </Text>
                  <Text style={{paddingTop: 40}}>
                    <Icon name="disc" size={20} color="red" />
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    height: 300,
                    width: 170,
                    paddingTop: 60,
                  }}>
                  <Text
                    style={{
                      paddingTop: 40,
                      fontSize: 20,
                      color: 'darkred',
                      fontWeight: '700',
                    }}>
                    Day4
                  </Text>
                  <Text style={{paddingTop: 40}}>
                    <Icon name="disc" size={20} color="red" />
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    height: 300,
                    width: 170,
                    paddingTop: 60,
                  }}>
                  <Text
                    style={{
                      paddingTop: 40,
                      fontSize: 20,
                      color: 'darkred',
                      fontWeight: '700',
                    }}>
                    Day5
                  </Text>
                  <Text style={{paddingTop: 40}}>
                    <Icon name="disc" size={40} color="red" />
                  </Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: 'white',
                  width: 180,
                  height: '100%',
                  paddingLeft: 20,
                  marginRight: 30,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 180,
                    height: 300,
                    paddingLeft: 10,
                  }}>
                  <Text style={{paddingTop: 10, fontSize: 18, color: 'black'}}>
                    Arrival at pipariya Visit Unit and Depart for Tawa(75km)
                    Check in Hotel and sightseeing Overnight stay at Tawa.
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: 'white',
                    width: 180,
                    height: 300,
                    paddingLeft: 20,
                    marginBottom: 10,
                  }}>
                  <Text style={{paddingTop: 0, fontSize: 18, color: 'black'}}>
                    After breakfast depart for PachmarhiviaMadai(140km) Check In
                    HotelAfter lunch visit MPT and Private Units at Pachmarhi
                    Visit Sunset Pint Dhoopgarh Overnight stay at Pachmarhi
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: 'white',
                    width: 180,
                    height: 300,
                    paddingLeft: 20,
                  }}>
                  <Text style={{paddingTop: 0, fontSize: 18, color: 'black'}}>
                    After breakfast visit Bee Fall, HandiKhoh, Apsara Vihar,
                    RajatPrapat, Duchess Fall, Mahadeo, Chauragarh, Jata
                    Shankar, Catholic Church and other places Depart for
                    Tamia(80km) in the evening Overnight stay at Tamia
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: 'white',
                    width: 180,
                    height: 300,
                    paddingLeft: 20,
                  }}>
                  <Text style={{paddingTop: 0, fontSize: 18, color: 'black'}}>
                    After breakfast sightseeing at Tamia and Patalkot(25km)
                    Lunch and depart for Pench(130 km) en-route Rookhad Unit
                    visit Overnight stay at Pench
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: 'white',
                    width: 180,
                    height: 300,
                    paddingLeft: 20,
                  }}>
                  <Text style={{paddingTop: 0, fontSize: 18, color: 'black'}}>
                    Early morning wakeup call Morning safari After breakfast
                    Depart for Nagpur (100 km) Drop at Nagpur Rail/Bus Station
                  </Text>
                </View>
              </View>
            </View> */}

          <View
            style={{
              width: 250,
              height: 40,
              backgroundColor: 'darkred',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                alignSelf: 'center',
                color: 'white',
              }}>
              REQUEST FOR A CALL BACK
            </Text>
          </View>

          <View>
            <ContactUs />
          </View>

          <View style={{paddingLeft: 10}}>
            <Footer />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    letterSpacing: 2,
  },
  getstories2: {
    height: hp('45%'),
    width: wp('100'),
    paddingTop: 2,
    position: 'relative',
  },

  getstories1: {
    height: hp('40%'),
    width: wp('100%'),
    paddingTop: 2,
    marginLeft: 10,
    marginRight: 10,
    alignContent: 'center',
  },
  underline: {
    width: '80%',
    borderBottomWidth: 4,
    borderColor: 'black',
    paddingTop: 0,
  },
  dayText: {
    color: 'black',
    fontSize: 16,
  },
});
export default PackageView;
