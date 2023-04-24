import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView>
      <View>
        <View>
          <Text style={styles.title}>Quick Links</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('BookingRules')}>
            <Text style={styles.text}>Booking Rules</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cancel')}>
            <Text style={styles.text}>Cancellation Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>

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
              <Text style={styles.text}>
                Bhawan . Bhadbhada Road , Bhopal - 462003
              </Text>
              <Text style={styles.text}>TEL : 0755-4027132/163</Text>
              <Text style={styles.text}>FAX: 0755-2779476 , 2774289</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>FOLLOW US</Text>
          <Text style={styles.underline}></Text>

          <View style={styles.icons}>
            {/* <Icon name="p" size={30} color=" gray" /> */}

            <Icon name="twitter" size={30} color="darkgray" />

            <Icon name="instagram" size={30} color="darkgray" />

            <Icon name="linkedin" size={30} color="darkgray" />

            <Icon name="youtube" size={30} color="darkgray" />
          </View>
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
    color: 'black',
  },
  underline: {
    width: '70%',
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  icons: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-around',
    paddingRight: 150,
  },
  text: {
    marginTop: 5,
    color: 'grey',
  },
});

export default Footer;
