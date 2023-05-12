import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';



import React from 'react';
// import {Image} from 'react-native';
import {StyleSheet} from 'react-native';

// import {Button} from 'react-native-elements';
// import style from '../mice&facilities/style';
// import {DataTable} from 'react-native-paper';
// import {Table, Row, Rows} from 'react-native-table-component';
import { Table, Row, Rows } from 'react-native-table-component';

import Footer from '../../../component/Footer';
import ContactUs from '../../../component/common/ContactUs';
import { useNavigation } from '@react-navigation/native';



const Tender = () => {
  const header = [
    'Tender No',
    'Subject',
    'Corrigendum/ Clarification/ Addendum',
    'publication Date',
    'Submission Date',
  ];

  const data = [
    ['1' , 'NIT No.: 2044/SpaPalash/2023',  'MPSTDC INVITES OFFERS FOR SELECTION OF AN AGENCY FOR RENTING OF SPA CENTRE AT PALASH RESIDENCY, BHOPAL',  '06-04-2023',  '03-05-2023'],
    // ['sample' , 'sample',  'sample',  'sample',  'sample'],
    // ['sample' , 'sample',  'sample',  'sample',  'sample'],
    // ['sample' , 'sample',  'sample',  'sample',  'sample'],
    // ['sample' , 'sample',  'sample',  'sample',  'sample'],
];

const navigation = useNavigation<any>();
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
         <Text style={styles.titlecss}>TENDERS</Text>
        </View>
       
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.buttoncss}>
            <Text style={styles.buttonText}>Current Tenders</Text>
          </TouchableOpacity>
          <Pressable onPress={() => navigation.navigate('TendorArchive')}>
          <Text style={styles.archiveText}>Tender Archive (Click Here)</Text>
          </Pressable>
          <TextInput style={styles.input} placeholder="Search by Title" />
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Reset</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttoncss3}>
            <Text style={styles.buttonText2}>Apply for tenders</Text>
          </TouchableOpacity>
          {/* <Table
            borderStyle={{
              borderWidth: 2,
              borderColor: '#c8e1ff',
            }}>
            <Row data={header} />
            <Rows data={data} />
          </Table> */}

<View  style={styles.container}>
      {/* <Table>
        <Row data={header} style={styles.head} textStyle={styles.text}/>
        <Rows  data={data} style={styles.datarow}  textStyle={styles.text2} />
      </Table> */}
    </View>
    <View>
      <Text style={styles.record}>Record Not Found</Text>
    </View>


        </View>
        <View style={styles.lastview}>
       <ContactUs/>
       </View>
       <View style={styles.last2view}>
       <Footer/>
        
       </View>
      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imagestyles:{
    width:wp('100%'),
    height:hp('45%'),
    position:'relative',
  },
 
  titlecss: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    position:'absolute',
   paddingHorizontal:120,
   paddingTop:130,
   color:'white'
  },
  ButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  innerContainer: {
    padding: 20,
  },
  buttoncss2: {
    borderColor: '0ECAF0',
    borderWidth: 1,
    width: 100,
    borderRadius: 10,
    marginTop: 20,
    color: '#000000',
    margin: 3,
  },

  buttoncss3: {
    borderColor: '0ECAF0',
    borderWidth: 1,
    width: 180,
    borderRadius: 10,
    color: '#000000',
    margin: 3,
    marginBottom: 10,
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    width: 170,
    borderRadius: 10,
  },
  buttoncss: {
    backgroundColor: '#bd1b1b',
    width: 170,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 17,
    padding: 10,
    fontWeight: 'bold',
  },
  buttonText2: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 17,
    padding: 10,
  },
  archiveText: {
    color: '#198753',
    fontSize: 18,
    marginTop: 16,
  },
  head:{
    height:120,
    backgroundColor:'darkred'
  },
  text:{
    marginHorizontal:5,
    color:'white',
    fontSize:15
  },
  text2:{
    marginHorizontal:5,
    color:'black'
  },
  datarow:{
    height:400,
    
    backgroundColor:'white',
    
   },
   container:{
   
    padding:0,
    paddingTop:30,
    // backgroundColor:'red'
   },
   record:{
    paddingHorizontal:90,
    fontSize:18,
   },
   lastview:{
    marginTop:50,
    
   },
   last2view:{
    marginLeft:10
   },
  
});

export default Tender;
