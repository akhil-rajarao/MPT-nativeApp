import {Row, Rows, Table} from 'react-native-table-component';
import {ScrollView, Text, View} from 'react-native';

import React from 'react';
import {StyleSheet} from 'react-native';

const Offers = () => {
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

        {/* <Table>
          <Row data={header} />
          <Rows data={data} />
        </Table> */}

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

export default Offers;
