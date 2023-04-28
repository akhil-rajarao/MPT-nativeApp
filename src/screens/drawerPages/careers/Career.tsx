import {Row, Rows, Table} from 'react-native-table-component';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {StyleSheet} from 'react-native';

const Career = () => {
  const header = ['S.No', 'Title', 'Published Date', 'Last Submission Date'];
  const data = [['sample', 'sample', 'sample']];
  return (
    <ScrollView>
      <View>
        <Text style={styles.titlecss}>CAREERS</Text>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.buttoncss}>
            <Text style={styles.buttonText}>Current Openings</Text>
          </TouchableOpacity>
          <Text style={styles.archiveText}>Click Archive (Click Here)</Text>
          <TextInput style={styles.input} placeholder="Search by Title" />
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncss2}>
              <Text style={styles.buttonText2}>Reset</Text>
            </TouchableOpacity>
          </View>
          <Table>
            <Row data={header} />
            <Rows data={data} />
          </Table>
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

export default Career;
