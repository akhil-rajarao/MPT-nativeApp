import { View, Text, StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity, } from 'react-native'
import React, { useEffect } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
  import Icon from 'react-native-vector-icons/Feather';
  import Entypo from 'react-native-vector-icons/Entypo'
import Footer from '../../component/Footer';
import ContactUs from '../../component/common/ContactUs';
import useAppDispatch, { useAppSelector } from '../../app/hooks';
import { ItenaryData } from '../../screens/config';
import { useRoute } from '@react-navigation/native';
const PackageView = () => {
    const onPress = () => '';
    const dispatch = useAppDispatch()

    const route = useRoute();

    const {city}: any = route.params;
     
    console.log("cityyyyy",city)
    const item = useAppSelector(state => state.dashboard.packageItem);

    const packageData :any = ItenaryData[city];

    console.log("itwemmm",packageData)

    useEffect(() => {
      // dispatch(getPageDataGo(98667108));
    }, []);
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
             {/* <Entypo name="flow-line" size={70} color="red"  /> */}
            </View>
            </View>
       
           <View style={styles.daysContentView}>
            <Text  style={styles.daysContentText}>
              {packageData[0].activities[0]}
              {"\n"}
              {packageData[0].activities[1]}
              {"\n"}

              {packageData[0].activities[2]}
              {"\n"}

              {packageData[0].activities[3]}

            </Text>
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
            <Text  style={styles.daysContentText}>
            {packageData[1].activities[0]}
                      {"\n"}

              {packageData[1].activities[1]}
              {"\n"}

              
              {packageData[1].activities[2]}
              {"\n"}

              
              {packageData[1].activities[3]}
              {"\n"}
              {packageData[1].activities[4]}
            </Text>
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
            <Text  style={styles.daysContentText}>            
              {packageData[2].activities[0]}
                      {"\n"}

              {packageData[2].activities[1]}
              {"\n"}

              
              {packageData[2]?.activities[2]}
              {"\n"}

              
              {packageData[2]?.activities[3]}
              {"\n"}

</Text>
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
            <Text  style={styles.daysContentText}>

            {packageData[3].activities[0]}
                      {"\n"}

              {packageData[3].activities[1]}
              {"\n"}

              
              {packageData[3].activities[2]}
              {"\n"}

              
              {packageData[3].activities[3]}
              {"\n"}
</Text>
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
            <Text  style={styles.daysContentText}>
            {packageData[4].activities[0]}
            {"\n"}

              {packageData[4].activities[1]}
              {"\n"}

              
              {packageData[4].activities[2]}
              {"\n"}

              
              {packageData[4].activities[3]}
              {"\n"}
            </Text>
           </View>
        </View>


        {/* <View  style={styles.daysStartView}>
           <View  style={styles.daysAndIconsView}>
            <View style={styles.DayView}>
              <Text style={styles.DayText}>DAY 6</Text>
            </View>
            <View style={styles.iconOrTextView}>
             <Text style={styles.iconText}>0</Text>
            </View>
            </View>
       
           <View style={styles.daysContentView}>
            <Text  style={styles.daysContentText}>
            {packageData[5].activities[0]}
                      {"\n"}

              {packageData[5].activities[1]}
              {"\n"}

              
              {packageData[5].activities[3]}
              {"\n"}

              
              {packageData[5].activities[3]}
              {"\n"}
            </Text>
           </View>
        </View> */}
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
        // width: wp('100%'),
        backgroundColor: 'white',
        marginTop:40
    },
    daysStartView:{
        flexDirection:'row',
        justifyContent:'space-between',
        // marginHorizontal:10
        width:wp("100%")
    },
    daysAndIconsView:{
        flexDirection:'row' ,
        justifyContent:'space-between',
        width:wp("25%")
    },
    DayView:{
        // marginHorizontal:10
        width:("75%")
    },
    DayText:{fontSize:18,
        color:'darkred',
    },
    iconOrTextView:{
        width:wp("25%")
    },
    iconText:{
        fontSize:18,
        color:'darkred',
        fontWeight:'800'
    },
    daysContentView:{
        alignContent:'center',
        // marginHorizontal:20,
        // paddingHorizontal:30
    },
    daysContentText:{
        marginVertical: 1,
        // paddingHorizontal:10,
        fontSize: 16,
        color: 'gray',
    },

  });
export default PackageView