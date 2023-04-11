import React from 'react';
import {
  ScrollView,
  ScrollViewComponent,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import style from '../mice&facilities/style';
import {DataTable} from 'react-native-paper';
import {Table, Row, Rows} from 'react-native-table-component';

const OffersPage = () => {
  const header = [
    'HOTELS',
    'Weekday Promo Code (Mon-Thu)',
    'Weekend Promo Code (Fri-Sun)',
  ];
  const data = [
    ['RESIDENCIES', 'RUPAY10', 'RUPAY15'],
    ['Rsorts', 'RUPAY15', 'RUPAY10'],
  ];

  const tableValues = {
    tableHead: [
      'HOTELS',
      'Weekday Promo Code (Mon-Thu)',
      'Weekend Promo Code (Fri-Sun)',
    ],
    tableData: [
      ['RESIDENCIES', 'RUPAY10', 'RUPAY15'],
      ['Rsorts', 'RUPAY15', 'RUPAY10'],
    ],
  };

  return (
    <ScrollView>
      <View>
        <Image
          source={require('../../assets/images/covid.jpg')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
            position: 'relative',
          }}
        />
        <Text style={styles.titlecss}>OFFERS & DISCOUNTS</Text>

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#7F7F7F'}}>
            <Row
              data={tableValues.tableHead}
              style={styles.head}
              textStyle={styles.text1}
            />
            <Rows data={tableValues.tableData} textStyle={styles.text2} />
          </Table>
        </View>

        <Text style={{marginTop: 30}}>
          NOTE: Only 1 Promocode is applicable at one time
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titlecss: {
    fontSize: 39,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: '900',
    marginBottom: 50,
    top: 80,
    zIndex: 500,
    color: '#ffffff',
    opacity: 0.7,
    position: 'absolute',
    alignSelf: 'center',
  },
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#BC1B1B'},
  text: {margin: 6, alignSelf: 'flex-start', fontSize: 16},
  text1: {margin: 6, alignSelf: 'center', color: '#ffffff', fontWeight: 'bold'},
  text2: {margin: 6, alignSelf: 'center', fontSize: 16},
});

export default OffersPage;
