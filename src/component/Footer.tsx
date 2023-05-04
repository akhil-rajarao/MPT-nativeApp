import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView>
      <View style={styles.container}>
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
          <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
            <Text style={styles.text}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ContactUS')}>
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>

          <Text style={styles.text}>FAQs</Text>
          <Pressable
            onPress={() => Linking.openURL('https://mpstdc.mponline.gov.in/')}>
            <Text style={styles.text}>Booking Through MpOnline</Text>
          </Pressable>
          <Pressable
            onPress={() => Linking.openURL('https://www.mptourism.com/')}>
            <Text style={styles.text}>Madhya Pradesh Tourism Board</Text>
          </Pressable>
          <Text style={styles.text}>Genaral Sales Agents</Text>
          <Pressable onPress={() => navigation.navigate('Institutions')}>
            <Text style={styles.text}>Institutions</Text>
          </Pressable>
          <Pressable
            onPress={() => Linking.openURL('https://forest.mponline.gov.in/')}>
            <Text style={styles.text}>
              Jungel Safari Booking (Forest Department)
            </Text>
          </Pressable>
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
          <Text style={{marginTop:20}}>FOLLOW US</Text>
          <Text style={styles.underline}></Text>

          <View style={styles.icons}>
            <TouchableOpacity onPress={() => Linking.openURL("https://in.pinterest.com/MpTourismDotCom/")}>
            <Icon name="pinterest" size={30} color="darkgray" />
            </TouchableOpacity>


            <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/MPSTDCofficial")}>
            <Icon name="twitter" size={30} color="darkgray" />
            </TouchableOpacity>


            <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/mpstdcofficial/?theme=dark")}>
            <Icon name="instagram" size={30} color="darkgray" />
            </TouchableOpacity>


            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/company/mpt-hotels-resorts?original_referer=https%3A%2F%2Fmpstdc.com%2F")}>
            <Icon name="linkedin" size={30} color="darkgray" />
            </TouchableOpacity>


            <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/channel/UC8JZ2BzI6ltAlcVRLR4ujEA")}>
            <Icon name="youtube" size={30} color="darkgray" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:20,marginLeft:10}}>
          <Text style={styles.text}>Designed by XILP</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
     marginLeft:10,
     marginBottom:30
  },
  title: {
    fontSize: 18,
    color: 'darkgray',
    fontWeight: 'bold',
    marginTop: 20,
  },

  title4: {
    fontSize: 15,
    color: 'black',
  },
  underline: {
    width: '80%',
    borderBottomWidth: 4,
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
    color: 'gray',
    letterSpacing:1
  },
});

export default Footer;
