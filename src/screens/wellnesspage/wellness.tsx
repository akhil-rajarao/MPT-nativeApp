import {
  ScrollView,
  ScrollViewComponent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Button} from 'react-native-elements';
import {Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WellnessPage = () => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 30,
            color: 'red',
            position: 'absolute',
            top: 170,
            alignSelf: 'center',
            zIndex: 30,
            fontWeight: '800',
          }}>
          WELLNESS TOURISM
        </Text>

        <Image
          source={{
            uri: 'https://mpstdc.com/assets/Wellness.4d82aff7.jpg',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: 'auto',
            aspectRatio: 1,
            position: 'relative',
          }}
        />
        <View style={{margin: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Trial')}>
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
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.pnghttps://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
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
              top: 400,
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 800,
              color: '#ffffff',
            }}>
            RELAX REFRESH REJUVENATE
          </Text>
          <Image
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
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default WellnessPage;
