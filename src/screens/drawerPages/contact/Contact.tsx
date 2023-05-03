

import { View,Text,ScrollView,Image,StyleSheet } from "react-native";

import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ContactUs from "../../../component/common/ContactUs";
import Footer from "../../../component/Footer";


const Contact = () => {
  return (
    <ScrollView>
      <View>
      <View>
        <Image
            style={styles.imagestyles}
            source={{
              uri: `https://mpstdc.com/assets/similar.da06dae7.jpg`,
            }}
          />
           <Text style={styles.titleText}>CONTACT US</Text>
        </View>
       <View style={styles.seconddivision}>
        <View style={styles.innerContainer}>
          <Text style={styles.headingText}>ADVANCE BOOKING</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
            </Text>
            <Text style={styles.secondaryText}>
            Business Development & Marketing
            Paryatan Bhawan, Bhadbhada Road, Bhopal -462003
             TEL: 0755-4027132/ 163 FAX: 0755-2779476, 2774289
             Tourist Helpline (Toll Free): 1800 233 7777 Timing: (10 AM to 6 PM )
            (Sunday holiday, Saturday and other holiday Half Day)
             E-mail: mpthelpline@mpstdc.com
            </Text>
          </View>
        </View>
        </View>
          
          <View style={styles.seconddivision}>
          <Text style={styles.secTitle}>MARKETING OFFICES</Text>
     
            <View style={styles.innerContainer}>
             <Text style={styles.headingText}>AHMEDABAD</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              219, 'Supermall' IInd Floor, Near Lal Bungalow, C.G.Road,Ahmedabad-380006

             Contact: 079-26462977 Telefax: 079-26462978

              E-mail: ahmedabad@mp.gov.in
             </Text>
              </View>
             </View>
             {/* ................................. */}
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>HYDERABAD</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              Groud Floor, Balyogi Paryatak Bhavan, Opp. ITC Kakatiya Hotel, Begumpet Main road,Hyderabad-500016

               Contact: 040-40034319 Telefax: 040-23407785

               E-mail: mohyderabad@mp.gov.in
             </Text>
              </View>
             </View>
             {/* ............................. */}
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>KOLKATA</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              'Chitrakoot', Room No.67, 6th Floor 230-A, A.J.C Bose Road,Kolkata-700 020

               Contact: 033-22833526 Telefax: 033-22875855

              E-mail: mokolkata@mp.gov.in
             </Text>
              </View>
             </View>
               {/* ........................................ */}
               <View style={styles.innerContainer}>
             <Text style={styles.headingText}>MUMBAI</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              Madhyalok Bhawan (M P Bhawan), Plot no. 23 & 24, Sector 30A, Behind CIDCO Exhibition Center, Vashi, Navi Mumbai - 400703

                Contact: 022-27811093, 27811485 Telefax:

                E-mail: mumbai@mp.gov.in
             </Text>
              </View>
             </View>
             {/* ................................................. */}
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>NEW DELHI</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              56, Alps Building, Ground Floor, Opposite - Janpath Market, Near Yes Bank, New Delhi-110001

Contact: 011-23326528, 23711185, 23311186 Telefax:

E-mail: modelhi@mp.gov.in
             </Text>
              </View>
             </View>
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>NAGPUR</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              407-A, 4th Floor, Lokmat Bhawan, Wardha Road, nagpur - 440012

Contact: 0712-2442378,325900 Telefax: 0712-2423374

E-mail: nagpur@mp.gov.in
             </Text>
              </View>
             </View>
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>RAIPUR</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              Office No.1, Mahant Guru Ghasidas Museum Campus, Ghadi Chowk, Civil Lines, Raipur (C.G.)

Contact: 0771-4048810, 9028838128 Telefax

E-mail: raipur@mp.gov.in
             </Text>
              </View>
             </View>
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>JAIPUR</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              108,City Pearl Complex, Opp. Hotel Gangaur,Vidhayak Puri Road, Jaipur-302001

Contact: 7880108605

E-mail: jaipur@mpstdc.com
             </Text>
              </View>
             </View>
         </View>
         
  <View style={styles.seconddivision}>
  <Text style={styles.secTitle}>REGIONAL/TOURIST OFFICES</Text>
     
         <View style={styles.innerContainer}>
             <Text style={styles.headingText}>KHAJURAHO</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              Tourist Interpretation & Facilitation Center Near Circuit House, khajuraho

              Contact: 07686-274051 Telefax: 07686-272330

               E-mail: khajuraho@mp.gov.in 
             </Text>
              </View>
             </View>
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>JHANSI</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              Railway Station, Jhansi

             Contact: 0510-2442622 Telefax:

              E-mail: tojhansi@mp.gov.in
             </Text>
              </View>
             </View>
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>INDORE</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              42, Residency Area Opp.Saint Paul H.S.School, Indore

              Contact: 0731-2499566, 2499466, 7869982222 Telefax: 0731-2491345

              E-mail: indore@mp.gov.in
             </Text>
              </View>
             </View>
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>INDORE</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              Airport Counter Indore

              Contact: 0731-2620404 Telefax:

               E-mail: indoreairport@mpstdc.com
             </Text>
              </View>
             </View>
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>JHANSI</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              Railway Station, Jhansi

Contact: 0510-2442622 Telefax

E-mail: tojhansi@mp.gov.in
             </Text>
              </View>
             </View>
             <View style={styles.innerContainer}>
             <Text style={styles.headingText}>PACHMARHI</Text>
             <View style={styles.detailsContainer}>
              {/* <Text style={styles.innerHeading}>
              HEAD OFFICE-BHOPAL
              </Text> */}
              <Text style={styles.secondaryText}>
              Amaltas Complex Near tehsil, Pachmarhi

Contact: 07578-252100 Telefax: 07578-252102

E-mail: pachmarhi@mp.gov.in
             </Text>
              </View>
             </View>
   </View>
   
     <View>
      <ContactUs/>
     </View>
     <View style={styles.lastview}>
      <Footer/>
     </View>
      </View>
    </ScrollView>
  );
};

export default Contact;
const styles = StyleSheet.create({
  imagestyles:{
    width:wp('100%'),
    height:hp('40%'),
    position:'relative',
  },
  titleText: {
    marginTop: 120,
    alignSelf: 'center',
    fontSize: 40,
    position:'absolute',
    color:'white'
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
  
  innerContainer: {
    margin: 10,
    border: 'solid',
    borderWidth: 2,
    borderColor: 'black',
  },
  headingText: {
    textAlign: 'center',
    backgroundColor: '#BD1B1B',
    color: '#ffffff',
    fontSize: 20,
    padding: 5,
  },
  detailsContainer: {
    padding: 20,
  },
  innerHeading: {
    fontSize: 19,
    textAlign: 'center',
    color:'black',
  },
  secondaryText: {
    color: '#757575',
    textAlign: 'center',
    fontSize: 17,
  },
  seconddivision:{
    marginTop:50
  },
  lastview:{
    marginLeft:10
  },
  
})
