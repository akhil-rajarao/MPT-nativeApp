import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  ScrollViewComponent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const WellnessPage = () => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView>
      <View>
       
        <Text style={{
    fontSize: 30,
    color: 'red',
    position: 'absolute',
    top: 170,
    alignSelf: 'center',
    zIndex: 30,
    fontWeight: '800',
  }}>WELLNESS TOURISM</Text>
          
     
        <Image
          source={require('../../assets/images/Wellness.jpg')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: 'auto',
            aspectRatio: 1,
            position: 'relative',
          }}
        />
        <View style={{margin: 20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Trial')}>  
          <Text
            style={{
              fontSize: 35,
              fontWeight: '500',
              marginTop: 40,
              color: '#bc1b1b',
            }}>
            Wellness Options
          </Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/wellnesstwo.png')}
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
              top: 400,
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 800,
              color: '#ffffff',
            }}>
            RELAX REFRESH REJUVENATE
          </Text>
          <Image
            source={require('../../assets/images/wthree.png')}
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
            source={require('../../assets/images/wfour.png')}
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
            source={require('../../assets/images/wfive.png')}
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
            source={require('../../assets/images/wsix.png')}
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
            source={require('../../assets/images/wseven.png')}
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
            source={require('../../assets/images/weight.png')}
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
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};



export default WellnessPage;
