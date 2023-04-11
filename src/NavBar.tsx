import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'

// import { Dropdown } from 'react-native-element-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { Ionicons , FontAwesome5} from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';


const NavBar: React.FC = () => {

    
    const [selected, setSelected] = React.useState('Dive In');
    const data = [
        { label: 'Explore', value: '1' },
        { label: 'Destination', value: '2' },

      ];
    const navigation = useNavigation<any>()

    return (
        <>
            
            <View style={styles.container}>
                <View style={{flexDirection:'row',marginLeft:10,width:'30%'}} >
                    {/* <Image style={styles.imageContainer} source={require('./assests/MPTlogo.png')} /> */}

                    {/* <Image style={styles.imageContainer} source={require('./assests/G20theme.png')} /> */}
                </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                <View style={{marginRight:120,justifyContent:"center"}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>BOOK A STAY</Text>
                 </TouchableOpacity>
                 </View>
                 <View style={{}}>
                  <View style={{right:100,flexDirection:'row',justifyContent:'space-between'}}> 
                  { <SelectList
                  
              placeholder="Dive in"
              searchPlaceholder="Dive in"
              boxStyles={{
                width: 80,
                height: "90%",
                borderRadius:0,
                borderColor:'white',
                
              }}
              dropdownStyles={{ width: 150, }}
              setSelected={(val:any) => setSelected(val)}
              data={data}
              search={false}
              save="value"
            />

                  /* <Dropdown
         style={styles.dropdown}
         placeholderStyle={styles.placeholderStyle}
         selectedTextStyle={styles.selectedTextStyle}
         inputSearchStyle={styles.inputSearchStyle}
         iconStyle={styles.iconStyle}
         data={data}
         search
         maxHeight={300}
         labelField="label"
         valueField="value"
         placeholder="Select item"
         searchPlaceholder="Search..."
         value={value}
         onChange={item => {
           setValue(item.value);
         }}
        
      /> */}
                    <View style={{marginLeft:25,marginBottom:5}}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                       <Icon name="bars" size={30}  />
                   </TouchableOpacity>
                  </View>
                  </View> 
                  
                  </View>
            </View>
        </View>

        </>
    );
};


const styles = StyleSheet.create({
    container: {
        height:'20%',
         flexDirection: 'row',
      //  backgroundColor: "cyan",
    //    height:'10%',
       marginTop: 5,
       // alignItems: 'center',
         justifyContent: 'space-between',
    },
    button: {
        // paddingVertical: 20,
        // paddingHorizontal: 10,
        paddingTop:8,

        paddingBottom:8,
        paddingHorizontal:10,
        backgroundColor:"red",
        borderRadius: 5,
       
      },
      buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    imageContainer: {
        resizeMode: "contain",
        height: '100%',
        width: '30%',
        marginHorizontal:2
    },
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

});

export default  NavBar;