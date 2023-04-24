import {ScrollView, Text, View} from 'react-native';

import {Image} from 'react-native';
import React from 'react';

// import {StyleSheet} from 'react-native';
// import {Button} from 'react-native-elements';

const BookingRules = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/similar.da06dae7.jpg',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
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
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 10,
            }}>
            BOOKING RULES
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'flex-start',
            marginTop: 8,
            padding: 30,
          }}>
          <Text style={{color: '#757575', fontSize: 18}}>
            Booking is non-transferable{'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            Management reserve the right to cancel advance booking in
            exceptional and unavoidable circumstances{'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            Reservation will stand cancelled if the tourist fails to avail the
            accommodation within 12 hours of his scheduled time of arrival in
            the unit. Reservation will, however, be continued if a tourist is
            able to inform the manager of the unit about his late arrival. Late
            arrival will not absolve the tourist from paying full tariff.{'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            In case a tourist shortens the duration of his proposed stay, the
            advance paid for the unoccupied period will not be adjusted. No
            refund will be admissible. {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            Tariff is subject to change without prior notice.  {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            Taxes as applicable will be extra payable at the unit (Only for
            book-in 30 June, 2017).   {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            Tariff is subject to change without prior notice..   {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            All Disputes are subject to the jurisdiction of Bhopal courts only. {' '}
            {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            Please carry a valid photo identity card along with Booking receipt
            at the time of check-in in the Hotel  {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            In case of power cut only fan and light will work through generator.{' '}
            {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            Private catering is not allowed. {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            Kanha, Bandhavgarh, Panna, & Pench National Park remain closed from
            1st July to 30th September due to rains. However Kipling's Court at
            Pench, White Tiger Forest lodge at Bandhavgarv, Kanha Safari Lodge,
            Mukki, Gawa Kanha Resort, Malanjkhand, Mohgaon and Baghira Jungle
            Resort, Mocha remains open. {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            CHECK-IN TIME: 14:00 HRS. (2 PM)  {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            CHECK-OUT TIME: 12:00 HRS. (12 PM) {'\n'}
          </Text>
          <Text style={{color: '#7f7f7f', fontSize: 18}}>
            100% ADVANCE REQUIRED FOR THE ENTIRE DURATION OF STAY AT THE TIME OF
            BOOKING {'\n'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookingRules;
