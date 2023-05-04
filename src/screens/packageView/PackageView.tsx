import { View, Text, StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity, } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
  import Icon from 'react-native-vector-icons/Feather';
import Footer from '../../component/Footer';
import ContactUs from '../../component/common/ContactUs';
const PackageView = () => {
    const onPress = () => '';
  return (
    <ScrollView>
    <View>
    <View style={styles.viewone}>
      <Image
        style={styles.getstories2}
        source={{
          uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2589369229.png',
        }}
      />

      <Text
        style={styles.imageonetext}>
        PACHMARHI REGION
      </Text>
    
      
      <View
        style={styles.contentview}>
           <Text style={styles.contenttext}>
           Popularly known as the 'Satpura ki Rani' (Queen of Satpura) is the glorious land called Pachmarhi.
           Pachmarhi is one of the most popular destinations in the Heart of Incredible India and is a treasure trove of rich history and nature's bounty.
          </Text>
        <Text
          style={styles.titletext}>
         Itenary For Pachmarhi Region
        </Text>

 <Text style={styles.contenttext}>
  Pipariya ‐ Tawa ‐ Pachmarhi ‐ Tamia ‐ Patalkot ‐ Pench ‐ Rookhad ‐ Seoni      
</Text>
</View>
          <View style={styles.buttononemMainView}>
               <View
                  style={styles.buttononeview}>
                 
                 <Text
                      style={styles.buttononetext}>
                       4 Nights / 5 Days
                    </Text>
                  
                 </View>
             </View>
  <View  style={styles.daysMainView}>
            {/* ...............days start .........................*/}

         <View  style={styles.daysStartView}>
           <View  style={styles.daysAndIconsView}>
            <View style={styles.DayView}>
              <Text style={styles.DayText}>DAY 1</Text>
            </View>
            <View style={styles.iconOrTextView}>
             <Text style={styles.iconText}>0</Text>
            </View>
            </View>
       
           <View style={styles.daysContentView}>
            <Text  style={styles.daysContentText}>Arrival at Gwalior

              Check In Hotel
              
              Visit Units and sightseeing visit
              
              In the evening enjoy sound and light show
              
              Overnight stay at Gwalior</Text>
           </View>
        </View>



        <View  style={styles.daysStartView}>
           <View  style={styles.daysAndIconsView}>
            <View style={styles.DayView}>
              <Text style={styles.DayText}>DAY 2</Text>
            </View>
            <View style={styles.iconOrTextView}>
             <Text style={styles.iconText}>0</Text>
            </View>
            </View>
       
           <View style={styles.daysContentView}>
            <Text  style={styles.daysContentText}>After breakfast sightseeing visit Gwalior fort,GujariMahal,TelikaMandir, SasBahukaMandir, Ghaus Mohammed’s Tomb

              After lunch visit Chhatri, Man Mandir Palace,Jaivilas Palace &amp;Museum, Tansen Tomb
              
              Evening depart for Shivpuri(112km)
              
              Overnight stay at Shivpuri</Text>
           </View>
        </View>


        <View  style={styles.daysStartView}>
           <View  style={styles.daysAndIconsView}>
            <View style={styles.DayView}>
              <Text style={styles.DayText}>DAY 3</Text>
            </View>
            <View style={styles.iconOrTextView}>
             <Text style={styles.iconText}>0</Text>
            </View>
            </View>
       
           <View style={styles.daysContentView}>
            <Text  style={styles.daysContentText}>After breakfast sightseeing visit Madhav National Park, George castle, Sultan hotel, Baradari, Chhatris, Madhav Vilas Palace

              After lunch depart for Chanderi (127 km)
              
              Evening visit Chanderi market for famous Sarees
              
              Overnight stay at Chanderi</Text>
           </View>
        </View>


        <View  style={styles.daysStartView}>
           <View  style={styles.daysAndIconsView}>
            <View style={styles.DayView}>
              <Text style={styles.DayText}>DAY 4</Text>
            </View>
            <View style={styles.iconOrTextView}>
             <Text style={styles.iconText}>0</Text>
            </View>
            </View>
       
           <View style={styles.daysContentView}>
            <Text  style={styles.daysContentText}>After breakfast sightseeing visit Chanderi fort, Jama Masjid, KoshakMahal, Laxman Temple, ShezadikaRauza and other monuments

              After sightseeing and lunch depart forOrchha (143 km)
              
              Visit units and Sound &amp; Light Show.
              
              Overnight stay at Orchha</Text>
           </View>
        </View>


        <View  style={styles.daysStartView}>
           <View  style={styles.daysAndIconsView}>
            <View style={styles.DayView}>
              <Text style={styles.DayText}>DAY 5</Text>
            </View>
            <View style={styles.iconOrTextView}>
             <Text style={styles.iconText}>0</Text>
            </View>
            </View>
       
           <View style={styles.daysContentView}>
            <Text  style={styles.daysContentText}>After breakfast visit Jahangir Mahal, Raja Mahal, RaiParveenMahal, Ramraja Temple, Chaturbhuj Temple, Laxminarayan Temple, PhoolBagh, SahidSmarak and other Monuments

              Depart for Datia (50 km)
              
              Sightseeing visit Bir Singh Palace, PeetambharaPeeth
              
              Overnight stay at Datia</Text>
           </View>
        </View>


        <View  style={styles.daysStartView}>
           <View  style={styles.daysAndIconsView}>
            <View style={styles.DayView}>
              <Text style={styles.DayText}>DAY 6</Text>
            </View>
            <View style={styles.iconOrTextView}>
             <Text style={styles.iconText}>0</Text>
            </View>
            </View>
       
           <View style={styles.daysContentView}>
            <Text  style={styles.daysContentText}>After breakfast sightseeing visit White Marble Temples and other Monuments

              Depart for Jhansi and drop at Station (34 km)</Text>
           </View>
        </View>
 {/* ...............days start .........................*/}







           

            <View style={{marginTop:40}}>
            <View
                  style={{
                   
                    width: 280,
                    height: 50,
                    backgroundColor: 'darkred',
                    marginHorizontal:20
                  }}>
                  <TouchableOpacity onPress={onPress}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight:'600',
                        color: 'white',
                        paddingHorizontal:10,
                        marginHorizontal:20,
                        marginTop:10
                        
                      }}>
                       REQUEST FOR A CALL BACK
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
           <View><ContactUs/></View>

            <View style={{paddingLeft:10}}>
              <Footer/>
            </View>


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
 viewone:{
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
 },
 imageonetext:{
    position: 'absolute',
    fontSize: 35,
    fontWeight:'800',
    alignSelf: 'center',
    color: 'white',
    paddingTop: 120,
 },
 contentview:{
          width: wp('100%'),
          backgroundColor: 'white',
          paddingBottom:0,
          alignContent: 'center',
          // borderWidth: 2,
          marginTop:50
 },
 contenttext:{
    marginVertical: 1,
    paddingLeft: 5,
     paddingRight: 10,
      fontSize: 18,
      color: 'black', 
 },
  titletext:{
    fontStyle: 'italic',
    fontSize: 34,
    fontWeight: '900',
    fontFamily: 'cursive',
    color: 'darkred',
    paddingLeft: 6,
  },
            buttononemMainView:{
                marginTop:20
            },
           buttononeview:{
                    borderRadius:10,
                    width: 180,
                    height: 40,
                    backgroundColor: 'darkred',
                    marginHorizontal:20
                 },
             buttononetext:{
                       fontSize: 16,
                        fontWeight:'600',
                        alignSelf: 'center',
                        color: 'white',
                        paddingHorizontal:10,
                        marginTop:8
                     },
    daysMainView:{
        width: wp('100%'),
        backgroundColor: 'white',
        marginTop:40
    },
    daysStartView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10
    },
    daysAndIconsView:{
        flexDirection:'row' ,
        justifyContent:'space-between'
    },
    DayView:{
        marginHorizontal:10
    },
    DayText:{fontSize:18,
        color:'darkred',
    },
    iconOrTextView:{
        marginHorizontal:10,
        paddingHorizontal:0
    },
    iconText:{
        fontSize:18,
        color:'darkred',
        fontWeight:'800'
    },
    daysContentView:{
        alignContent:'center',
        marginHorizontal:50,
        paddingHorizontal:30
    },
    daysContentText:{
        marginVertical: 1,
        paddingHorizontal:10,
        fontSize: 18,
        color: 'gray',
    },

  });
export default PackageView