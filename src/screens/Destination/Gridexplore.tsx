import {View, Text, StyleSheet, ScrollView,Image, StatusBar} from 'react-native';
import React from 'react';
import {autoBatchEnhancer} from '@reduxjs/toolkit';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Gridexplore = () => {

  // const imgPath = [
  //   // require('../../assets/dest.jpg'),
  //   [require('../../assets/explore.png'), 'Kanha' ],
  //   [require('../../assets/explore2.png'), 'Pachmarhi' ],
  //   [require('../../assets/explore3.png'), 'Bandhavgarh' ],
  //   [require('../../assets/explore4.png'), 'Amarkantak' ],
  //   [require('../../assets/explore5.png'), 'Indore' ],
  //   [require('../../assets/explore6.png'), 'Khajunaho'],
  //   [require('../../assets/explore7.png'), 'Bhopal'],
  //   [require('../../assets/explore8.png'), 'Panna'],
  // ];




  return (
    <ScrollView>
      <View style={styles.mainview}>
      
        <View style={styles.one}>
          <View
            style={{
              height: 200,
              width: 170,
              // paddingLeft: 10,
              marginLeft: 10,
              marginBottom: 10,
              backgroundColor: 'green',
              borderColor: 'black',
            }}>
              
              <Image
              style={styles.image1}
              source={require('../../assets/explore.png')}
            />
            <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:150,}} >Kanha</Text>
            
            
          </View>
          <View
            style={{
              height: 300,
              width: 170,
              // paddingLeft: 20,
              marginLeft: 10,
              marginBottom: 10,
              backgroundColor: 'yellow',
            }}>
              <Image
              style={styles.image1}
              source={require('../../assets/explore3.png')}
            />
              <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:240,}} >Bandhavgarh</Text>
            
            </View>

            <View
            style={{
              height: 200,
              width: 170,
              // paddingLeft: 20,
              marginLeft: 10,
              marginBottom: 10,
              backgroundColor: 'green',
              borderColor: 'black',
            }}>
               <Image
              style={styles.image1}
              source={require('../../assets/explore5.png')}
            />
              <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:150,}} >Indore</Text>
            
              
            </View>
          <View
            style={{
              height: 300,
              width: 170,
              // paddingLeft: 20,
              marginLeft: 10,
              marginBottom: 10,
              backgroundColor: 'yellow',
            }}>
           <Image
              style={styles.image1}
              source={require('../../assets/explore7.png')}
            />
              <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:240,}} >Bhopal</Text>
            
            </View>



        </View>
        <View style={styles.one}>
          <View
            style={{
              height: 300,
              width: 170,
              // paddingLeft: 20,
              marginLeft: 10,
              marginBottom: 10,
              backgroundColor: 'yellow',
            }}>
             <Image
              style={styles.image1}
              source={require('../../assets/explore2.png')}
            />
              <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:240,}} >Pachmarhi</Text>
            
            </View>
          <View
            style={{
              height: 200,
              width: 170,
              // paddingLeft: 20,
              marginLeft: 10,
              marginBottom: 10,
              backgroundColor: 'green',
              borderColor: 'black',
            }}>
             <Image
              style={styles.image1}
              source={require('../../assets/explore4.png')}
            />
              <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:150,}} >Amarkantak</Text>
            
            </View>

            <View
            style={{
              height: 300,
              width: 170,
              // paddingLeft: 20,
              marginLeft: 10,
              marginBottom: 10,
              backgroundColor: 'yellow',
            }}>
              <Image
              style={styles.image1}
              source={require('../../assets/explore6.png')}
            />
              <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:240,}} >Khajunaho</Text>
            
            </View>
          <View
            style={{
              height: 200,
              width: 170,
              // paddingLeft: 20,
              marginLeft: 10,
              marginBottom: 10,
              backgroundColor: 'green',
              borderColor: 'black',
            }}>
             <Image
              style={styles.image1}
              source={require('../../assets/explore8.png')}
            />
              <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:150,}} >Panna</Text>
            
            </View>






        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    justifyContent: 'space-evenly',
  },
  one: {
    backgroundColor: '#DEB887',
    width: '50%',
    height: '100%',
    paddingTop: 10,
    flexDirection: 'column',
    marginRight: 20,
  },
  image1: {
    position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,

  },
  image2: {
    position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,

  },
  image3: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,

  },
  image4: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,

  },
  image5: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,

  },
  image6: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,

  },
  image7: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,

  },
  image8: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,

  },
 
  
});
export default Gridexplore;
