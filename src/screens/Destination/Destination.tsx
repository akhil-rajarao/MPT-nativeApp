import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import Footer from '../footer/Footer';
import Gridexplore from './Gridexplore';

const Destination = () => {
  
  
  const Box = () => {
    const imgPath = [
      // require('../../assets/dest.jpg'),
      [require('../../assets/explore.png'), 'Kanha'],
      [require('../../assets/explore2.png'), 'Pachmarhi' ],
      [require('../../assets/explore3.png'), 'Bandhavgarh' ],
      [require('../../assets/explore4.png'), 'Amarkantak' ],
      [require('../../assets/explore5.png'), 'Indore' ],
      [require('../../assets/explore6.png'), 'Khajunaho'],
      [require('../../assets/explore7.png'), 'Bhopal'],
      [require('../../assets/explore8.png'), 'Panna'],
    ];

    return (
      <ScrollView>
        <View
          style={{
            height: hp('100%'),
            width: wp('100%'),
            backgroundColor: '#DEB887',
          }}>
           
          {/* <Text style={styles.head3}>Explore</Text> */}
          <View style={styles.container}>
            
            {imgPath?.map((item, i) => (
              <View style={styles.box}>
                <View style={styles.inner}>
                <Image
                  key={i}
                  style={{
                    width: '100%',
                    height:'100%',
                    position: 'relative',
                  }}
                  source={item[0]}
                />

                <Text
                  style={{
                    position: 'absolute',
                    color: 'white',
                    fontSize: 25,
                    fontWeight: '900',
                    fontFamily:'cursive',
                    paddingTop: 110,
                    paddingRight: 40,
                  }}>
                  {item[1]}
                </Text>

                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  };

 

  const images = [
    [require('../../assets/pap1.jpg'), 'Amarakantak'],

    [require('../../assets/pop2.jpg'), 'Sanchi'],
    [require('../../assets/pop3.jpg'), 'Bhopal'],
    [require('../../assets/pop4.jpg'), 'Ujjain'],
    [require('../../assets/pop5.jpg'), 'Pench'],
  ];
  const [text, onChangeText] = React.useState('');
  return (
    
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.mainview}>
          {/* <Text style={styles.head1}>Destination</Text> */}
          <View style={styles.view1}>
            <Image
              style={styles.image1}
              source={require('../../assets/dest.jpg')}
            />
            <Text style={{position:'absolute',color:'white',fontSize:30, alignSelf:'center',  paddingTop:185,fontWeight:'900',}}>DESTINATION</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="City/Destination"
                onChangeText={onChangeText}
                value=""
                style={styles.search}
              />
              <View style={styles.button}>
                <Text style={styles.buttontext}>Search</Text>
              </View>
            </View>
            <View style={{marginTop: 1}}>
              <Text style={styles.head2}>Popular Places</Text>
              <ScrollView horizontal={true}>
                <View style={{flexDirection: 'row'}}>
                  {images.map((image1, index) => (
                    <View style={{paddingLeft: 10}}>
                      <Image
                        key={index}
                        style={styles.image}
                        source={image1[0]}
                      />
                      <Text
                        style={{
                          zIndex: 300,
                          color: 'white',
                          position: 'absolute',
                          fontSize: 25,
                          fontStyle: 'italic',
                          fontFamily:'cursive',
                          fontWeight: '800',
                          paddingTop: 220,
                          paddingLeft: 20,
                        }}>
                        {image1[1]}
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
            </View>
          </View>
        </View>
     
      
      <View
        style={{
          height:'100%',
          width: '100%',
          backgroundColor: 'white',
          marginTop: 1,
          marginBottom:1,
          // paddingTop:10,
          paddingBottom:10,
        }}>
         
          <Text style={styles.head3}>Explore</Text>
          <View style={{paddingTop:10,}}>
          <Gridexplore/>
           {/* <Box /> */}
          </View>
         
       
      {/* {...Guest Stories start } */}
     
      
      <View
        style={{
          height: hp('68%'),
          width: wp('100%'),
          backgroundColor: 'white',
          marginTop:'5%',
          marginBottom:'1%',
         
        }}>
        <Text style={styles.head2}>Guest Stories</Text>
        <ScrollView horizontal={true} >
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={styles.getstories1}
                source={require('../../assets/guest1.jpg')}
              />
              
              <View
                style={{
                  backgroundColor: '#DEB887',
                  paddingTop: 50,
                  paddingBottom: 40,
                  paddingLeft: 1,
                  paddingRight: 10,
                  marginLeft:1,
                  marginRight:10,
                  marginTop: 1,

                  alignItems: 'flex-start',
                }}>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  Awesome Orchha Lovely Betwa Retreat All covid norms{' '}
                </Text>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  followed very nice and sincere staff my second visit
                </Text>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  to this beautiful resort and the level of service goes
                </Text>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  {' '}
                  Mouth watering food especially the barbeque and
                </Text>

                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  {' '}
                  above all a personal bonfire.up and out of the way.
                </Text>
                <></>
              </View>
            </View>
            <View>
              <Image
                style={styles.getstories2}
                source={require('../../assets/guest2.jpg')}
              />
              <View
                style={{
                  backgroundColor: '#DEB887',
                  paddingTop: 50,
                  paddingBottom: 5,
                  paddingLeft:10,
                  marginTop: 5,
                  marginLeft:1,
                  marginRight:10,
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  Best Hotel of Mp,I really did not expect
                </Text>

                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  such a wonderful experience over there,everything went
                </Text>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  as an exceptional,very supportive staff Have stayed
                </Text>
                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  {' '}
                  in many excellent hotels but this one
                </Text>

                <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
                  {' '}
                  is really amazing Champak Bungalow rockes.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        
        {/* Contact us image */}
        {/* <View style={{paddingBottom:20, marginTop:20,}}>
        */}
          {/* <Image
            style={styles.getstories2}
            source={require('../../assets/pop4.jpg')}
          />

          <View style={styles.exploreOpacity}></View>
          <Text style={styles.exploreText}>Contact Us</Text>
          <Text style={styles.tex}>
            Tourist Helpline(Toll Free):1800 233 7777
          </Text>
          <Text style={styles.secondtex}>Timing : (10 AM to 6 PM)</Text>
          <Text style={styles.thirdtex}>
            {' '}
            (Sunday holiday,Saturday and Other holiday Half Day)
          </Text>
          <Text style={styles.fourthtex}>Email : mpthelpline@mpstdc.com</Text>
          */}
       
        </View>
        
       
        {/* </View> */}
     
      <View
        style={{
          height: hp('100%'),
          width: wp('100%'),
          backgroundColor: 'white',
       
          marginTop:10,
          marginBottom:0,
          paddingBottom:0,
          paddingTop:20,
        }}>
        <Footer />
      </View>
      </View>
     
        
           </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  screen: {
    height: hp('100%'),
    width: wp('100%'),
  },
  head1: {
    fontStyle: 'italic',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkred',
    marginTop: 4,
  },

  mainview: {
    paddingLeft: 1,
    paddingRight: 5,
  },
  image1: {
    position: 'relative',
    height: hp('50%'),
    width: wp('100%'),
    paddingTop: 2,
  },
  view1: {
    height: hp('90%'),
    width: wp('100%'),
    
  },
  search: {
    backgroundColor: 'white',
    // paddingTop: 10,
    // borderRadius: 10,
    // color: 'black',
    // borderWidth: 1,
    width: wp('63%'),
    height: hp('5%'),
    borderColor: 'darkred',
    borderWidth: 1,
  },
  input: {
    // paddingRight: 10,
    flexDirection: 'row',
    position: 'absolute',
    paddingTop: 345,
    paddingLeft: 18,
  },
  button: {
    height: hp('5%'),
    width: wp('30%'),
    borderWidth: 1,
    backgroundColor: 'darkred',
    bordercolor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    color: 'white',
  },
  head2: {
    fontStyle: 'italic',
    fontSize: 40,
    fontWeight: '900',
    fontFamily:'cursive',
    color: 'darkred',
    marginTop: 15,
    paddingLeft: 2,
  },

  image: {
    width: wp('90%'),
    height: hp('45%'),
    margin: 1,
    marginBottom: 50,
    // // resizeMode: 'cover',
    resizeMode: 'contain',
    position: 'relative',
  },
  head3: {
    fontStyle: 'italic',
    fontSize: 40,
    fontFamily:'cursive',
    fontWeight: 'bold',
    color: 'darkred',
    marginTop: 0,
    paddingLeft: 4,
  },

  explor: {
    flexDirection: 'row',
  },

  container: {
    width: '100%',
    height: '45%',
    backgroundColor: '#DEB887',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '55%',
    padding: 5,
    backgroundColor: '#DEB887',
    paddingTop:2,
  },
  inner: {
    flex: 1,
    backgroundColor: '#DEB887',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:10,
   
    
  },
  // exploreOpacity: {
  //   backgroundColor: 'green',
  //   position: 'absolute',
  //   top: 0,
  //   fontColor: 'black',
  //   fontSize: 30,
  //   opacity: 0.1,
  //   borderBottomLeftRadius: 10,
  //   borderBottomRightRadius: 10,
  // },
  // exploreText: {
  //   fontSize: 40,
  //   fontFamily:'cursive',
  //   color: 'white',
  //   position: 'absolute',
  //   top: 10,
  //   fontWeight: '900',
  //   alignSelf: 'center',
  //   paddingLeft: 10,
  //   opacity: 1.5,
  // },
  // tex: {
  //   fontSize: 15,
  //   color: 'white',
  //   position: 'absolute',
  //   top: 60,
  //   fontWeight: '600',
  //   alignSelf: 'flex-start',
  //   paddingLeft: 20,
  //   opacity: 1.5,
  // },
  // secondtex: {
  //   fontSize: 15,
  //   color: 'white',
  //   position: 'absolute',
  //   top: 80,
  //   fontWeight: '600',
  //   alignSelf: 'flex-start',
  //   paddingLeft: 30,
  //   opacity: 1.5,
  // },
  // thirdtex: {
  //   fontSize: 15,
  //   color: 'white',
  //   position: 'absolute',
  //   top: 100,
  //   fontWeight: '600',
  //   alignSelf: 'flex-start',
  //   paddingLeft: 30,
  //   opacity: 1.5,
  // },
  // fourthtex: {
  //   fontSize: 15,
  //   color: 'white',
  //   position: 'absolute',
  //   top: 180,
  //   fontWeight: '600',
  //   alignSelf: 'flex-start',
  //   paddingLeft: 30,
  //   opacity: 1.5,
  // },
  getstories1: {
    height: hp('30%'),
    width: wp('100%'),
    paddingTop: 2,
  },
  getstories2: {
    height: hp('30%'),
    width: wp('100%'),
    paddingTop: 2,
  },
  
});

export default Destination;
