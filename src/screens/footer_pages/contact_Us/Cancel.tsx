import {Row, Rows, Table} from 'react-native-table-component';
import {ScrollView, Text, View} from 'react-native';

import ContactUs from '../../../component/common/ContactUs';
import Footer from '../../../component/Footer';
// import {Button} from 'react-native-elements';
import {Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
// import ContactUs from '../../../component/common/ContactUs';
// import Footer from '../../../component/Footer';

const Cancel = () => {
  const tableValues = {
    tableHead: ['Notice for cancellation', 'Refund Policy'],
    tableData: [
      ['30 days or more before check-in date ', '90% refund'],
      ['04 to 29 days before check-in date', '80% refund'],
      ['3 days before check- in date', 'NIL refund'],
    ],
  };

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
              fontFamily: 'YouthPower-X34qG',
              fontSize: 30,
              margin: 25,
            }}>
            Cancellation Policy
          </Text>
        </View>
        <View style={styles.container}>
          <Table>
            <Row
              data={tableValues.tableHead}
              style={styles.head}
              textStyle={styles.text1}
            />
            <Rows data={tableValues.tableData} textStyle={styles.text2} />
          </Table>
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'flex-start',
            marginTop: 8,
            padding: 30,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 17,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}>
            * 18% GST on cancellation charge amount will apply.{'\n'} {'\n'}{' '}
            Note: Amendment in dates will be treated as cancellation.{'\n'}{' '}
            {'\n'} Affected by wef : 1/10/2021{'\n'}
          </Text>
        </View>
        <View>
          <ContactUs/>
        </View>
        <View style={styles.lastview}>
          <Footer/>
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

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#BC1B1B'},
  text: {margin: 6, alignSelf: 'flex-start', fontSize: 16},
  text1: {margin: 6, alignSelf: 'center', color: '#ffffff', fontWeight: 'bold'},
  text2: {margin: 6, alignSelf: 'center', fontSize: 16},
  lastview:{
      marginLeft:10
  },
});

export default Cancel;
