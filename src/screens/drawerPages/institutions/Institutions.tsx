import {ScrollView, Text, View} from 'react-native';

import React from 'react';
// import {Image} from 'react-native';
import {StyleSheet} from 'react-native';

// import {Button} from 'react-native-elements';
// import style from '../mice&facilities/style';

const Institutions = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.titleText}>INSTITUTIONS</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.headingText}>MPIHTTS</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.innerHeading}>
              Madhya Pradesh Institute of Hospitality, Travel & Tourism Studies,
              Bhopal
            </Text>
            <Text style={styles.secondaryText}>
              M. P. Institute of Hospitality, Travel & Tourism Studies Paryatan
              Bhawan, Bhadbhada Road, Bhopal - 462003
            </Text>
          </View>
        </View>
        <Text style={styles.secTitle}>Food Craft Institute</Text>
        <View style={styles.innerContainer2}>
          <Text style={styles.headingText}>REWA</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.secondaryText}>
              Behind RTO office, Ratahara, Rewa, Teh.- Huzur , Dist.Rewa 486001
              Contact: 07662-297228, 8435766076 E-mail:
              principal.feirewa@mp.gov.in Website: http://fcirewa.mp.gov.in/ :
            </Text>
          </View>
        </View>
        <View style={styles.innerContainer2}>
          <Text style={styles.headingText}>KHAJURAHO</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.secondaryText}>
              Near Hotel Payal, Dist. - Chhatarpur, M.P. - 471606 Contact:
              9993861664, 07686-297355 E-mail: principal.fcikhj@mp.gov.in
              Website: http://www.fcikhj.mp.gov.in/
            </Text>
          </View>
        </View>
        <Text style={styles.secTitle}>State Institute of Hotel Management</Text>
        <View style={styles.innerContainer2}>
          <Text style={styles.headingText}>INDORE</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.secondaryText}>
              Qtr. No. 102, SIHM Campus, Tarik Khan ki Tekri, Near DPS Rau,
              Indore - 453331 Contact: 07662-297228, 8435766076 E-mail: Not
              Available Website: http://www.sihmind.mp.gov.in/
            </Text>
          </View>
        </View>
        <View style={styles.innerContainer2}>
          <Text style={styles.headingText}>JABALPUR</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.secondaryText}>
              Airport Road, Dumna, Near IIITDM, P.O Khamaria, Jabalpur - 482005
              | Contact: 0761-2639400, 9407124391 E-mail:
              principal.sihmjbp@mp.gov.in: Website: http://sihmjbp.mp.gov.in/
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 40,
  },
  innerContainer: {
    margin: 10,
    border: 'solid',
    borderWidth: 2,
    borderColor: 'black',
  },
  innerContainer2: {
    margin: 10,
    border: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },
  headingText: {
    textAlign: 'center',
    backgroundColor: '#BD1B1B',
    color: '#ffffff',
    fontSize: 20,
    padding: 5,
  },
  innerHeading: {
    fontSize: 17,
    textAlign: 'center',
  },
  detailsContainer: {
    padding: 20,
  },
  secondaryText: {
    color: '#757575',
    textAlign: 'center',
    fontSize: 17,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
    borderRadius: 10,
  },
  secTitle: {
    textAlign: 'center',
    backgroundColor: '#BD1B1B',
    color: '#ffffff',
    fontSize: 17,
    padding: 13,
    margin: 10,
    fontWeight: 'bold',
  },
});

export default Institutions;
