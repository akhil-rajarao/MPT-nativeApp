import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const Footer = () => {
  return (
    <ScrollView>
      <View style={styles. main}>
        <Text></Text>
        <View>
          <Text style={styles.title1}>Quick Links</Text>
        </View>
        <View style={styles.text1}>
          <Text style={{fontWeight:'bold',color:'black'}}> Booking Rules </Text>
          <Text style={{fontWeight:'bold',color:'black'}}>Cancellation Policy</Text>
          <Text style={{fontWeight:'bold',color:'black'}}>Contact Us</Text>
          <Text style={{fontWeight:'bold',color:'black'}}>FAQS</Text>
          <Text style={{fontWeight:'bold',color:'black'}}>Booking Through Mp Online</Text>
          <Text style={{fontWeight:'bold',color:'black'}}>Madhya Pradesh Tourism Board</Text>
          <Text style={{fontWeight:'bold',color:'black'}}>Genaral Sales Agents</Text>
          <Text style={{fontWeight:'bold',color:'black'}}>Institutions</Text>
          <Text style={{fontWeight:'bold',color:'black'}}>Jungel Safari Booking (Forest Department)</Text>
        </View>
        <View>
          <Text style={styles.title2}>Address</Text>
          <View>
            <Text style={styles.title3}>HEAD OFFICE - BHOPAL</Text>
            <View style={styles.text2}>
              <Text style={{fontWeight:'bold',color:'black'}}>Business Development & Marketing Paryatan</Text>
              <Text style={{fontWeight:'bold',color:'black'}}>Bhawan . Bhadbhada Road , Bhopal - 462003</Text>
              <Text style={{fontWeight:'bold',color:'black'}}>TEL : 0755-4027132/163</Text>
              <Text style={{fontWeight:'bold',color:'black'}}>FAX: 0755-2779476 , 2774289</Text>
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
    fontSize: 25,
    fontWeight:'bold',
    fontStyle:'italic',
    color: 'black',
  },
  title2: {
    // fontFamily: 'Times, serif',
    fontSize: 25,
    fontWeight:'bold',
    fontStyle:'italic',
    color: 'black',
  },
  title3: {
    fontSize: 20,
    fontWeight:'bold',
    fontStyle:'italic',
    color: 'black',
  },
  title4: {
    fontSize: 25,
    fontWeight:'bold',
    fontStyle:'italic',
    color: 'black',
  },
  underline: {
    width: '90%',
    borderBottomWidth: 4,
    borderColor: 'black',
    paddingTop:10,
  },
  icons: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  main:{
    paddingLeft:10,
  },
  text2:{
    justifyContent: 'flex-start',
    fontWeight:'bold',
    fontSize:15,
    
  },
  text1:{
  alignItems:'flex-start',
  
  
  },
});

export default Footer;
