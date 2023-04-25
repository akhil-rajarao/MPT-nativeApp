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
  
  import Icon from 'react-native-vector-icons/Feather';
import Footer from '../footer/Footer';
  
  const Pachmarhiregion = () => {
    const onPress = () => '';
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
              fontWeight:'800',
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
              paddingBottom:0,
              alignContent: 'center',
              // borderWidth: 2,
              marginTop:50
              
            }}>
               <Text style={{marginVertical: 1, paddingLeft: 5, paddingRight: 10, fontSize: 18,color: 'black', }}>
               Popularly known as the 'Satpura ki Rani' (Queen of Satpura) is the glorious land called Pachmarhi.
               Pachmarhi is one of the most popular destinations in the Heart of Incredible India and is a treasure trove of rich history and nature's bounty.
              </Text>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: 34,
                fontWeight: '900',
                fontFamily: 'cursive',
                color: 'darkred',
                paddingLeft: 6,
              }}>
             Itenary For Pachmarhi Region
            </Text>
  
     <Text style={{marginVertical: 1, paddingLeft: 5, paddingRight: 10, fontSize: 18,color: 'black',fontWeight:'500' }}>
      Pipariya ‐ Tawa ‐ Pachmarhi ‐ Tamia ‐ Patalkot ‐ Pench ‐ Rookhad ‐ Seoni      
    </Text>
   </View>
            <View>
             <View
                      style={{
                        borderWidth: 2,
                        borderColor: 'red',
                        borderRadius:10,
                        width: 190,
                        height: 55,
                        backgroundColor: 'darkred',
                        marginRight: 0,
                        marginLeft:20,
                        marginBottom: 0,
                        marginTop: 20,
                      }}>
                      <TouchableOpacity onPress={onPress}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight:'600',
                            alignSelf: 'flex-start',
                            color: 'white',
                            paddingTop:10,
                            paddingLeft:10
                          }}>
                           4 Nights / 5 Days
                        </Text>
                      </TouchableOpacity>
                    </View>
                </View>
      <View  style={{
            
             width: wp('100%'),
             backgroundColor: 'white',
              }}>
                <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:20}}>
                  <View  style={{backgroundColor:'white',width:180,height:'100%',paddingLeft:10,marginLeft:10}} >
                  {/* <Text>gfdg</Text> */}
                  <View style={{flexDirection:'row',justifyContent:'space-around',height:200,width:170,paddingTop:0}}>
                    
                    <Text style={{paddingTop:20,fontSize:20 ,color:'darkred',fontWeight:'500'}}>Day1</Text>
                    <Text style={{paddingTop:20}}>
                    <Icon name="disc" size={40} color="red" />
                   </Text>
                     </View>

                     <View style={{flexDirection:'row',justifyContent:'space-around',height:300,width:170,paddingTop:60}}>
                    
                    <Text style={{paddingTop:40,fontSize:20,color:'darkred',fontWeight:'700'}}>Day2</Text>
                    <Text style={{paddingTop:40}}>
                    <Icon name="disc" size={40} color="red" />
                   </Text>
                     </View>
                     <View style={{flexDirection:'row',justifyContent:'space-around',height:300,width:170 ,paddingTop:60}}>
                    
                    <Text style={{paddingTop:40,fontSize:20,color:'darkred',fontWeight:'700'}}>Day3</Text>
                    <Text style={{paddingTop:40}}>
                    <Icon name="disc" size={40} color="red" />
                   </Text>
                     </View>
                     <View style={{flexDirection:'row',justifyContent:'space-around',height:300,width:170,paddingTop:60}}>
                    
                    <Text style={{paddingTop:40,fontSize:20,color:'darkred',fontWeight:'700'}}>Day4</Text>
                    <Text style={{paddingTop:40}}>
                    <Icon name="disc" size={40} color="red" />
                   </Text>
                     </View>
                     <View style={{flexDirection:'row',justifyContent:'space-around',height:300,width:170,paddingTop:60}}>
                    
                    <Text style={{paddingTop:40,fontSize:20,color:'darkred',fontWeight:'700'}}>Day5</Text>
                    <Text style={{paddingTop:40}}>
                    <Icon name="disc" size={40} color="red" />
                   </Text>
                     </View>
                     
                  </View>

     <View style={{backgroundColor:'white',width:180,height:'100%',paddingLeft:20,marginRight:30}}>
                  
          <View style={{backgroundColor:'white',width:180,height:300,paddingLeft:10,}}>
                 <Text style={{paddingTop:10, fontSize:18,}}>Arrival at pipariya Visit Unit and Depart for
                  Tawa(75km) Check in Hotel and sightseeing Overnight
                  stay at Tawa.
                 </Text>
                  </View>

                  <View style={{backgroundColor:'white',width:180,height:300,paddingLeft:20,marginBottom:10}}>
                 <Text style={{paddingTop:0, fontSize:18, }}>After breakfast depart for
                  PachmarhiviaMadai(140km) Check In HotelAfter lunch visit MPT and 
                  Private Units at Pachmarhi Visit Sunset Pint Dhoopgarh Overnight
                   stay at Pachmarhi
                 </Text>
                  </View>

                  <View style={{backgroundColor:'white',width:180,height:300,paddingLeft:20,}}>
                 <Text style={{paddingTop:0, fontSize:18,}}>After breakfast visit Bee Fall, HandiKhoh, 
                 Apsara Vihar, RajatPrapat, Duchess Fall, Mahadeo, Chauragarh, Jata Shankar, Catholic 
                 Church and other places Depart for Tamia(80km) in the evening Overnight stay at Tamia
                 </Text>
                  </View>

                  <View style={{backgroundColor:'white',width:180,height:300,paddingLeft:20,}}>
                 <Text style={{paddingTop:0, fontSize:18,}}>After breakfast sightseeing at Tamia
                  and Patalkot(25km) Lunch and depart for Pench(130 km) en-route Rookhad Unit visit 
                  Overnight stay at Pench
                 </Text>
                  </View>

                  <View style={{backgroundColor:'white',width:180,height:300,paddingLeft:20, }}>
                 <Text style={{paddingTop:0, fontSize:18,}}>Early morning wakeup call Morning safari
                    After breakfast Depart for Nagpur (100 km)
                    Drop at Nagpur Rail/Bus Station
                 </Text>
                  </View>

                  </View>
                </View>

                <View>
                <View
                      style={{
                        borderWidth: 2,
                        borderColor: 'red',
                        // borderRadius:10,
                        width: 300,
                        height: 55,
                        backgroundColor: 'darkred',
                        marginRight: 0,
                        marginLeft:38,
                        marginBottom: 0,
                        marginTop: 70,
                      }}>
                      <TouchableOpacity onPress={onPress}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight:'600',
                            alignSelf: 'flex-start',
                            color: 'white',
                            paddingTop:10,
                            paddingLeft:10
                          }}>
                           REQUEST FOR A CALL BACK
                        </Text>
                      </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginTop:50}}>
                  <Footer/>
                </View>


      </View>
      <View   style={{
             height:hp('100%'),
             width: wp('100%'),
             backgroundColor: 'white',
              }} >

      </View>
     </View>
      
     
  
       
         
  
    </View>
      </ScrollView>
    );
  };
  const styles = StyleSheet.create({
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
      alignContent:'center'
    },
    underline: {
      width: '80%',
      borderBottomWidth: 4,
      borderColor: 'black',
      paddingTop:0,
    },
  });
  export default Pachmarhiregion;
  