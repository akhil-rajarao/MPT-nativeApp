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
  
  const Amarakantak = () => {
    const onPress = () => '';
    return (
      <ScrollView>
        <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
          <Image
            style={styles.getstories2}
            source={{
              uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/713574567.png',
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
            AMARKANTAK
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
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/116781567.png',
                  }}
                />
                <View>
                  <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                    Hotel
                  </Text>
                  <Text style={{fontSize: 25, color: 'red', paddingLeft: 10}}>
                    MPT Holiday Homes,Amarkantak
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
                    RS 2,876-5,765/NIGHT
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
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/116781567.png',
                  }}
                />
                <View>
                  <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                    Hotel
                  </Text>
                  <Text style={{fontSize: 25, color: 'red', paddingLeft: 10}}>
                    MPT Holiday Homes,Amarkantak
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
                    RS 2,876-5,765/NIGHT
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
             Discover the Spiritual Capital of Madhya Pradesh - Amarkantak
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
            Located in the eastern part of Madhya Pradesh, Amarkantak is a
             small town that is surrounded by dense forests and hills. Known 
             as the "Teerthraj" or the "King of Pilgrimage Sites", Amarkantak is
              a revered destination for Hindus, Jains, and Buddhists alike. It is
               located at an altitude of 1065 meters, where the Vindhya and Satpura 
               mountain ranges meet. The Narmada River, one of the seven holy rivers 
               in India, originates from here, making it a significant pilgrimage site.
            </Text>
            <Text style={{color: 'red', fontSize: 20}}>
              {' '}
              Why is Amarkantak Famous?
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                alignContent: 'flex-start',
                paddingLeft:5
              }}>
          Amarkantak is famous for its religious significance and natural beauty. 
          It is believed to be the place where Lord Shiva and Parvati meditated, and
           the town is home to many ancient temples and shrines dedicated to various 
           deities. The Narmada Kund, where the Narmada River originates, is a sacred 
           spot for Hindus, and a dip in its waters is considered to be purifying. 
           The Mai Ki Bagiya temple, Kapildhara waterfall, and Sonmuda are other popular 
           tourist attractions in Amarkantak.
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
              Language Spoken in Amarkantak
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              The official language of Amarkantak is Hindi. However, many
               locals also speak Gondi, Bharia, and other regional languages.
              </Text>
              <Text style={{color: 'red', fontSize: 20}}>
              Is Amarkantak a Good City to Live In?
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              Amarkantak is a small town with a population of around 7,000 people.
               While it may not offer the amenities and opportunities of a larger city, 
               it is a peaceful and serene place to live in, with plenty of greenery and fresh air.
              </Text>
              <Text style={{color: 'red', fontSize: 20}}>
              Best Time to Visit Amarkantak
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              The best time to visit Amarkantak is from October to March, when the weather is pleasant and cool.
               Summers can be hot and humid, while monsoons can bring heavy rainfall and make it difficult to 
               explore the town.
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
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2522001410.png',
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
                        Pataleshwar Mahadev Temple
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700',}}>
                        its an old temple dedicatead to Lord Shiva built
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        {' '}
                        by the Kalachuri Maharaja 'Karnadeva' in the
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        ancient period. The temple displays excellent
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        instances of Indian architecture.
                      </Text>
                    </View>
                  </View>
  
                  {/* image one end................................ */}
  
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1997012291.png',
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
                       Kaoil Dhara Fall
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                       Discover the beauty of cascading Water,
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        pouring onto the rugged rocks of the
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        mountain. During monsoon, the place turns
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        into a wondarland and an ideal tourist place to visit.
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                       
                      </Text>
                    </View>
                  </View>
                  {/* image two end..................................... */}
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/647940332.png',
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
                        Narmada Udgam and Kund
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                        A complex which is said to be the divine spot
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        from where Holy River Narmada originated!
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        Many pilgrams make their journey to the temple complex
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        and kund just to offer prayers to goddless Narmada.
                      </Text>
                    </View>
                  </View>
                  {/* image three end......................................... */}
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3772924155.png',
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
                        Shri Yantra Temple
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                       Colossal faces of deities and exceptionally
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        sculpted figurines of yoginis welcome visitors
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        at the entrance.Situated in open land,this
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        architecture is worth a visit.
                      </Text>
                    </View>
                  </View>
                  {/* image foure end............................... */}
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/4170842680.png',
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
                        Dugdh Dhara Waterfalls
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                        Located just a kilometre from Kapil Dhara,
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        these stunning milky white falls splash down
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        the rocks,providing an incredible view to  the onlookers.
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
      height: hp('40%'),
      width: wp('100%'),
      paddingTop: 2,
      marginLeft: 10,
      marginRight: 10,
      alignContent:'center'
    },
  });
  export default Amarakantak;
  