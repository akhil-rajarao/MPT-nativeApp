import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ContactUs from '../../component/common/ContactUs';
import Footer from '../../component/Footer';
// import Icon from 'react-native-vector-icons/Entypo';

const AccomodatinView = () => {
  return (
    <ScrollView>
      <View style={styles.mainview}>
        <View>
          <Text
            style={styles.title}>
            MPT Betwa Retreat,Orchha
          </Text>
          {/* <View>pending icons</View> */}

         
          <View style={styles.mainImageView}>
            <Image
              style={styles.mainImage}
              source={{
                uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/4076955548.png',
              }}
            />
          </View>
        </View>
        <View
          style={styles.secondImageView}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.secondImages}
                  source={{
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/4154187767.png',
                  }}
                />
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.secondImages}
                  source={{
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2057302256.png',
                  }}
                />
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.secondImages}
                  source={{
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/593541465.png',
                  }}
                />
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.secondImages}
                  source={{
                    uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/1020026502.png',
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={styles.contentView}>
            <Text
              style={styles.contentText}>
              A magnificent MPT resort in Orchha covered with lush greenery
              overlooking the Betwa river with tastefully done rooms, be it the
              heritage suite or the cosy tents. Experience and indulge in the
              old-world charm of Orchha while booking your stay at MPT Betwa
              Retreat. Guests can also hop on a river rafting adventure in the
              Betwa river, listen to enchanting bhajans at the riverside. All
              this can be found in close proximity to the property. The property
              also has a well-equipped conference room for business travellers
              coming to Orchha. All guests are advised to carry a copy of their
              COVID-19 vaccination certificates & present the same at the time
              of check in. ISO 9001:2015 QMS Certified
            </Text>
          </View>
        </View>
        <View
          style={styles.amenetiesMainView}>
            <View>
                <Text style={styles.title}>Amenities</Text>
            </View>
          <View style={styles.amenetiesOfIconMainV}>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
             <Text style={styles.icon}>O</Text>
              <Text
                style={styles.amenticsText}>
                Dinner
              </Text>
            </View>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
             <Text style={styles.icon}>O</Text>
              <Text
                style={styles.amenticsText}>
                A/C{' '}
              </Text>
              <Text
                style={styles.amenticsText}>
                Rooms
              </Text>
            </View>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
             <Text style={styles.icon}>O</Text>
              <Text
                style={styles.amenticsText}>
                BAR
              </Text>
              <Text
                style={styles.amenticsText}>
                Facilities
              </Text>
            </View>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
             <Text style={styles.icon}>O</Text>
              <Text
                style={styles.amenticsText}>
                Conference 
              </Text>
              <Text
                style={styles.amenticsText}>
                 Rooms
              </Text>
            </View>
            <View>
              {/* <Text>
             <Icon name="tripadvisor" size={24} color=" gray" />
             </Text> */}
             <Text style={styles.icon}>O</Text>
              <Text
                style={styles.amenticsText}>
                Parking 
              </Text>
              <Text
                style={styles.amenticsText}>
                 facilities
              </Text>
            </View>
          </View>
          <View>
          <Text style={styles.underline}></Text>
          </View>
          <View
                  style={styles.buttonView}>
                  
                    <Text
                      style={styles.buttonText}>
                       BOOK NOW
                    </Text>
                  
                </View>
                <View style={styles.PropertyContactView}>
                    <Text style={styles.title}>Property Contact</Text>
                </View>
                <View style={styles.proparty}>
                    <View style={styles.iconView}>
                        <Text style={styles.icon}>0</Text>
                        <Text style={styles.icon}>0</Text>
                        <Text style={styles.icon}>0</Text>
                        <Text style={styles.icon}>0</Text>
                        <Text style={styles.icon}>0</Text>
                    </View>
                    <View style={styles.propartyContactTextVi}>
                        <Text style={styles.contactText}>Mr.Ashish Gupta</Text>
                        <Text style={styles.contactText}>9424796792</Text>
                        <Text style={styles.contactText}>betwa@mpstdc.com</Text>
                        <Text style={styles.contactText}>7680252618</Text>
                        <Text style={styles.contactText}>location</Text>
                    </View>
              </View>
              <View style={styles.contactusView}>
                <ContactUs/>
                </View>
            
        
        </View>
        <View style={styles.footerMainView}>
        <View style={styles.footerView}>
              <Footer/>
            </View>
        </View>
        
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '45%',
    backgroundColor: 'white',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '45%',
    padding: 5,
    backgroundColor: 'white',
    paddingTop: 4,
  },
  inner: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    // borderRadius:10
  },
  underline: {
    width: '80%',
    borderBottomWidth: 4,
    borderColor: 'black',
    marginHorizontal:30
  },
  proparty:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginHorizontal:10,
     marginTop:10,
     paddingHorizontal:0
  },
 mainview:{
  height: '100%',
  width: '100%', 
  backgroundColor: 'white' 
},
 title:{
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: 'darkred',
 },
 mainImageView:{
    paddingRight: 0,
    marginTop: 50
 },
 mainImage:{
    height: hp('30%'),
    width: wp('95%'),
    paddingTop: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
 },
 secondImageView:{
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: 'white',
    marginTop: 20,
 },
 secondImages:{
     height: '100%',
     width: '100%',
     borderRadius: 10
 },
 contentView:{
              paddingBottom: 0,
              alignContent: 'center',
              //  borderWidth: 2,
              marginTop: 30,
              marginLeft: 5,
              marginRight: 5,
 },
 contentText:{
    marginVertical: 1,
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 18,
    color: 'black',
 },
 amenetiesMainView:{
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'white',
 },
 amenetiesOfIconMainV:{
    display: 'flex', 
    flexDirection: 'row',
    paddingHorizontal:10
 },
 amenticsText:{
    marginVertical: 1,
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 15,
    color: 'black',
 },
 icon:{
    color:'red',
    fontWeight:'800'
 },
 buttonView:{
    borderRadius:10,
    width: wp('40%'),
    height:hp('6%'),
    backgroundColor: 'darkred',
    marginHorizontal:30,
    marginTop:30,
    paddingHorizontal:20
 },
 buttonText:{
    fontSize: 15,
    fontWeight:'600',
    // alignSelf: 'center',
    justifyContent:'center',
    color: 'white',
    paddingHorizontal:15,
    marginTop:10
 },
 PropertyContactView:{
    marginHorizontal:20,
    paddingHorizontal:10,
    marginTop:20
 },
 iconView:{
    marginHorizontal:20,
    justifyContent:'space-evenly'
 },
 propartyContactTextVi:{
    marginHorizontal:0,
    marginRight:140,
    justifyContent:'space-evenly'
 },
 contactText:{
    color:'gray',
    fontSize:16,
 },
 contactusView:{
    marginTop:50
 },
 footerMainView:{
    height:hp('100%'),
    width:wp('100%'),
    backgroundColor:'white'
 },
 footerView:{
    marginHorizontal:10,
    paddingHorizontal:10
 },


});

export default AccomodatinView;
