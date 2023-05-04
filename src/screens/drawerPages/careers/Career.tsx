import {Row, Rows, Table} from 'react-native-table-component';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import React from 'react';
import {StyleSheet} from 'react-native';
import ContactUs from '../../../component/common/ContactUs';
import Footer from '../../../component/Footer';

const Career = () => {
  const header = ['S.No', 'Title', 'Published Date', 'Last Submission Date','Details'];
  const data = [['sample', 'sample', 'sample','gopi']];
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
           <Text style={styles.titlecss}>CAREERS</Text>
        </View>
       
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.buttoncss}>
            <Text style={styles.buttonText}>Current Openings</Text>
          </TouchableOpacity>
          <Text style={styles.archiveText}>Click Archive (Click Here)</Text>
          <TextInput style={styles.input} placeholder="Search by Title" />
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Reset</Text>
            </TouchableOpacity>
          </View>
          {/* <Table>
            <Row data={header} />
            <Rows data={data} />
          </Table> */}
      <View  style={styles.container}>
      <Table>
        <Row data={header} style={styles.header} textStyle={styles.text}/>
        {/* <Rows  data={data} style={styles.datarow}  textStyle={styles.text2} /> */}
      </Table>
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
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    position:'absolute',
   paddingLeft:120,
   paddingTop:100,
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
  imagestyles:{
    width:wp('100%'),
    height:hp('40%'),
    position:'relative',
  },
  lastview:{
    marginLeft:10
  },
});

export default Career;
