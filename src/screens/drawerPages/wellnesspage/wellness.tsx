import {Modal, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ContactUs from '../../../component/common/ContactUs';
import Footer from '../../../component/Footer';
import {Image} from 'react-native';
import React from 'react';

// import {useNavigation} from '@react-navigation/native';

const Wellness = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
            const onpress =() =>{
                 setModalVisible (!modalVisible)

            }
  // const navigation = useNavigation<any>();
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/Wellness.4d82aff7.jpg',
          }}
          style={styles.imageTop}
        />
        <Text style={styles.Heading}>WELLNESS TOURISM</Text>
      </View>
      <View style={{margin: 20}}>
        <Text style={styles.subHeading}>Wellness Options</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={{marginTop: 10}}>
        <Pressable onPress={onpress}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
            </Pressable>
          {
          modalVisible ?     <Modal transparent={true}  animationType='none'>
          {/* <View  style={{backgroundColor:'gray',flex:1,marginHorizontal:10,}}>
            <View style={{backgroundColor:'white',margin:40,padding:20,borderRadius:10,flex:1,}}>
           </View>
           <Pressable>
              <Text onPress={onpress}>Hide popup</Text>
              </Pressable>
           
           </View> */}
    
        </Modal>  :null
         }
          <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text>
        </View>

        {/* ??????????????? */}

        <View style={styles.image}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-ron-lach-9146383.19538721.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>PAIN FREE LIFE</Text>
        </View>
        {/* ??????????????? */}

        <View style={styles.image}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-pinkwitch-%E8%AF%B8%E8%91%9B%E7%AD%B1%E6%9A%96-12851257.3857f411.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>CLEANSING BALANCING HEALING</Text>
        </View>
        {/* ??????????????? */}

        <View style={styles.image}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-elina-fairytale-3822646.02bc4e48.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>SOUNDARYA</Text>
        </View>
        {/* ??????????????? */}

        <View style={styles.image}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-breakingpic-3188.d063448e.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}> LIVE A STRESS-FREE LIFE</Text>
        </View>
        {/* ??????????????? */}

        <View style={styles.image}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-cottonbro-studio-3997986.b6909e14.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>REFRESH THE SOUL</Text>
        </View>
        {/* ??????????????? */}

        <View style={styles.image}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-anna-shvets-5069459.1159bc56.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>SOUNDARYA</Text>
        </View>
        {/* ??????????????? */}
      </View>

      <View>
        <ContactUs />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imageTop: {
    width: wp('100%'),
    height: hp('40%'),
    position: 'relative',
  },
  Heading: {
    fontSize: 32,
    color: 'white',
    position: 'absolute',
    top: 130,
    alignSelf: 'center',
    zIndex: 30,
    fontWeight: '900',
  },
  subHeading: {
    fontSize: 35,
    fontFamily: 'YouthPower-X34qG',
    color: 'darkred',
    marginTop: 50,
  },

  imageContainer: {
    height: hp('300%'),
    // width: wp('90%'),
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'lightblue',
  },
  bannerImage: {
    width: wp('90%'),
    height: hp('40%'),
  },
  bannerText: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 200,
    fontSize: 20,
    fontWeight: 800,
    color: '#ffffff',
  },
  image: {
    marginTop: 20,
  },
  footer: {
    marginLeft: 10,
  },
});

export default Wellness;
