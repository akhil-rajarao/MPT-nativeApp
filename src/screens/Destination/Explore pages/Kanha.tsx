import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Footer from '../../footer/Footer';
import Icon from 'react-native-vector-icons/Entypo';

const Kanha = () => {
  const onPress = () => '';
  return (
    <ScrollView>
      <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
        <Image
          style={styles.getstories2}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/4293906773.png',
          }}
        />

        <Text
          style={{
            position: 'absolute',
            fontSize: 29,
            alignSelf: 'center',
            color: 'gray',
            paddingTop: 120,
          }}>
          KANHA
        </Text>
        <View
          style={{
            height: hp('100%'),
            width: wp('100%'),
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: 40,
              fontWeight: '900',
              fontFamily: 'cursive',
              color: 'darkred',
              marginTop: 30,
              paddingLeft: 2,
            }}>
            Accommodation
          </Text>

          {/* ..............hotel images start ................. */}

          {/*>>>>>>>>>> first hotel Start>>>>>>>>>>>>>>>>>>> */}
          <ScrollView horizontal={true} style={{marginBottom: 90}}>
            <View
              style={{
                paddingLeft: 10,
                borderWidth: 3,
                borderColor: 'darkred',
                paddingTop: 12,
                height: 550,
                marginTop: 20,
              }}>
              <Image
                style={styles.hotel}
                source={{
                  uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3311901973.png',
                }}
              />
              <View>
                <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                  Hotel
                </Text>
                <Text style={{fontSize: 25, color: 'red', paddingLeft: 10}}>
                  MPT Jungle Resort Sarhi, Kanha
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingLeft: 10,
                  }}>
                  <Text>
                    <Icon name="tripadvisor" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                </View>
                <Text style={{paddingLeft: 10, color: 'black', fontSize: 20}}>
                  RS 4500-5000/NIGHT
                </Text>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Dinner
                    </Text>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .A/C Rooms
                    </Text>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Conference Room
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Parking facilities
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                  }}>
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: 'red',
                      width: 110,
                      height: 40,
                      marginLeft: 60,
                      marginBottom: 2,
                      marginTop: 20,
                    }}>
                    <TouchableOpacity onPress={onPress}>
                      <Text
                        style={{
                          fontSize: 20,
                          alignSelf: 'center',
                          color: 'black',
                        }}>
                        View
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: 'gray',
                      width: 120,
                      height: 40,
                      backgroundColor: 'red',
                      marginRight: 60,
                      marginBottom: 2,
                      marginTop: 20,
                    }}>
                    <TouchableOpacity onPress={onPress}>
                      <Text
                        style={{
                          fontSize: 20,
                          alignSelf: 'center',
                          color: 'white',
                        }}>
                        Booking
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            {/*>>>>>>>>>> first hotel End>>>>>>>>>>>>>>>>>>> */}

            {/* >>>>>>>>>>>>>>>>>second start>>>>>>>>>>>>>>>>> */}

            <View
              style={{
                paddingLeft: 10,
                borderWidth: 3,
                borderColor: 'darkred',
                paddingTop: 12,
                height: 550,
                marginTop: 20,
              }}>
              <Image
                style={styles.hotel}
                source={{
                  uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2012372803.png',
                }}
              />
              <View>
                <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                  Hotel
                </Text>
                <Text style={{fontSize: 25, color: 'red', paddingLeft: 10}}>
                  MPT Safari Lodge Mukki, Kanha
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingLeft: 10,
                  }}>
                  <Text>
                    <Icon name="tripadvisor" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                </View>
                <Text style={{paddingLeft: 10, color: 'black', fontSize: 20}}>
                  RS 4,916-14,750/NIGHT
                </Text>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Dinner
                    </Text>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .A/C Rooms
                    </Text>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Conference Room
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Parking facilities
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: 'red',
                      width: 110,
                      height: 40,
                      marginLeft: 60,
                      marginBottom: 2,
                      marginTop: 20,
                    }}>
                    <TouchableOpacity onPress={onPress}>
                      <Text
                        style={{
                          fontSize: 20,
                          alignSelf: 'center',
                          color: 'black',
                        }}>
                        View
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: 'gray',
                      width: 120,
                      height: 40,
                      backgroundColor: 'red',
                      marginRight: 60,
                      marginBottom: 2,
                      marginTop: 20,
                    }}>
                    <TouchableOpacity onPress={onPress}>
                      <Text
                        style={{
                          fontSize: 20,
                          alignSelf: 'center',
                          color: 'white',
                        }}>
                        Booking
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/* >>>>>>>>>>>>>>>>>second end>>>>>>>>>>>>>>>>> */}
            <View
              style={{
                paddingLeft: 10,
                borderWidth: 3,
                borderColor: 'darkred',
                paddingTop: 12,
                height: 550,
                marginTop: 20,
              }}>
              <Image
                style={styles.hotel}
                source={{
                  uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2085163854.png',
                }}
              />
              <View>
                <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                  Resort
                </Text>
                <Text style={{fontSize: 18, color: 'red', paddingLeft: 10}}>
                  MPT Baghira jungle Resort Mocha, Kanha
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingLeft: 10,
                  }}>
                  <Text>
                    <Icon name="tripadvisor" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                  <Text>
                    <Icon name="star-outlined" size={24} color=" gray" />
                  </Text>
                </View>
                <Text style={{paddingLeft: 10, color: 'black', fontSize: 20}}>
                  RS 7,702-14,750/NIGHT
                </Text>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Dinner
                    </Text>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .A/C Rooms
                    </Text>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .BAR Facilities
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Conference Room
                    </Text>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Parking Facilites
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      .Conference Room
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: 'red',
                      width: 110,
                      height: 40,
                      marginLeft: 60,
                      marginBottom: 2,
                      marginTop: 10,
                    }}>
                    <TouchableOpacity onPress={onPress}>
                      <Text
                        style={{
                          fontSize: 20,
                          alignSelf: 'center',
                          color: 'black',
                        }}>
                        View
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: 'gray',
                      width: 120,
                      height: 40,
                      backgroundColor: 'red',
                      marginRight: 60,
                      marginBottom: 2,
                      marginTop: 10,
                    }}>
                    <TouchableOpacity onPress={onPress}>
                      <Text
                        style={{
                          fontSize: 20,
                          alignSelf: 'center',
                          color: 'white',
                        }}>
                        Booking
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: wp('100%'),
            backgroundColor: 'white',
            paddingBottom: 90,
            alignContent: 'center',
            // borderWidth: 2,
            
          }}>
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: 34,
              fontWeight: '900',
              fontFamily: 'cursive',
              color: 'darkred',
              paddingLeft: 6,
            }}>
            Kanha
          </Text>
