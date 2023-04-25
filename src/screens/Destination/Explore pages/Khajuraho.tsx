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
  
  const Khajunaho = () => {
    const onPress = () => '';
    return (
      <ScrollView>
        <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
          <Image
            style={styles.getstories2}
            source={{
              uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1010307265.png',
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
            KHAJURAHO
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
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3039435330.png',
                  }}
                />
                <View>
                  <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                    Hotel
                  </Text>
                  <Text style={{fontSize: 25, color: 'red', paddingLeft: 10}}>
                    MPT Jhankar,khajuraho
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
                    RS 2,396-5,588/NIGHT
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
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3088192946.png',
                  }}
                />
                <View>
                  <Text style={{paddingLeft: 10, fontSize: 20, color: 'black'}}>
                    Hotel
                  </Text>
                  <Text style={{fontSize: 25, color: 'red', paddingLeft: 10}}>
                    MPT Payal,Khajuraho
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
                    RS 2,876-5,588/NIGHT
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
             Discover the Erotic and Spiritual Sculptures of Khajuraho
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
          Khajuraho is a small town located in the Chhatarpur district of Madhya Pradesh,
           known for its ancient temples that are adorned with erotic and spiritual sculptures.
            These temples were built between the 10th and 12th centuries by the Chandela dynasty,
             and are now a UNESCO World Heritage site. Khajuraho is a popular tourist destination,
              attracting visitors from all over the world who come to admire the intricate carvings and
               sculptures.
            </Text>
            <Text style={{color: 'red', fontSize: 20}}>
              {' '}
              Why is Khajuraho Famous?
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                alignContent: 'flex-start',
                paddingLeft:5
              }}>
         Khajuraho is famous for its ancient temples that are adorned with intricate carvings 
         and sculptures, depicting both erotic and spiritual themes. The temples were built by the 
         Chandela dynasty between the 10th and 12th centuries, and are considered to be one of the 
         finest examples of medieval Indian architecture. The sculptures at Khajuraho are a testament 
         to the rich cultural and artistic heritage of ancient India.
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
              Language Spoken in Khajuraho
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              The official language of Khajuraho is Hindi. However, many 
              locals also speak Bundeli, a regional language.
              </Text>
              <Text style={{color: 'red', fontSize: 20}}>
              Is Khajuraho a Good City to Live In?
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              Khajuraho is a small town with a population of around 25,000 people. It may
               not offer the amenities and opportunities
               of a larger city, but it is a peaceful and close-knit community
                where people are warm and friendly. The town has a rich cultural
                 heritage and is surrounded by natural beauty, making it an ideal
                  place to live for those who appreciate a slower pace of life.
              </Text>
              <Text style={{color: 'red', fontSize: 20}}>
              Best Time to Visit Khajuraho
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              The best time to visit Khajuraho is from October to March, when the weather 
              is pleasant and cool. Summers can be hot and humid, while monsoons can bring 
              heavy rainfall and make it difficult to explore the town.
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
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/487714914.png',
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
                        Lakshmana Temple
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700',}}>
                        The best preserved Khajuraho temple,this
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        {' '}
                        large structure took over 20 years to build.
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        
                      </Text>
                    </View>
                  </View>
  
                  {/* image one end................................ */}
  
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3674979351.png',
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
                       Brahma Temple
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                       The Brahma Temple has a Unique pyramid-shaped
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        roof that Carries the five
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        manifestation of Shiva, a composite image of
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        his powers and potentialities.
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
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3183955666.png',
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
                        Khajuraho
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                        The captivating sound & light show in
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        Khajuraho describes the life of the Chandela
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        rulers and traces the tales of temples from the
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        10th to 11th centuries.
                      </Text>
                    </View>
                  </View>
                  {/* image three end......................................... */}
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/203169212.png',
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
                        Matangeshwar Temple
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                       A beautiful temple in Khajuraho dedicated to
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        the deity Lord Shiva
                      </Text>
                      {/* <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        
                      </Text> */}
                    </View>
                  </View>
                  {/* image foure end............................... */}
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1213458908.png',
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
                        Chitragupta Temple
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                        One of the most unique, this temple has
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        beautiful depications of hunting and elephant
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        fights.
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
  export default Khajunaho;
  