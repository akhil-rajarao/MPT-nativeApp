import {Pressable, ScrollView, Text, View,Modal} from 'react-native';

import ContactUs from '../../../component/common/ContactUs';
import Footer from '../../../component/Footer';
// import {Button} from 'react-native-elements';
import {Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';

const Mice = () => {
  const header = ['PARTICULARS', '	DELUXE', 'LUXURY', ];
  const data = [
    ['Out station charges (Minimum 250 kms per day running)', '40/- per km', '85/- per km', ],
    ['Night halt charges - with stay - without stay','2500/- per night, 1500/- per night','5000/- per night 3000/- per night',],
    ['Parking facility available in MPT Hotels',  ],
    ['GST Extra/ Toll Tax Extra & other tax extra',  ],
    
  ];
     
  const KushabhauH =['TYPE','CAPACITY','STYLE',];
  const KushabhauD = [['Raja Bhoj Hall','500 Pax','Theater',],
                         ['Nawab Hamidullah Hall (Auditorium Hall)','133 Pax','Theater',],
                         ['Nawab Shah Jehan Begum Hall (Decorative Hall)','	50 - 70 Pax','Theater',],
                         ['Nawab Sultan Jehan Begum Room (Committee Room)','	40 - 50 Pax','',],
                         ['Nawab Sikander Jehan Hall (Committee Room)','	40 - 50 Pax','',],
                         ['Nawab Qudsia Begum Room (Board Room)','	25 Pax','',],
                         ['Makhanlal Chaturvedi (Media Room)','','',],
                         ['Pre Wedding/ Video Shooting','','',],
                     ];
     
const MaharajaH =['TYPE','CAPACITY','STYLE',];
const MaharajaD =[['Hall No.1','25 Pax','U shape'],
                  ['Hall No.2','64 Pax','Theatre'],
                  ['Hall No.3','64 Pax','Theatre'],
                  ['Hall No.4','221 Pax','Theatre'],
                  ['Hall No.5','120 Pax','Cluster'],
                  ['Meeting Hall 1(VIP)','18 Pax','	U Shape'],
                  ['Meeting Hall 2','24 Pax','U Shape'],
                  ['Meeting Hall 3','35 Pax','Theatre'],

          ];
    

  const [modalVisible, setModalVisible] = React.useState(false);
  
  const onpress =() =>{
    setModalVisible (!modalVisible);
    
   };
 
   const [secondmodalVisible,setSecondmodalVisible] = React.useState(false);
    const onpressSecond = ()=>{
        setSecondmodalVisible (!secondmodalVisible)
    };

    const [thirdmodalVisible,setThirdmodalVisible] = React.useState(false);
    const onpressThird = ()=>{
        setThirdmodalVisible (!thirdmodalVisible)
    }


  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/IMG_2055@2x.3003f1c1.png',
          }}
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
          source={{
            uri: 'https://mpstdc.com/assets/IMG_2055@2x.3003f1c1.png',
          }}
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
            <Text style={styles.textN} onPress={onpress} >PACKAGES</Text>
          </Pressable>
        </View>
       
       
        {
          modalVisible ?
         
        <Modal transparent={true}  animationType='none' >
         <View style={styles. modalmainView}>
             
              <Table>
                <Row data={header} style={styles.header} flexArr={[4, 4, 4, ]} textStyle={styles.textH} />
                <Rows data={data} style={styles.datarow} flexArr={[4, 4, 4, ]} textStyle={styles.text2} />
             </Table>
  
             
            <View >
              <Pressable>
              <Text style={{color:'red', paddingLeft:270,position:'absolute',paddingTop:360 ,fontWeight:'bold'}} onPress={onpress}  >Hide popup</Text>
              </Pressable>
              </View>
             </View>
        </Modal> :null
        }

            
      </View>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/pic%20(1).f817bf36.jpg',
          }}
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
            <Text style={styles.textN} onPress={onpressSecond}>EXPLORE HERE</Text>
          </Pressable>

          {
         secondmodalVisible?
         
        <Modal transparent={true}  animationType='none' >
         <View style={styles. ModalmainView2}>
             <View>
              <Table>
                <Row data={KushabhauH} style={styles.header} flexArr={[4, 3, 2, ]} textStyle={styles.textH} />
                <Rows data={KushabhauD} style={styles.datarow} flexArr={[4, 3, 2, ]} textStyle={styles.text2} />
             </Table>
             </View>
             
             <View >
              <Pressable>
              <Text style={{color:'red', paddingLeft:270,position:'absolute',paddingTop:600 ,fontWeight:'bold'}} onPress={onpressSecond}  >Hide popup</Text>
              </Pressable>
              </View>

             </View>
        </Modal>:null
        }


        </View>
      </View>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/2_05_25_59_Khajuraho_1_H@@IGHT_276_W@@IDTH_600.9b85b8bf.jpg',
          }}
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
            <Text style={styles.textN} onPress={onpressThird} >EXPLORE HERE</Text>
          </Pressable>

          {
          thirdmodalVisible ?
         
        <Modal transparent={true}  animationType='none' >
         <View style={styles.ModalmainView2}>
             <View>
              <Table>
                <Row data={MaharajaH} style={styles.header} flexArr={[4, 4, 4, ]} textStyle={styles.textH} />
                <Rows data={MaharajaD} style={styles.datarow2} flexArr={[4, 4, 4, ]} textStyle={styles.text2} />
             </Table>
             
             </View>
            <View >
              <Pressable>
              <Text style={{color:'red', paddingLeft:270,position:'absolute',paddingTop:600 ,fontWeight:'bold'}} onPress={onpressThird}  >Hide popup</Text>
              </Pressable>
              </View>
              <View style={{marginTop:40,paddingLeft:10}}>
              <Text style={{marginTop:400}}>-Parking facility available</Text>
               
             <Text style={{}} >-Lodging available at</Text>
             <Text style={{color:'red'}}>-MPT Payal & MPT Jhankar in Khajuraho.</Text>
             <View style={{flexDirection:'row'}}>
             <Text>-For Booking Call </Text>
             <Text style={{color:'red'}}> - 07686-274051,9425986033</Text>
             </View>               
              </View>
             </View>
        </Modal> :null
        }


        </View>
      </View>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/Screenshot%202022-09-12%20155232.64c7a9f4.png',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.caravanText}>MPT DDX Drive In Cinema</Text>data
          <Text style={styles.discription}>
            MPT Hotels & Resorts is excited to invite you to our Open Air 'Drive
            In' Cinema the "MPT DDX Drive In Cinema" at MPT Lake View Residency,
            Bhopal. To book your tickets visit : To book your tickets visit :
          </Text>
        </View>
      </View>
      <View>
        <ContactUs />
      </View>
      <View style={{marginLeft: 10, marginBottom: 15}}>
        <Footer />
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
    fontSize: 15,
    // textAlign: 'center',
    alignSelf:'flex-start',
    paddingLeft:5,
    paddingRight:5,
  },
  caravanText: {
    fontSize: 25,
    color: 'red',
    margin: 7,
  },
  text: {
    color: 'red',
    fontSize: 40,
    paddingLeft:30
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
  header: {
    height: 50,
    backgroundColor: 'gray',
  },
  textH: {
    marginHorizontal: 10,
    color: 'darkred',
    fontSize: 15,
    fontWeight:'bold'
  },
  datarow: {
    height: 80,
    backgroundColor: 'gray',
  },
  text2: {
    marginHorizontal: 10,
    color: 'black',
    fontSize:14
  },
  datarow2: {
    height: 50,
    backgroundColor: 'gray',
  },
  modalmainView:{
  backgroundColor:'gray',
  margin:10,
  // borderRadius:20,
  flex:1, 
  marginBottom:10,
  marginLeft:15,
  marginTop:260,
  position:'relative'},
  
  
  ModalmainView2:{
    backgroundColor:'gray',
    margin:20,
    // borderRadius:20,
    flex:1, 
    marginBottom:10,
    marginLeft:15,
    marginTop:60,
    
   
   
  },
  
   

 
});

export default Mice;