<View style={{marginLeft:5}}>
<Text
            style={{
              marginVertical: 1,
              paddingLeft: 5,
              paddingRight: 10,
              fontSize: 20,
              color: 'black',
            }}>
            Kanha National Park is a well-known tiger reserve situated in the
            state of Madhya Pradesh, India. It is one of the largest national
            parks in the country, covering an area of over 940 sq. km. The park
            is home to several species of animals, including tigers, leopards,
            wild dogs, and many more. The natural beauty of the park, combined
            with its wildlife, makes it a popular destination for nature
            enthusiasts and wildlife lovers.
          </Text>
          <Text style={{color: 'red', fontSize: 20}}>
            {' '}
            Why and what is Kanha famous for?
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              alignContent: 'flex-start',
              paddingLeft:5
            }}>
            Kanha National Park is famous for its tigers and their conservation
            efforts. The park is one of the few remaining habitats for the Royal
            Bengal tiger in the world. The park is also home to several other
            animals such as leopards, wild dogs, sloth bears, and Barasingha,
            the state animal of Madhya Pradesh. The park is also known for its
            picturesque landscapes, which include dense forests, meadows, and a
            large number of water bodies.
          </Text>
          <View>
            <TouchableOpacity onPress={onPress}>
              <Text style={{fontSize: 20, alignSelf: 'center', color: 'red'}}>
                .......Readmore
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: 'red', fontSize: 20}}>
              Which language is spoken in Kanha?
            </Text>
            <Text style={{ fontSize: 18, color: 'black'}}>
              The local language spoken in and around Kanha National Park is
              Hindi. However, due to its popularity as a tourist destination,
              English is also widely spoken.
            </Text>
            <Text style={{color: 'red', fontSize: 20}}>
              Is Kanha a good city to live in?
            </Text>
            <Text style={{ fontSize: 18, color: 'black'}}>
              Kanha National Park is a protected area and does not have any
              permanent settlements or residential areas within its boundaries.
              However, there are several small villages and towns nearby where
              people live. These places offer basic amenities and are good for a
              short stay. However, it is not a city to live in.
            </Text>
            <View>
              <TouchableOpacity onPress={onPress}>
                <Text style={{fontSize: 20, alignSelf: 'center', color: 'red'}}>
                  .......Read less
                </Text>
              </TouchableOpacity>
            </View>
          </View>
 

