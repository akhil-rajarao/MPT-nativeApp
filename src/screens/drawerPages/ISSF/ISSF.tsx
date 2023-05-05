import {StyleSheet, Text, View, Image, ScrollView,Modal,Alert,Pressable} from 'react-native';
import React, { useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import VideoPlayer from 'react-native-video-player';
import ContactUs from '../../../component/common/ContactUs';
import Footer from '../../../component/Footer';
import {Row, Rows, Table} from 'react-native-table-component';

const ISSF = () => {

  const header = ['S No', 'Company', 'Contact Person', 'Address','Joining Date','Expiry Date',];
  const data = [
    ['1', 'A2 TOURS AND TRAVELS', 'Mr. Aditya Jain', 'shop no-4,Deshbandhu Complex,Naudra Bridge,Jabalpur-482001', '23/01/2019','22-01-2022',],
    ['2','Aakashveedhilo','Mr Raja Ramesh Balla','47-10-10, Ist floor,Rednam Regency, Dwaraka Nagar, IInd cross, Visakhapatnam (AP)-530016','12/24/2018','12/23/2021',]
    
            ];
            // const [modalVisible, setModalVisible] = React.useState(false);
            // const onpress =() =>{
            //      setModalVisible (!modalVisible)

            // }
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
         
          

        </View>
        <View style={styles.title}>
        <Text style={styles.secTitle}>Kushabhau Thakre International Convention Centre (Minto Hall)</Text>
        </View>

        <VideoPlayer
          video={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
        />
         <View style={styles.detailsContainer}>
          <Text style={styles.secondaryText}>
          Kushabhau Thakre International Convention Centre (Minto Hall) is a historic building located in Bhopal, the capital city of the Indian state of Madhya Pradesh. It was built in 1909 during the reign of Nawab Sultan Jahan Begum, who commissioned the construction of the building as a venue for public gatherings and state events.Today, the Minto Hall is a popular tourist attraction and a venue for cultural events and exhibitions.
          </Text>
          {/* <Pressable>
          <Text style={styles.archiveText} onPress={onpress} >Know More</Text>
          </Pressable> */}
         </View>
         {/* {
          modalVisible ?     <Modal transparent={true}  animationType='none'>
          <View  style={{backgroundColor:'gray',flex:1,marginHorizontal:10,}}>
            <View style={{backgroundColor:'white',margin:40,padding:20,borderRadius:10,flex:1,}}>
           <Table  borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={header}  flexArr={[1, 3, 3, 7,3,3]} style={styles.header} textStyle={styles.text}/>
            <Rows  data={data}  flexArr={[1, 3, 3, 7,3,3]}   style={styles.datarow}  textStyle={styles.text2} />
           </Table>
           
           
           </View>
           <Pressable>
              <Text style={styles.archiveText} onPress={onpress}  >Hide popup</Text>
              </Pressable>
           
           </View>
    
        </Modal>  :null
         } */}


 

         <View style={styles.title}>
        <Text style={styles.secTitle}>Explore Bhopal</Text>
        </View>
        <ScrollView horizontal={true}>
        <View>
            <Image
              style={styles.imagestyles2}
              source={{
                uri: 'https://mpstdc.com/assets/mpTourismBrochure.3850289c.jpg',
              }}
            />
          </View>
          <View>
            <Image
              style={styles.imagestyles2}
              source={{
                uri: `https://mpstdc.com/assets/MPBROCHURE.b12d24e3.jpg`,
              }}
            />
          </View>
          <View>
            <Image
              style={styles.imagestyles2}
              source={{
                uri: 'https://mpstdc.com/assets/mpTourismBrochure.3850289c.jpg',
              }}
            />
          </View>
          <View>
            <Image
              style={styles.imagestyles2}
              source={{
                uri: `https://mpstdc.com/assets/MPBROCHURE.b12d24e3.jpg`,
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.title}>
        <Text style={styles.secTitle}>Explore Wellness In MP</Text>
        </View>
  <ScrollView horizontal={true}>
        <View>
            <Image
              style={styles.imagestyles2}
              source={{
                uri: 'https://mpstdc.com/assets/ExploreWellness.46cba5d0.jpg',
              }}
            />
          </View>
          <View>
            <Image
              style={styles.imagestyles2}
              source={{
                uri: `https://mpstdc.com/assets/kushilalpackage.8d076fc8.jpg`,
              }}
            />
          </View>
          <View>
            <Image
              style={styles.imagestyles2}
              source={{
                uri: 'https://mpstdc.com/assets/ExploreWellness.46cba5d0.jpg',
              }}
            />
          </View>
          <View>
            <Image
              style={styles.imagestyles2}
              source={{
                uri: `https://mpstdc.com/assets/kushilalpackage.8d076fc8.jpg`,
              }}
            />
          </View>
        </ScrollView>
        <View>
          <ContactUs/>
        </View>
        <View>
          <Footer/>
        </View>
       
      </View>
    </ScrollView>
  );
};

export default ISSF;

const styles = StyleSheet.create({
  imagestyles: {
    width: wp('100%'),
    height: hp('40%'),
   
  },
  imagestyles2: {
    width: wp('99%'),
    height: hp('90%'),
    marginLeft:10,
    marginRight: 10,
    marginTop: 30,
  },
 
  detailsContainer: {
    padding: 20,
    
         },
  secondaryText: {
    color: '#757575',
    fontSize: 17,
    paddingHorizontal:25
  },
  title:{
   
    marginTop:20,
    // paddingTop:10
  },
  secTitle: {
    textAlign: 'center',
    
    color: 'red',
    fontSize: 17,
   
    margin: 30,
    fontWeight: 'bold',
  },
  archiveText: {
    color: 'red',
    paddingLeft:30
    
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
    flexWrap:'wrap'
   
  },


  
});
