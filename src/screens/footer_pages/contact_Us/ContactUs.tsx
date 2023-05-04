import {ScrollView, Text, View} from 'react-native';

import ContactUs from '../../../component/common/ContactUs';
import Footer from '../../../component/Footer';
import {Image} from 'react-native';
import React from 'react';

const ContactUS = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/resort.523d46d0.jpg',
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
            CONTACT US
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
            Booking is non-transferable Management reserve the right to cancel
            advance booking in exceptional and unavoidable circumstances
            Reservation will stand cancelled if the tourist fails to avail the
            accommodation within 12 hours of his scheduled time of arrival in
            the unit. Reservation will, however, be continued if a tourist is
            able to inform the manager of the unit about his late arrival. Late
            arrival will not absolve the tourist from paying full tariff. In
            case a tourist shortens the duration of his proposed stay, the
            advance paid for the unoccupied period will not be adjusted. No
            refund will be admissible. Tariff is subject to change without prior
            notice. Taxes as applicable will be extra payable at the unit (Only
            for book-in 30 June, 2017). All Disputes are subject to the
            jurisdiction of Bhopal courts only. Please carry a valid photo
            identity card along with Booking receipt at the time of check-in in
            the Hotel In case of power cut only fan and light will work through
            generator. Private catering is not allowed. Kanha, Bandhavgarh,
            Panna, & Pench National Park remain closed from 1st July to 30th
            September due to rains. However Kipling's Court at Pench, White
            Tiger Forest lodge at Bandhavgaryv, Kanha Safari Lodge, Mukki, Gawa
            Kanha Resort, Malanjkhand, Mohgaon and Baghira Jungle Resort, Mocha
            remains open.{'\n'} CHECK-IN TIME: 1400 HRS. (2 PM) CHECK-OUT TIME:
            1200 HRS. (12 PM) 100% ADVANCE REQUIRED FOR THE ENTIRE DURATION OF
            STAY AT THE TIME OF BOOKING CHECK- IN TIME: 1400 HRS. (2 PM)
            CHECK-OUT TIME: 1200 HRS. (12 PM) {'\n'}
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

export default ContactUS;
