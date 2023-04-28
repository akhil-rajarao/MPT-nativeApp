import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ContactUs from '../../../component/common/ContactUs';
import {Image} from 'react-native';
import React from 'react';

// import {useNavigation} from '@react-navigation/native';

const Wellness = () => {
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
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text>
        </View>

        {/* ??????????????? */}

        <View style={{marginTop: 10}}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text>
        </View>
        {/* ??????????????? */}

        <View style={{marginTop: 10}}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text>
        </View>
        {/* ??????????????? */}

        <View style={{marginTop: 10}}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text>
        </View>
        {/* ??????????????? */}

        <View style={{marginTop: 10}}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text>
        </View>
        {/* ??????????????? */}

        <View style={{marginTop: 10}}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text>
        </View>
        {/* ??????????????? */}

        <View style={{marginTop: 10}}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text>
        </View>
        {/* ??????????????? */}

        <View style={{marginTop: 10}}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text>
        </View>
      </View>

      {/* ??????????????? */}

      {/* <Image
        source={{
          uri: '	https://mpstdc.com/assets/pexels-ron-lach-9146383.19538721.png',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: 1,
          position: 'relative',
          marginTop: 30,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          top: 760,
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 800,
          color: '#ffffff',
        }}>
        PAIN FREE LIFE
      </Text>

      <Image
        source={{
          uri: 'https://mpstdc.com/assets/pexels-pinkwitch-%E8%AF%…%E8%91%9B%E7%AD%B1%E6%9A%96-12851257.3857f411.png',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: 1,
          position: 'relative',
          marginTop: 30,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          top: 1100,
          alignSelf: 'center',
          fontSize: 23,
          fontWeight: 800,
          color: '#ffffff',
        }}>
        CLEANSING BALANCING HEALING
      </Text>
      <Image
        source={{
          uri: 'https://mpstdc.com/assets/pexels-elina-fairytale-3822646.02bc4e48.png',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: 1,
          position: 'relative',
          marginTop: 30,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          top: 1430,
          alignSelf: 'center',
          fontSize: 23,
          fontWeight: 800,
          color: '#ffffff',
        }}>
        CLINCALLY CUSTOMIZED MEDICALY SUPERVISED WEIGHT LOSS TREATMENTS
      </Text>

      <Image
        source={{
          uri: 'https://mpstdc.com/assets/pexels-breakingpic-3188.d063448e.png',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: 1,
          position: 'relative',
          marginTop: 30,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          top: 1790,
          alignSelf: 'center',
          fontSize: 23,
          fontWeight: 800,
          color: '#ffffff',
        }}>
        LIVE A STRESS-FREE LIFE
      </Text>

      <Image
        source={{
          uri: 'https://mpstdc.com/assets/pexels-cottonbro-studio-3997986.b6909e14.png',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: 1,
          position: 'relative',
          marginTop: 30,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          top: 2190,
          alignSelf: 'center',
          fontSize: 23,
          fontWeight: 800,
          color: '#ffffff',
        }}>
        REFRESH THE SOUL
      </Text>

      <Image
        source={{
          uri: 'https://mpstdc.com/assets/pexels-anna-shvets-5069459.1159bc56.png',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: 1,
          position: 'relative',
          marginTop: 30,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          top: 2590,
          alignSelf: 'center',
          fontSize: 23,
          fontWeight: 800,
          color: '#ffffff',
        }}>
        SOUNDARYA
      </Text> */}
      <View>
        <ContactUs />
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
    height: hp('340%'),
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
});

export default Wellness;