</View>
     
        </View>

        {/*>>>>>>>>>>> places to see start >>>>>>>>>>>>>>>>>>>>*/}
        <View>
          <View
            style={{
           
              width: wp('100%'),
              backgroundColor: 'pink',
              
             
            }}>
            <View style={{backgroundColor: 'pink'}}>
              <Text
                style={{
                  fontStyle: 'italic',
                  fontSize: 34,
                  fontWeight: '900',
                  fontFamily: 'cursive',
                  color: 'darkred',
                  paddingLeft: 6,
                }}>
                Places To See
              </Text>
            </View>

            <ScrollView horizontal={true} style={{marginBottom: 40}}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/4232887298.png',
                    }}
                  />

                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingTop: 30,
                      paddingBottom: 40,
                      paddingLeft: 5,
                      marginTop: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      alignContent: 'center',
                      
                      // alignItems: 'flex-start',
                    }}>
                    <Text
                      style={{
                        fontStyle: 'italic',
                        fontSize: 34,
                        fontWeight: '900',
                        fontFamily: 'cursive',
                        color: 'darkred',
                        paddingLeft: 6,
                      }}>
                      Kanha Meadows
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700',}}>
                      Tourists have claimed to have seen tigers here
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      {' '}
                      on many occasions making
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      this spot famous for tiger spotting.
                    </Text>
                  </View>
                </View>

                {/* image one end................................ */}

                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/4221234332.png',
                    }}
                  />

                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingTop: 30,
                      paddingBottom: 40,
                      paddingLeft: 5,
                      paddingRight: 5,
                      marginTop: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      alignItems: 'flex-start',
                    }}>
                    <Text
                      style={{
                        fontStyle: 'italic',
                        fontSize: 34,
                        fontWeight: '900',
                        fontFamily: 'cursive',
                        color: 'darkred',
                        paddingLeft: 6,
                      }}>
                      Places To See
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      ghsdshdgh
                    </Text>
                  </View>
                </View>
                {/* image two end..................................... */}
                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3807865936.png',
                    }}
                  />

                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingTop: 30,
                      paddingBottom: 40,
                      paddingLeft: 5,
                      marginTop: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      alignItems: 'flex-start',
                    }}>
                    <Text
                      style={{
                        fontStyle: 'italic',
                        fontSize: 34,
                        fontWeight: '900',
                        fontFamily: 'cursive',
                        color: 'darkred',
                        paddingLeft: 6,
                      }}>
                      Places To See
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      ghsdshdgh
                    </Text>
                  </View>
                </View>
                {/* image three end......................................... */}
                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3673661099.png',
                    }}
                  />

                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingTop: 30,
                      paddingBottom: 40,
                      paddingLeft: 5,
                      marginTop: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      alignItems: 'flex-start',
                    }}>
                    <Text
                      style={{
                        fontStyle: 'italic',
                        fontSize: 34,
                        fontWeight: '900',
                        fontFamily: 'cursive',
                        color: 'darkred',
                        paddingLeft: 6,
                      }}>
                      Places To See
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      ghsdshdgh
                    </Text>
                  </View>
                </View>
                {/* image foure end............................... */}
                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/808012074.png',
                    }}
                  />

                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingTop: 30,
                      paddingBottom: 40,
                      paddingLeft: 5,
                      marginTop: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      alignItems: 'flex-start',
                    }}>
                    <Text
                      style={{
                        fontStyle: 'italic',
                        fontSize: 34,
                        fontWeight: '900',
                        fontFamily: 'cursive',
                        color: 'darkred',
                        paddingLeft: 6,
                      }}>
                      Places Tkl See
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      ghsdshdgh
                    </Text>
                  </View>
                </View>
                {/* image five end  .....................................*/}
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{height:hp('100%'), width: wp('100%'),marginBottom:0}}>
          <Footer />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  getstories2: {
    height: hp('40%'),
    width: wp('100'),
    paddingTop: 2,
    position: 'relative',
  },
  hotel: {
    height: hp('35%'),
    width: wp('92%'),
    paddingTop: 4,
    position: 'relative',
    paddingLeft: 10,
  },
  getstories1: {
    height: hp('30%'),
    width: wp('100%'),
    paddingTop: 2,
    marginLeft: 10,
    marginRight: 10,
    alignContent:'center'
  },
});
export default Kanha;
