import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Footer = () => {
  return (
    <ScrollView>
      <View style={styles. main}>
      <View>
          <Image
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
         
        </View>
        <Text></Text>
        <View>
          <Text style={styles.title1}>Quick Links</Text>
        </View>
        <View style={styles.text1}>
          <Text style={{fontWeight:'500',color:'gray'}}> Booking Rules </Text>
          <Text style={{fontWeight:'500',color:'gray'}}>Cancellation Policy</Text>
          <Text style={{fontWeight:'500',color:'gray'}}>Contact Us</Text>
          <Text style={{fontWeight:'500',color:'gray'}}>FAQS</Text>
          <Text style={{fontWeight:'500',color:'gray'}}>Booking Through Mp Online</Text>
          <Text style={{fontWeight:'500',color:'gray'}}>Madhya Pradesh Tourism Board</Text>
          <Text style={{fontWeight:'500',color:'gray'}}>Genaral Sales Agents</Text>
          <Text style={{fontWeight:'500',color:'gray'}}>Institutions</Text>
          <Text style={{fontWeight:'500',color:'gray'}}>Jungel Safari Booking (Forest Department)</Text>
        </View>
        <View>
          <Text style={styles.title2}>Address</Text>
          <View>
            <Text style={styles.title3}>HEAD OFFICE - BHOPAL</Text>
            <View style={styles.text2}>
              <Text style={{fontWeight:'500',color:'gray'}}>Business Development & Marketing Paryatan</Text>
              <Text style={{fontWeight:'500',color:'gray'}}>Bhawan . Bhadbhada Road , Bhopal - 462003</Text>
              <Text style={{fontWeight:'500',color:'gray'}}>TEL : 0755-4027132/163</Text>
              <Text style={{fontWeight:'500',color:'gray'}}>FAX: 0755-2779476 , 2774289</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title4}>FOLLOW US</Text>
          <Text style={styles.underline}></Text>

          <View style={styles.icons}>
            <Text>
              <Icon name="pinterest-with-circle" size={40} color=" gray" />
            </Text>
            <Text>
              <Icon name="twitter-with-circle" size={40} color=" gray" />
            </Text>
            <Text>
              <Icon name="instagram-with-circle" size={40} color=" gray" />
            </Text>
            <Text>
              <Icon name="linkedin-with-circle" size={40} color=" gray" />
            </Text>
            <Text>
              <Icon name="youtube-with-circle" size={40} color=" gray" />
            </Text>
          </View>
        </View>
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title1: {
    // fontFamily: 'Times, serif',
    fontSize: 19,
    fontWeight:'700',
    // fontStyle:'italic',
    color: 'gray',
    paddingTop:10,
  },
  title2: {
    // fontFamily: 'Times, serif',
    fontSize: 19,
    fontWeight:'700',
    // fontStyle:'italic',
    color: 'gray',
    paddingTop:10,
  },
  title3: {
    fontSize: 19,
    fontWeight:'700',
    // fontStyle:'italic',
    color: 'gray',
    paddingTop:10,
  },
  title4: {
    fontSize: 19,
    fontWeight:'700',
    // fontStyle:'italic',
    color: 'gray',
    paddingTop:10,
  },
  underline: {
    width: '80%',
    borderBottomWidth: 4,
    borderColor: 'black',
    paddingTop:0,
  },
  icons: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  main:{
    paddingLeft:5,
    paddingTop:2,
  },
  text2:{
    justifyContent: 'flex-start',
    fontWeight:'600',
    fontSize:16,
    
  },
  text1:{
  alignItems:'flex-start',
  
  
  },
  getstories2: {
    height: hp('30%'),
    width: wp('100%'),
    paddingTop: 2,
  },
  exploreOpacity: {
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    fontColor: 'black',
    fontSize: 30,
    opacity: 0.1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  exploreText: {
    fontSize: 40,
    fontFamily:'cursive',
    color: 'white',
    position: 'absolute',
    top: 10,
    fontWeight: '900',
    alignSelf: 'center',
    paddingLeft: 10,
    opacity: 1.5,
  },
  tex: {
    fontSize: 15,
    color: 'white',
    position: 'absolute',
    top: 60,
    fontWeight: '600',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    opacity: 1.5,
  },
  secondtex: {
    fontSize: 15,
    color: 'white',
    position: 'absolute',
    top: 80,
    fontWeight: '600',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    opacity: 1.5,
  },
  thirdtex: {
    fontSize: 15,
    color: 'white',
    position: 'absolute',
    top: 100,
    fontWeight: '600',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    opacity: 1.5,
  },
  fourthtex: {
    fontSize: 15,
    color: 'white',
    position: 'absolute',
    top: 180,
    fontWeight: '600',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    opacity: 1.5,
  },
});

export default Footer;
