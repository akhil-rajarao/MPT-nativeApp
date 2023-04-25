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
  
  const Bandhavgarh = () => {
    const onPress = () => '';
    return (
      <ScrollView>
        <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
          <Image
            style={styles.getstories2}
            source={{
              uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3589592016.png',
            }}
          />
  
          <Text
            style={{
              position: 'absolute',
              fontSize: 30,
              alignSelf: 'center',
              color: 'white',
              paddingTop: 120,
            }}>
            BANDHAVGARH
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
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3619726055.png',
                  }}
                />
                <View >
                  <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                    Hotel
                  </Text>
                  <Text style={{fontSize: 20, color: 'red', paddingLeft: 10, marginVertical: 1,
               
               paddingRight: 10,}}>
                    MPT White Tiger Forest Lodge,Bandhavgarh
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
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/713365842.png',
                  }}
                />
                <View>
                  <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                    Hotel
                  </Text>
                  <Text style={{fontSize: 25, color: 'red', paddingLeft: 10, marginVertical: 1,
               
                paddingRight: 20,}}>
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
              {/* <View
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
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1955691555.png',
                  }}
                />
                <View>
                  <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                    Resort
                  </Text>
                  <Text style={{fontSize: 18, color: 'red', paddingLeft: 10}}>
                    MPT Champak Bungalow, Pachmarhi
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
              </View> */}
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
              Bandhavgarh: A Pristine Wilderness and a Tiger's Kingdom
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
             Bandhavgarh is a popular national park in the Umaria district
             of Madhya Pradesh, India. The park is renowned for its dense forest, 
             stunning landscapes, and its rich flora and fauna. It is also known for being a tiger reserve, and the park is home to a large number of Bengal tigers.
            </Text>
            <Text style={{color: 'red', fontSize: 20}}>
              {' '}
              History Of Bandhavgarh
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                alignContent: 'flex-start',
                paddingLeft:5
              }}>
                The Bandhavgarh National Park has a rich history and a strong cultural significance. The name 'Bandhavgarh' is derived from an ancient fort located within the park that was once the residence of various rulers of the region. It is believed that the fort was gifted by Lord Rama to his younger brother Lakshmana, which makes it a significant pilgrimage site for Hindus. The fort is believed to be around 2,000 years old and has many myths and legends associated with it.
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
              Wildlife in Bandhavgarh
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              The Bandhavgarh National Park is one of the best places in India to spot Bengal tigers, with a large number of these majestic creatures calling the park their home. Along with tigers, the park is also home to other predators such as leopards and wild dogs. It is also a haven for birdwatchers, with over 250 species of birds found within the park. Other animals found within the park include sloth bears, Indian bison, and spotted deer.
              </Text>
              <Text style={{color: 'red', fontSize: 20}}>
              Best Time to Visit Bandhavgarh
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              The best time to visit Bandhavgarh National Park is between October and June. The park remains closed during the monsoon season from July to September.
             </Text>
             <Text style={{color: 'red', fontSize: 20}}>
             Visiting Tips to Bandhavgarh
            </Text>
         <Text style={{color: 'black', fontSize: 18}}>
            Visitors can take jeep or elephant safaris to explore the park and view its magnificent wildlife. It is recommended to book safaris in advance as they are in high demand. Visitors should also follow the park's rules and regulations, such as maintaining silence, avoiding littering, and not disturbing the wildlife.
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
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1821626936.png',
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
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1821860348.png',
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
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1788189793.png',
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
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/572056307.png',
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
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1760870399.png',
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
  export default Bandhavgarh;
  