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
  
  const Panna = () => {
    const onPress = () => '';
    return (
      <ScrollView>
        <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
          <Image
            style={styles.getstories2}
            source={{
              uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2429425822.png',
            }}
          />
  
          <Text
            style={{
              position: 'absolute',
              fontSize: 35,
              fontWeight:'800',
              alignSelf: 'center',
              color: 'gray',
              paddingTop: 120,
            }}>
            PANNA
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
                  uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/557139074.png',
                }}
              />
              <View>
                <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                  Hotel
                </Text>
                <Text style={{fontSize: 25, color: 'red', paddingLeft: 10}}>
                  MPT Jungle Camp Madla, Panna
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
                  RS 4,435-9,540/NIGHT
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
                      .Pool facilities
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      {/* .Parking facilities */}
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
                  uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/557139074.png',
                }}
              />
              <View>
                <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                  Hotel
                </Text>
                <Text style={{fontSize: 25, color: 'red', paddingLeft: 10}}>
                  MPT Jungle Camp Madla, Panna
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
                  RS 4,435-9,540/NIGHT
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
                      .Pool Ffacilities
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{fontSize: 17, color: 'black', paddingLeft: 10}}>
                      {/* .Parking facilities */}
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

              {/* >>>>>>>>>>>>>>>>>second start>>>>>>>>>>>>>>>>> */}
  
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
                    uri:'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/79237081.png',
                  }}
                />
                <View>
                  <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                    Resort
                  </Text>
                  <Text style={{fontSize: 25, color: 'red', paddingLeft: 10}}>
                    MPT Kerwa Resort, Bhopal
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
              </View> */}
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
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2649509070.png',
                  }}
                />
                <View>
                  <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                    Residency
                  </Text>
                  <Text style={{fontSize: 18, color: 'red', paddingLeft: 10}}>
                    MPT Lake View Residency, Bhopal
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
              Discovering the Best of Nature and Wildlife in Panna
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
                 Panna, a small town in Madhya Pradesh, India, is known for its
                 natural beauty and wildlife. This town is located near the Panna
                National Park, which is a popular destination for wildlife
                enthusiasts and nature lovers.
            </Text>
            <Text style={{color: 'red', fontSize: 20}}>
              {' '}
              Panna National Park
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                alignContent: 'flex-start',
                paddingLeft:5
              }}>
                Panna National Park, spread over an area of 542.67 square
                kilometers, is located in the Vindhya Hills. It was declared a
                national park in 1981 and is home to a wide variety of flora and
                fauna. The park is situated on the banks of the River Ken and is
                a popular spot for birdwatching.
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
              Pandav Falls in Panna
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              Pandav Falls is another popular destination in Panna. It is a
                  beautiful waterfall located near the national park. The
                  waterfall is surrounded by lush green forests, making it a
                  perfect spot for a picnic or a relaxing day out.
              </Text>
              <Text style={{color: 'red', fontSize: 20}}>
              Ken Gharial Sanctuary in Panna
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              The Ken Gharial Sanctuary is a must-visit destination for
                  wildlife enthusiasts. This sanctuary is located on the banks
                  of the River Ken and is home to the Indian gharial, a species
                  of crocodile that is found only in the Indian subcontinent.
                  Visitors can take a boat ride in the river and spot these
                  magnificent creatures basking in the sun.
             </Text>
              <Text style={{color: 'red', fontSize: 20}}>
              Diamond Mines in Panna
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              Panna is also known for its diamond mines. The town has been a
                  hub for diamond mining since ancient times, and it is said
                  that the famous Koh-i-Noor diamond was mined from here.
                  Visitors can take a tour of the diamond mines and learn about
                  the process of diamond mining.
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
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/103215242.png',
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
                      Mahamati Prannathji Temple
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      During Sharad purnima, pranami pilgrims visit
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      {' '}
                      this temple,in which swami prannathji took Samadhi.
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                  </View>
                </View>

                {/* image one end................................ */}

                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/92211359.png',
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
                      Ken Ghanyal Sarctuary
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      Located at the bank of Ken river,it has
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      colourful sandstone and granite.
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                  </View>
                </View>
                {/* image two end..................................... */}
                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3175040839.png',
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
                      Raneh falls
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      Ken River forms a 98 ft. high gorge in the
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      crystallin granite, giving you varying shades
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      of pink and red to grey.
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                  </View>
                </View>
                {/* image three end......................................... */}
                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1076152396.png',
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
                      Pandar falls
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      This 100 ft. high waterfall can be seen anytime
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      throughout the year.
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                  </View>
                </View>
                {/* image foure end............................... */}
                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/412213445.png',
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
                      Ken boating site
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      You can spot several migratory birds while you
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      enjoy a lazy sail on the Ken river
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                  </View>
                </View>
                {/* image five end  .....................................*/}
                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3072532957.png',
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
                      Baldeoji Temple
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      Housing the idol of Shri Baldeoji in black
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      shaligrami stone, this temple is built in
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      Paladian style.
                    </Text>
                  </View>
                </View>
                {/* .............six end................. */}

                <View>
                  <Image
                    style={styles.getstories1}
                    source={{
                      uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1378168715.png',
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
                      Ajaygarh Fort
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      Stronghold of the Chandela dynasty,this fort is
                    </Text>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                      perfect for the patrons of history buffs.
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                      }}></Text>
                  </View>
                </View>
                {/* .............seven end .....................*/}
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
      height: hp('40%'),
      width: wp('100%'),
      paddingTop: 2,
      marginLeft: 10,
      marginRight: 10,
      alignContent:'center'
    },
  });
  export default Panna;
  