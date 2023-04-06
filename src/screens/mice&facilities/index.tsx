import React from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const MiceandFacilities = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../../assets/images/caravan.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
        />
        <Text style={styles.text}>Facilities</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/caravan.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.exploreText}>Explore MP in Caravan..</Text>
          <Text style={styles.caravanText}>CARAVAN</Text>
          <Text style={styles.discription}>
            Caravan Tourism, is and innovative transport initiative taken by
            Madhya Pradesh Tourism to let the travelers have a comfortable
            journey while enjoying the enchanting landscapes of the State. To
            offer a unique travelling experience to the tourist, Caravans are
            specially designed vehicles for the excitement seeker. We have two
            types of Caravans - Luxury and Deluxe to suit your requirement.
          </Text>
          <Pressable style={styles.buttonN}>
            <Text style={styles.textN}>PACKAGES</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/micetwo.jpg')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.caravanText}>
            MPT Kushabhau Thakre Hall International Convention Centre
          </Text>
          <Text style={styles.discription}>
            Minto Hall Convention Center is a unique and versatile venue that
            combines the charm of a historic building with the modern amenities
            necessary for hosting successful events. Its central location in
            Bhopal, combined with its rich cultural and architectural
            significance, make it a popular choice for conferences, exhibitions,
            and other gatherings. The convention center features a range of
            facilities, including a large main hall that can accommodate up to
            500 guests, several smaller meeting rooms and conference halls, and
            a spacious lawn area for outdoor events. The main hall is equipped
            with state-of-the-art audiovisual technology, including high-quality
            sound systems, projectors, and screens, making it ideal for hosting
            large-scale presentations and conferences.
          </Text>
          <Pressable style={styles.buttonN}>
            <Text style={styles.textN}>EXPLORE HERE</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/micethree.jpg')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.caravanText}>
            Maharaja Chhatrasal Convention Centreé
          </Text>
          <Text style={styles.discription}>
            The UNESCO World Heritage site Khajuraho attracts tourists for its
            mesmerising temples. Adding on more to its features is a convention
            center with brilliant facilities. Named as Maharaja Chhatrasal
            Convention Center Khajuraho, this venue will cater to all your
            business needs. Make your corporate events a great success by
            hosting meetings, conferences here.
          </Text>
          <Pressable style={styles.buttonN}>
            <Text style={styles.textN}>EXPLORE HERE</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/micefour.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.caravanText}>MPT DDX Drive In Cinema</Text>
          <Text style={styles.discription}>
            MPT Hotels & Resorts is excited to invite you to our Open Air 'Drive
            In' Cinema the "MPT DDX Drive In Cinema" at MPT Lake View Residency,
            Bhopal. To book your tickets visit : To book your tickets visit :
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#F7DFDE',
    padding: 20,
  },
  buttonN: {
    backgroundColor: '#bd1b1b',
    padding: 7,
    borderRadius: 10,
    margin: 7,
  },
  textN: {
    color: '#ffffff',
    fontSize: 20,
  },
  buttonText: {
    fontSize: 20,
    width: 120,
    backgroundColor: 'red',
    marginTop: 20,
  },
  discription: {
    fontSize: 20,
    textAlign: 'center',
  },
  caravanText: {
    fontSize: 25,
    color: 'red',
    margin: 7,
  },
  text: {
    color: 'red',
    fontSize: 40,
  },
  exploreText: {
    color: '#757575',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
  innerContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});

export default MiceandFacilities;
