import {ScrollView, StyleSheet, Text, View} from 'react-native';

// import IcFon from 'react-native-vector-icons/Entypo';
import React from 'react';

const Footer = () => {
  return (
    <ScrollView>
      <View>
        <View>
          <Text style={styles.title}>Quick Links</Text>
        </View>
        <View>
          <Text style={styles.text}>Booking Rules</Text>
          <Text style={styles.text}>Cancellation Policy</Text>
          <Text style={styles.text}>Contact Us</Text>
          <Text style={styles.text}>FAQS</Text>
          <Text style={styles.text}>Booking Through Mp Online</Text>
          <Text style={styles.text}>Madhya Pradesh Tourism Board</Text>
          <Text style={styles.text}>Genaral Sales Agents</Text>
          <Text style={styles.text}>Institutions</Text>
          <Text style={styles.text}>
            Jungel Safari Booking (Forest Department)
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Address</Text>
          <View>
            <Text style={styles.title}>HEAD OFFICE - BHOPAL</Text>
            <View>
              <Text style={styles.text}>
                Business Development & Marketing Paryatan
              </Text>
              <Text>Bhawan . Bhadbhada Road , Bhopal - 462003</Text>
              <Text style={styles.text}>TEL : 0755-4027132/163</Text>
              <Text>FAX: 0755-2779476 , 2774289</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>FOLLOW US</Text>
          <Text style={styles.underline}></Text>

          {/* <View style={styles.icons}>
            <Icon name="pinterest-with-circle" size={30} color=" gray" />

            <Icon name="twitter-with-circle" size={30} color=" gray" />

            <Icon name="instagram-with-circle" size={30} color=" gray" />

            <Icon name="linkedin-with-circle" size={30} color=" gray" />

            <Icon name="youtube-with-circle" size={30} color=" gray" />
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: 'gray',
    fontWeight: '500',
    marginTop: 20,
  },

  title4: {
    fontSize: 15,
    color: 'gray',
  },
  underline: {
    width: '70%',
    borderBottomWidth: 2,
    borderColor: 'gray',
  },
  icons: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-around',
    paddingRight: 150,
  },
  text: {
    marginTop: 5,
  },
});

export default Footer;