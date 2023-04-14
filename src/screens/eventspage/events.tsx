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
// import style from '../mice&facilities/style';
// import {DataTable} from 'react-native-paper';
// import {Table, Row, Rows} from 'react-native-table-component';

const EventsPage = () => {
  const header = ['S No', 'Event', 'Date', 'Place Details'];
  const data = [['sample', 'sample', 'sample', 'sample', 'sample']];
  return (
    <ScrollView>
      <View>
        <Text style={styles.titlecss}>EVENTS</Text>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.buttoncss}>
            <Text style={styles.buttonText}>Current Events</Text>
          </TouchableOpacity>
          <Text style={styles.archiveText}>Event Archive (Click Here)</Text>
          <TextInput style={styles.input} placeholder="Search by Title" />
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Reset</Text>
            </TouchableOpacity>
          </View>

          {/* <Table
            borderStyle={{
              borderWidth: 2,
              borderColor: '#c8e1ff',
            }}>
            <Row data={header} />
            <Rows data={data} />
          </Table> */}
        </View>
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
  },
  ButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  innerContainer: {
    padding: 20,
  },
  buttoncss2: {
    borderColor: '0ECAF0',
    borderWidth: 1,
    width: 100,
    borderRadius: 10,
    marginTop: 20,
    color: '#000000',
    margin: 3,
  },

  // buttoncss2: {
  //   borderColor: '0ECAF0',
  //   borderWidth: 1,
  //   width: 100,
  //   borderRadius: 10,
  //   marginTop: 20,
  //   color: '#000000',
  //   margin: 3,
  // },
  buttoncss3: {
    borderColor: '0ECAF0',
    borderWidth: 1,
    width: 180,
    borderRadius: 10,
    color: '#000000',
    margin: 3,
    marginBottom: 10,
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    width: 170,
    borderRadius: 10,
  },
  buttoncss: {
    backgroundColor: '#bd1b1b',
    width: 170,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 17,
    padding: 10,
    fontWeight: 'bold',
  },
  buttonText2: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 17,
    padding: 10,
  },
  archiveText: {
    color: '#198753',
    fontSize: 18,
    marginTop: 16,
  },
});

export default EventsPage;
