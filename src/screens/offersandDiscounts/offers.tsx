import {Row, Rows, Table} from 'react-native-table-component';
import {
  ScrollView,
  ScrollViewComponent,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {Button} from 'react-native-elements';
import {DataTable} from 'react-native-paper';
import {Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import style from '../mice&facilities/style';

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
  return (
    <ScrollView>
      <View>
        <Text style={styles.titlecss}>OFFERS & DISCOUNTS</Text>

        <Table
          borderStyle={{
            borderWidth: 2,
            borderColor: '#c8e1ff',
          }}>
          <Row data={header} />
          <Rows data={data} />
        </Table>

        <Text style={{marginTop: 30}}>
          NOTE: Only 1 Promocode is applicable at one time
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titlecss: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
});

export default OffersPage;
