import {Row, Rows, Table} from 'react-native-table-component';
import {ScrollView, Text, View,Image} from 'react-native';

import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ContactUs from '../../../component/common/ContactUs';
import Footer from '../../../component/Footer';



const Offers = () => {
  const header = [
    'HOTELS',
    'Weekday Promo Code (Mon-Thu)',
    'Weekend Promo Code (Fri-Sun)',
  ];
  const data = [
    ['RESIDENCIES', 'RUPAY10', 'RUPAY15'],
    ['Rsorts', 'RUPAY15', 'RUPAY10'],
  ];
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
          <Text style={styles.titlecss}>OFFERS & DISCOUNTS</Text>
        </View>
       
        
       
        <View  style={styles.container}>
      <Table>
        <Row data={header} style={styles.header} textStyle={styles.text}/>
        <Rows  data={data} style={styles.datarow}  textStyle={styles.text2} />
      </Table>
    </View>

        <Text style={styles.notifiction}>
          NOTE: Only 1 Promocode is applicable at one time
        </Text>
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
    marginTop: 140,
    fontWeight: 'bold',
    marginBottom: 50,
    position:'absolute',
    marginLeft:40,
    color:'white'
  },
  imagestyles:{
    width:wp('100%'),
    height:hp('40%'),
    position:'relative',
  },
  container:{
   
    padding:0,
    paddingTop:40,
    // backgroundColor:'red'
    marginHorizontal:10,
   },
    header:{
    height:120,
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

export default Offers;
