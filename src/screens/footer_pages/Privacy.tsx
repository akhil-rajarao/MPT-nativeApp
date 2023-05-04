import {ScrollView, Text, View} from 'react-native';

import ContactUs from '../../component/common/ContactUs';
import Footer from '../../component/Footer';
import {Image} from 'react-native';
import React from 'react';

const Privacy = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/similar.da06dae7.jpg',
          }}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
            position: 'relative',
          }}
        />

        <View>
          <Text
            style={{
              color: '#bc1b1b',
              alignSelf: 'center',
              fontFamily: 'YouthPower-X34qG',
              fontSize: 30,
              margin: 25,
            }}>
            Privacy Policy
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'flex-start',
            marginTop: 8,
            padding: 30,
          }}>
          <Text style={{color: '#000000', fontSize: 18, letterSpacing: 2}}>
            'MPSTDC respects your privacy and recognizes the need to protect the
            personally identifiable information (anyinformation by which you can
            be identified, such as name, address, and telephone number) you
            share with us. We would like to assure you that we follow
            appropriate standards when it comes to protecting your privacy on
            our web sites' {'\n'}
            {'\n'} 'In general, you can visit MPSTDC website without telling us
            who you are or revealing any personal information about yourself. We
            track the Internet address of the domains from which people visit us
            and analyse this data for trends and statistics, but the individual
            user remains anonymous.' {'\n'} {'\n'}
            'MPSTDC will not disclose any information (derived from the
            registration form or booking Form) to third parties, or use of, any
            online service (including names and addresses) without the consent
            of the user or customer (except as required by any legal process).
            MPSTDC will allow suppliers to access the information for purposes
            of confirming your registration and providing you with benefits you
            are entitled to.' {'\n'} {'\n'} 'MPSTDC respects your privacy and
            recognizes the need to protect the personally identifiable
            information (any information by which you can be identified, such as
            name, address, and telephone number) you share with us. We would
            like to assure you that we follow appropriate standards when it
            comes to protecting your privacy on our web sites.' {'\n'} {'\n'}
            If any change in our privacy policy in the future, it will be posted
            on MPSTDC portal with the new effective date. You should access our
            privacy policy regularly to ensure you understand our current
            policies.'
          </Text>
        </View>
      </View>
      <View>
        <ContactUs />
      </View>
      <View style={{marginLeft: 10}}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Privacy;
