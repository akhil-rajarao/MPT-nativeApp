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
  
  const Indore = () => {
    const onPress = () => '';
    return (
      <ScrollView>
        <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
          <Image
            style={styles.getstories2}
            source={{
              uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1796523875.png',
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
            INDORE
          </Text>
          {/* <View
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
   */}
            {/* ..............hotel images start ................. */}
  
            {/*>>>>>>>>>> first hotel Start>>>>>>>>>>>>>>>>>>> */}
            {/* <ScrollView horizontal={true} style={{marginBottom: 90}}>
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
   */}
              {/*>>>>>>>>>> first hotel End>>>>>>>>>>>>>>>>>>> */}
  
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
            {/* </ScrollView>
          </View> */}
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
              Indore: The Heart of Madhya Pradesh
            </Text>
  <View style={{marginLeft:5}}>
  <Text style={{color: 'red', fontSize: 20}}>
              {' '}
              Introduction for Indore 
            </Text>
  <Text
              style={{
                marginVertical: 1,
                paddingLeft: 5,
                paddingRight: 10,
                fontSize: 20,
                color: 'black',
              }}>
                Indore is a bustling city located in the heart of Madhya Pradesh, India. The city is known for its rich cultural heritage, architectural marvels, and bustling markets. Indore is the commercial capital of Madhya Pradesh and is also known for its delicious cuisine, beautiful gardens, and friendly locals.
             </Text>
            <Text style={{color: 'red', fontSize: 20}}>
              {' '}
              History of Indore
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                alignContent: 'flex-start',
                paddingLeft:5
              }}>
                </Text>
            <View>
              <TouchableOpacity onPress={onPress}>
                <Text style={{fontSize: 20, alignSelf: 'center', color: 'red'}}>
                  .......Readmore
                </Text>
              </TouchableOpacity>
            </View>
  
            <View>
                <Text style={{ fontSize: 18, color: 'black'}}>
                Indore has a rich history that dates back to the 16th century. It was founded by Rao Nandlal Chaudhary in 1715 and was ruled by various dynasties including the Marathas, the Mughals, and the British. During the British Raj, Indore became a princely state and was known as Indur. After India gained independence, it became a part of Madhya Bharat state and later Madhya Pradesh.
                </Text>
              <Text style={{color: 'red', fontSize: 20}}>
              Culture of Indore
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              Indore has a rich cultural heritage and is known for its music, dance, and festivals. The city is famous for its Garba dance, which is a traditional dance form performed during the Navratri festival. The city is also home to various museums, art galleries, and theaters, which showcase the rich cultural heritage of Madhya Pradesh.
             </Text>
              <Text style={{color: 'red', fontSize: 20}}>
              Attractions in Indore
              </Text>
              <Text style={{ fontSize: 18, color: 'black'}}>
              Indore is known for its beautiful gardens, ancient temples, and architectural marvels. The city is home to the famous Rajwada Palace, which is a blend of Maratha, Mughal, and French architectural styles. The palace is located in the heart of the city and is a must-visit for history buffs.

The Lalbagh Palace is another popular tourist attraction in Indore. It was built in 1921 by Maharaja Shivaji Rao Holkar and is known for its beautiful architecture and lush green gardens. The palace now serves as a museum and showcases various artifacts and memorabilia of the Holkar dynasty.

Other popular tourist attractions in Indore include the Kanch Mandir, Khajrana Ganesh Temple, Patalpani Waterfall, and Sarafa Bazaar, which is a famous street food market.


             </Text>
             <Text style={{color: 'red', fontSize: 20}}>
             Languages in Indore
            </Text>
         <Text style={{color: 'black', fontSize: 18}}>
         Hindi is the official language of Indore, but a majority of the population also speaks Marathi and English.
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
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1568518553.png',
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
                        Indore
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700',}}>
                        Indore
                       </Text>
                      {/* <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        {' '}
                        on many occasions making
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                        this spot famous for tiger spotting.
                      </Text> */}
                    </View>
                  </View>
  
                  {/* image one end................................ */}
  
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/112907602.png',
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
                        Bada Ganpati temple
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                            
                             The temple has one of the biggest 
                      </Text>
                      <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '700',paddingLeft:10}}>
                      status
                          
                          of Lord Ganapati in the word
                    </Text>
                    
                    </View>
                  </View>
                  {/* image two end..................................... */}
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2916903764.png',
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
                        Indore
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                          paddingLeft:10
                        }}>
                        Indore
                      </Text>
                    </View>
                  </View>
                  {/* image three end......................................... */}
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/287594712.png',
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
                        Kanch Mandir
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                          paddingLeft:10
                        }}>
                        Built by Sir Hukamchand seth in early 20th century
                      </Text>
                    </View>
                  </View>
                  {/* image foure end............................... */}
                  <View>
                    <Image
                      style={styles.getstories1}
                      source={{
                        uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3094214802.png',
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
                        Rajwada
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '700',
                          textAlign: 'center',
                        }}>
                        Indore
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
  export default Indore;
  