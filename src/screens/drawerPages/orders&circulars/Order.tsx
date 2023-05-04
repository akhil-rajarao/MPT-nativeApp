import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';


import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Row, Rows, Table} from 'react-native-table-component';
import ContactUs from '../../../component/common/ContactUs';
import Footer from '../../../component/Footer';



const Events = () => {
  const header = ['Tender No.', 'Subject', 'Corrigendum/ Clarification/ Addendum', 'Publication Date','Submission Date'];
  const data = [['sample', 'sample', 'sample', 'sample', 'sample']];
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
           <Text style={styles.titlecss}>ORDERS</Text>
        </View>
       
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.buttoncss}>
            <Text style={styles.buttonText}>Current Orders</Text>
          </TouchableOpacity>
          <Text style={styles.archiveText}>Order Archive (Click Here)</Text>
          <TextInput style={styles.input} placeholder="Search by Tender No./S" />
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Reset</Text>
            </TouchableOpacity>
            
          </View>
          <View>
            <TouchableOpacity style={styles.buttoncs4}>
              <Text style={styles.buttonText2}>APPLY FOR Orders</Text>
            </TouchableOpacity>
            </View>

          {/* <Table
            borderStyle={{
              borderWidth: 2,
              borderColor: '#c8e1ff',
            }}>
            <Row data={header} />
            <Rows data={data} />
          </Table> */}
           <View  style={styles.container}>
      <Table>
        <Row data={header} style={styles.header} textStyle={styles.text}/>
        {/* <Rows  data={data} style={styles.datarow}  textStyle={styles.text2} /> */}
      </Table>
    </View>
      <View>
      <Text style={styles.notifiction}>
          Record Not Found
        </Text>
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

const styles = StyleSheet.create({
  titlecss: {
    fontSize: 30,
    // textAlign: 'center',
    paddingHorizontal:130,
    marginTop: 120,
    fontWeight: 'bold',
    position:'absolute',
    color:'white'
  },
  ButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  innerContainer: {
    padding: 10,
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
  buttoncs4: {
    borderColor: '0ECAF0',
    borderWidth: 1,
    width: 180,
    borderRadius: 10,
    marginTop: 20,
    color: '#000000',
    margin: 3,
  },

  // buttoncss2: {
  //   borderColor: '0ECAF0',
  //   borderWidth: 1,
  //   width: 100,
  //   borderRadius: 10,
  //   marginTop: 20,
  //   color: '#000000',
  //   margin: 3,
  // },
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
  imagestyles:{
    width:wp('100%'),
    height:hp('40%'),
    position:'relative',
  },
  container:{
   
    padding:0,
    paddingTop:20,
    // backgroundColor:'red'
     marginTop:40
   },
   header:{
    height:130,
    backgroundColor:'darkred'
    
  },
  text:{
    marginHorizontal:10,
    color:'white',
    fontSize:15
  },
  datarow:{
    height:50,
    
    backgroundColor:'white',
    
   },
   text2:{
    marginHorizontal:10,
    color:'black'
  },
  notifiction:{
    marginHorizontal: 30
  },
  lastview:{
    marginLeft:10
  },
});

export default Events;
