import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  import {Row, Rows, Table} from 'react-native-table-component';
import ContactUs from '../../component/common/ContactUs';
import Footer from '../../component/Footer';

const GeneralSales = () => {
    const header = ['S No', 'Company', 'Contact Person', 'Address','Joining Date','Expiry Date',];
  const data = [
    ['1', 'A2 TOURS AND TRAVELS', 'Mr. Aditya Jain', 'shop no-4,Deshbandhu Complex,Naudra Bridge,Jabalpur-482001', '23/01/2019','22-01-2022',],
    ['2','Aakashveedhilo','Mr Raja Ramesh Balla','47-10-10, Ist floor,Rednam Regency, Dwaraka Nagar, IInd cross, Visakhapatnam (AP)-530016','12/24/2018','12/23/2021',]
    
            ];
  return (
    <ScrollView>
    <View>
    <View>
        <Image
            style={styles.imagestyles}
            source={{
              uri: `https://mpstdc.com/assets/Offers%20_%20Discount.f85cb997.jpg`,
            }}
          />
           
        </View>
        <View style={styles.title}>
        <Text style={styles.secTitle}>General Sales Agents</Text>
        </View>
        
    <View style={styles.container}>
        <Table  borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={header}  flexArr={[1, 3, 3, 7,3,3]} style={styles.header} textStyle={styles.text}/>
        <Rows  data={data}  flexArr={[1, 3, 3, 7,3,3]}   style={styles.datarow}  textStyle={styles.text2} />
       </Table>
    </View>
        <View>
        <ContactUs/>
        </View>
        <View style={styles.lastview}>
            <Footer/>
        </View>
   
        
    </View>
    </ScrollView>
  )
}

export default GeneralSales

const styles = StyleSheet.create({
    imagestyles:{
        width:wp('100%'),
        height:hp('40%'),
        position:'relative',
      },
      title:{
       
        marginTop:50,
       
      },
      secTitle: {
        textAlign: 'center',
        color: 'red',
        fontSize: 17,
        fontWeight: 'bold',
      },
      header:{
        height:100,
        backgroundColor:'darkred'
        
      },
      text:{
        marginHorizontal:0,
        color:'white',
        textAlign: 'center',
        
        
      },
      datarow:{
        height:150,
        backgroundColor:'white',
        
       },
       text2:{
        marginHorizontal:2,
        color:'black',
        // textAlign: 'center',
        flexWrap:'wrap'
       
      },
      container:{
        paddingHorizontal:2,
        marginTop:50
        
      },
    lastview:{marginLeft:10,
    },
});