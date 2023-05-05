// // import {
// //   FlatList,
// //   Image,
// //   Pressable,
// //   StyleSheet,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   View,
// // } from 'react-native';
// // import React, {useEffect, useState} from 'react';
// // import {getAllCities, getPageDataGo} from './appSlice';
// // import {
// //   heightPercentageToDP as hp,
// //   widthPercentageToDP as wp,
// // } from 'react-native-responsive-screen';
// // import useAppDispatch, {useAppSelector} from '../app/hooks';
// // import {useIsFocused, useNavigation} from '@react-navigation/native';

// // import ContactUs from '../component/common/ContactUs';
// // import Footer from '../component/Footer';

// // const Destination = () => {
// //   const dispatch = useAppDispatch();
// //   const navigation = useNavigation<any>();
// //   const isFocused = useIsFocused();

// //   const destinationData = useAppSelector(state => state.dashboard?.bannerData);
// //   const sectionsData = useAppSelector(state => state.dashboard?.sectionsData);
// //   console.log(destinationData, 'destinationData>>>>>>>>>>>>>>>>>>>>');

// //   let popularPlacesData = sectionsData?.filter(item =>
// //     item.section_title.includes('Popular'),
// //   );

// //   let exploreData = sectionsData?.filter(item =>
// //     item.section_title.includes('Explore'),
// //   );

// //   let popularPlacesData1 = popularPlacesData[0]?.contents;

// //   let cities = useAppSelector(state => state?.dashboard?.cities);

// //   useEffect(() => {
// //     dispatch(getPageDataGo(59908572));
// //     dispatch(getAllCities());
// //   }, [dispatch, isFocused]);


// //   const [inputText, setInputText] = useState('');
// //   const [showDropDown, setShowDropDown] = useState(false);
// //   const [selectedCity, setSelectedCity] = useState<number | undefined>();

// //   const handleInputChange = (text: string) => {
// //     setInputText(text);
// //     setShowDropDown(true);
// //     const city = cities.find(
// //       c => c.city_name.toLowerCase().trim() === text.toLowerCase().trim(),
// //     );
// //     setSelectedCity(city?.id);
// //   };
// //   return (
// //     <FlatList
// //     data={[{ key: 'outer' }]} 
// //     renderItem={({ item }) => (
// //       <><><><View style={styles.container}>
// //         <View style={styles.imageSlice}>
// //           <Image
// //             style={styles.image}
// //             source={{
// //               uri: 'https://mpstdc.com/assets/mm.a1ec398c.jpg',
// //             }} />
// //         </View>
// //         <View style={styles.search}>
// //           <View
// //             // eslint-disable-next-line react-native/no-inline-styles
// //             style={{
// //               display: 'flex',
// //               flexDirection: 'column',
// //               width: wp('60%'),
// //               height: hp('5%'),
// //             }}>
// //             <TextInput
// //               // eslint-disable-next-line react-native/no-inline-styles
// //               style={{
// //                 backgroundColor: 'white',
// //                 fontFamily: 'Poppins-LightItalic',
// //                 color: '#888',
// //                 fontSize: 16,
// //                 textAlign: 'center',
// //               }}
// //               value={inputText}
// //               placeholder="City/Destination"
// //               onFocus={() => {
// //                 setShowDropDown(false);
// //               } }
// //               onChangeText={handleInputChange} />
// //             {inputText && showDropDown && (
// //               <View
// //                 // eslint-disable-next-line react-native/no-inline-styles
// //                 style={{
// //                   borderWidth: 2,
// //                   borderColor: 'red',
// //                   backgroundColor: 'skyblue',
// //                   zIndex: 1,
// //                   elevation: 2,
// //                 }}>
// //                 {cities
// //                   .filter(item => item.city_name
// //                     .toLowerCase()
// //                     .includes(inputText.toLowerCase())
// //                   )
// //                   .map(item => (
// //                     // eslint-disable-next-line react/jsx-no-undef
// //                     <TouchableOpacity
// //                       key={item.id}
// //                       style={{ paddingVertical: 10 }}
// //                       onPress={() => {
// //                         setInputText(item.city_name);
// //                         setSelectedCity(item.id);
// //                         setShowDropDown(false);
// //                       } }>
// //                       <Text
// //                         // eslint-disable-next-line react-native/no-inline-styles
// //                         style={{
// //                           fontSize: 14,
// //                           color: 'black',
// //                           textAlign: 'center',
// //                         }}>
// //                         {item.city_name}
// //                       </Text>
// //                     </TouchableOpacity>
// //                   ))}
// //               </View>
// //             )}
// //           </View>
// //           {/* text input  */}
// //           <View style={styles.searchButton}>
// //             <Pressable
// //               onPress={() => navigation.navigate('Cities', {
// //                 city_id: selectedCity,
// //               })}>
// //               <Text style={styles.buttonText}>Search</Text>
// //             </Pressable>
// //           </View>
// //         </View>
// //       </View>

// //         {/* popular palces dataa */}

// //         <View style={styles.imageTop}>
// //           <Text style={styles.headingText}>Popular Places</Text>
// //           {popularPlacesData1 && (
// //             <FlatList
// //               horizontal={true}
// //               showsHorizontalScrollIndicator={false}
// //               showsVerticalScrollIndicator={false}
// //               data={popularPlacesData1}
// //               renderItem={({ item }) => (
// //                 <View style={{ padding: 10 }}>
// //                   <Pressable
// //                     onPress={() => navigation.navigate('Cities', {
// //                       city_id: `${item?.city_id}`,
// //                     })}>
// //                     {item && (
// //                       <Image
// //                         style={styles.packagesImage}
// //                         source={{
// //                           uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
// //                         }} />
// //                     )}
// //                   </Pressable>
// //                   <View style={styles.opacityPlace}></View>
// //                   <Text style={styles.PlaceText}> {item?.content_title}</Text>
// //                 </View>
// //               )} />
// //           )}
// //         </View></><View style={styles.interests}>
// //           <Text style={styles.headingText}>Explore</Text>
// //           <View style={styles.exploreOther}>
// //             <View style={styles.exploreBox}>
// //               {exploreData && (
// //                 <Pressable
// //                   onPress={() => navigation.navigate('Cities', {
// //                     city_id: `${exploreData[0]?.contents[0]?.city_id}`,
// //                   })}>
// //                   <Image
// //                     style={styles.exploreOtherImage}
// //                     source={{
// //                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[0]?.content_images[0]}`,
// //                     }} />
// //                 </Pressable>
// //               )}
// //               <View style={styles.otherOpacity} />
// //               {exploreData && (
// //                 <Text style={styles.otherText}>
// //                   {exploreData[0]?.contents[0]?.content_title}{' '}
// //                 </Text>
// //               )}
// //             </View>
// //             <View style={styles.exploreBox}>
// //               {exploreData && (
// //                 <Pressable
// //                   onPress={() => navigation.navigate('Cities', {
// //                     city_id: `${exploreData[0]?.contents[1]?.city_id}`,
// //                   })}>
// //                   <Image
// //                     style={styles.exploreOtherImage}
// //                     source={{
// //                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[1]?.content_images[0]}`,
// //                     }} />
// //                 </Pressable>
// //               )}
// //               <View style={styles.otherOpacity} />
// //               {exploreData && (
// //                 <Text style={styles.otherText}>
// //                   {exploreData[0]?.contents[1]?.content_title}
// //                 </Text>
// //               )}
// //             </View>
// //           </View>
// //           <View style={styles.exploreOther}>
// //             <View style={styles.exploreBox}>
// //               {exploreData && (
// //                 <Pressable
// //                   onPress={() => navigation.navigate('Cities', {
// //                     city_id: `${exploreData[0]?.contents[2]?.city_id}`,
// //                   })}>
// //                   <Image
// //                     style={styles.exploreOtherImage}
// //                     source={{
// //                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[2]?.content_images[0]}`,
// //                     }} />
// //                 </Pressable>
// //               )}
// //               <View style={styles.otherOpacity} />
// //               {exploreData && (
// //                 <Text style={styles.otherText}>
// //                   {exploreData[0]?.contents[2]?.content_title}
// //                 </Text>
// //               )}
// //             </View>
// //             <View style={styles.exploreBox}>
// //               {exploreData && (
// //                 <Pressable
// //                   onPress={() => navigation.navigate('Cities', {
// //                     city_id: `${exploreData[0]?.contents[3]?.city_id}`,
// //                   })}>
// //                   <Image
// //                     style={styles.exploreOtherImage}
// //                     source={{
// //                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[3]?.content_images[0]}`,
// //                     }} />
// //                 </Pressable>
// //               )}
// //               <View style={styles.otherOpacity} />
// //               {exploreData && (
// //                 <Text style={styles.otherText}>
// //                   {exploreData[0]?.contents[3]?.content_title}
// //                 </Text>
// //               )}
// //             </View>
// //           </View>
// //           <View style={styles.exploreOther}>
// //             <View style={styles.exploreBox}>
// //               {exploreData && (
// //                 <Pressable
// //                   onPress={() => navigation.navigate('Cities', {
// //                     city_id: `${exploreData[0]?.contents[4]?.city_id}`,
// //                   })}>
// //                   <Image
// //                     style={styles.exploreOtherImage}
// //                     source={{
// //                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[4]?.content_images[0]}`,
// //                     }} />
// //                 </Pressable>
// //               )}
// //               <View style={styles.otherOpacity} />
// //               {exploreData && (
// //                 <Text style={styles.otherText}>
// //                   {exploreData[0]?.contents[4]?.content_title}
// //                 </Text>
// //               )}
// //             </View>
// //             <View style={styles.exploreBox}>
// //               {exploreData && (
// //                 <Pressable
// //                   onPress={() => navigation.navigate('Cities', {
// //                     city_id: `${exploreData[0]?.contents[5]?.city_id}`,
// //                   })}>
// //                   <Image
// //                     style={styles.exploreOtherImage}
// //                     source={{
// //                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[5]?.content_images[0]}`,
// //                     }} />
// //                 </Pressable>
// //               )}
// //               <View style={styles.otherOpacity} />
// //               {exploreData && (
// //                 <Text style={styles.otherText}>
// //                   {exploreData[0]?.contents[5]?.content_title}
// //                 </Text>
// //               )}
// //             </View>
// //           </View>
// //           <View style={styles.exploreOther}>
// //             <View style={styles.exploreBox}>
// //               {exploreData && (
// //                 <Pressable
// //                   onPress={() => navigation.navigate('Cities', {
// //                     city_id: `${exploreData[0]?.contents[6]?.city_id}`,
// //                   })}>
// //                   <Image
// //                     style={styles.exploreOtherImage}
// //                     source={{
// //                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[6]?.content_images[0]}`,
// //                     }} />
// //                 </Pressable>
// //               )}
// //               <View style={styles.otherOpacity} />
// //               {exploreData && (
// //                 <Text style={styles.otherText}>
// //                   {exploreData[0]?.contents[6]?.content_title}
// //                 </Text>
// //               )}
// //             </View>
// //             <View style={styles.exploreBox}>
// //               {exploreData && (
// //                 <Pressable
// //                   onPress={() => navigation.navigate('Cities', {
// //                     city_id: `${exploreData[0]?.contents[7]?.city_id}`,
// //                   })}>
// //                   <Image
// //                     style={styles.exploreOtherImage}
// //                     source={{
// //                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[7]?.content_images[0]}`,
// //                     }} />
// //                 </Pressable>
// //               )}
// //               <View style={styles.otherOpacity} />
// //               {exploreData && (
// //                 <Text style={styles.otherText}>
// //                   {exploreData[0]?.contents[7]?.content_title}
// //                 </Text>
// //               )}
// //             </View>
// //           </View>
// //         </View></><View style={styles.storyContainer}>
// //           <View style={styles.headingBox}>
// //             <Text style={styles.headingText}>Guest Stories</Text>
// //           </View>
// //           <Image
// //             style={styles.storyImage}
// //             source={{
// //               uri: 'https://mpstdc.com/assets/storyImg1.b792bfea.jpg',
// //             }} />
// //           <View style={styles.textBox}>
// //             <Text style={styles.storyText}>
// //               Best Hotel Of MP, I really did not expect such a wonderful
// //               experience over there, everything went as an exceptional, very
// //               supportive staff Have stayed in many excellent hotels but this one
// //               is really amazing Champak Bungalow rocks.
// //             </Text>
// //           </View>
// //         </View><View>
// //           <ContactUs />
// //         </View><View style={styles.footer}>
// //           <Footer />
// //         </View></>
// //     )}
// //   />
// //   )
// // };
// // export default Destination;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     // height: hp('30%'),
// //   },
// //   image: {
// //     height: hp('23.5%'),
// //     width: wp('100%'),
// //     position: 'relative',
// //   },
// //   imageSlice: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   search: {
// //     flexDirection: 'row',
// //     position: 'absolute',
// //     top: 150,
// //     display: 'flex',
// //     alignSelf: 'center',

// //     // width: 100,
// //   },

// //   input: {
// //     height: hp('5%'),
// //     width: wp('60%'),
// //     borderWidth: 1,
// //     backgroundColor: 'white',
// //     borderColor: 'darkred',
// //   },
// //   searchButton: {
// //     height: hp('5%'),
// //     width: wp('30%'),
// //     borderWidth: 1,
// //     backgroundColor: 'darkred',
// //     borderColor: 'darkred',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: 'white',
// //   },

// //   bannerHeading: {
// //     display: 'flex',
// //     flexDirection: 'row',
// //     marginTop: 20,
// //     // done
// //   },

// //   heartText: {
// //     fontSize: hp('3.5%'),
// //     color: 'darkred',
// //     fontStyle: 'italic',
// //     fontWeight: '600',
// //     paddingLeft: 10,
// //     // done
// //   },
// //   banners: {
// //     width: wp('100%'),
// //     height: hp('80%'),
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     // done
// //   },
// //   wildlife: {
// //     width: wp('98%'),
// //     height: hp('30%'),
// //     // done
// //   },
// //   bannersRow: {
// //     display: 'flex',
// //     flexDirection: 'row',
// //     width: wp('98%'),
// //     height: hp('50%'),

// //     justifyContent: 'space-between',
// //     paddingVertical: 10,
// //     // done
// //   },
// //   adventure: {
// //     width: wp('47%'),
// //     height: hp('35%'),
// //     // done
// //   },
// //   food: {
// //     width: wp('47%'),
// //     height: hp('35%'),
// //   },
// //   unexploredView: {
// //     width: wp('100%'),
// //     height: hp('45%'),

// //     marginTop: 30,
// //     // done
// //   },

// //   lifestyle: {
// //     color: 'darkred',
// //     fontWeight: 'bold',
// //     fontSize: hp('1.8%'),
// //     marginLeft: 5,
// //     // done
// //   },
// //   exploreImage: {
// //     width: wp('95%'),
// //     height: hp('30%'),
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   exploreOpacity: {
// //     backgroundColor: 'white',
// //     position: 'absolute',
// //     top: 255,
// //     bottom: 0,
// //     left: 0,
// //     right: 335,
// //     opacity: 0.3,
// //     borderBottomLeftRadius: 10,
// //     borderBottomRightRadius: 10,
// //   },
// //   exploreText: {
// //     fontSize: hp('2%'),
// //     color: 'floralwhite',
// //     position: 'absolute',
// //     top: 255,
// //     fontWeight: '600',
// //     alignSelf: 'flex-start',
// //     paddingLeft: 15,
// //   },
// //   opacity: {
// //     backgroundColor: 'white',
// //     position: 'absolute',
// //     top: 200,
// //     bottom: 0,
// //     left: 250,
// //     right: 0,
// //     opacity: 0.5,
// //     // done
// //   },
// //   opacity2: {
// //     backgroundColor: 'white',
// //     position: 'absolute',
// //     top: 240,
// //     bottom: 0,
// //     left: 80,
// //     right: 0,
// //     opacity: 0.3,
// //     // done
// //   },
// //   bannerText: {
// //     fontSize: hp('2%'),
// //     color: 'floralwhite',
// //     position: 'absolute',
// //     top: 200,
// //     left: 260,
// //     fontStyle: 'italic',
// //     fontWeight: '600',
// //     // done
// //   },
// //   bannerText2: {
// //     fontSize: hp('2%'),
// //     color: 'floralwhite',
// //     position: 'absolute',
// //     top: 240,
// //     left: 90,
// //     fontStyle: 'italic',
// //     fontWeight: '600',
// //     // done
// //   },
// //   popularView: {
// //     width: wp('100%'),
// //     height: hp('38%'),
// //     marginTop: 30,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   headingText: {
// //     fontSize: hp('3.5%'),
// //     color: 'darkred',
// //     fontStyle: 'italic',
// //     fontWeight: '800',
// //     paddingBottom: 8,
// //     alignSelf: 'flex-start',
// //     paddingLeft: 5,
// //   },

// //   read: {
// //     color: 'black',
// //     fontSize: hp('1.8%'),
// //     paddingTop: 2,
// //     // done
// //   },

// //   contact: {
// //     width: wp('100%'),
// //     height: hp('40%'),
// //     marginTop: 10,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     // done
// //   },
// //   contactHeading: {
// //     color: 'white',
// //     fontSize: hp('4%'),
// //     marginBottom: 35,
// //     fontStyle: 'italic',
// //     fontWeight: '600',
// //     // done
// //   },
// //   contactImage: {
// //     height: hp('30%'),
// //     width: wp('100%'),
// //     // done
// //   },
// //   contactText: {
// //     position: 'absolute',

// //     alignItems: 'center',
// //     // done
// //   },
// //   contentSubText: {
// //     color: 'white',
// //     fontSize: hp('1.7%'),
// //     // done
// //   },
// //   interests: {
// //     width: wp('100%'),
// //     height: hp('113%'),
// //     backgroundColor: 'tan',
// //     marginTop: 30,
// //   },
// //   exploreBox: {
// //     width: wp('48%'),
// //     height: hp('25%'),
// //     backgroundColor: 'black',
// //     borderRadius: 10,
// //     // done
// //   },
// //   exploreOther: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-around',
// //     paddingBottom: 10,
// //     // done
// //   },
// //   exploreOtherImage: {
// //     width: wp('48%'),
// //     height: hp('25%'),
// //     // borderRadius: 10,
// //     // done
// //   },
// //   otherOpacity: {
// //     backgroundColor: 'white',
// //     alignItems: 'center',
// //     position: 'absolute',
// //     top: 160,
// //     bottom: 0,
// //     left: 0,
// //     right: 70,
// //     opacity: 0.4,

// //     // done
// //   },
// //   otherText: {
// //     fontSize: hp('2.1%'),
// //     color: 'floralwhite',
// //     position: 'absolute',
// //     top: 162,
// //     left: 10,
// //     fontWeight: '500',
// //     fontStyle: 'italic',
// //     // opacity: 0.5,
// //     // done
// //   },
// //   storyContainer: {
// //     width: wp('100%'),
// //     height: hp('80%'),
// //     // backgroundColor: 'skyblue',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   storyImage: {
// //     width: wp('96%'),
// //     height: hp('30%'),
// //   },
// //   textBox: {
// //     width: wp('96%'),
// //     height: hp('30%'),
// //     backgroundColor: 'tan',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   headingBox: {
// //     width: wp('96%'),
// //     height: hp('10%'),
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   storyText: {
// //     color: 'black',
// //     marginHorizontal: 10,

// //     fontStyle: 'italic',
// //   },

// //   footer: {
// //     width: wp('100%'),
// //     height: hp('90%'),
// //     paddingLeft: 10,
// //   },
// //   container1: {
// //     flex: 1,
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     //  backgroundColor:"red",
// //     height: hp('20%'),
// //     marginTop: 50,
// //   },

// //   image1: {
// //     width: wp('95%'),
// //     height: hp('25%'),
// //     marginRight: 10,
// //     // resizeMode: 'cover',
// //     resizeMode: 'stretch',
// //     // aspectRatio:1
// //     // borderRadius:10
// //   },
// //   opacityPlace: {
// //     backgroundColor: 'red',
// //     position: 'absolute',
// //     top: 220,
// //     bottom: 10,
// //     left: 10,
// //     right: 210,
// //     opacity: 0.3,
// //   },
// //   PlaceText: {
// //     fontSize: hp('3.0%'),
// //     color: '#ffffff',
// //     position: 'absolute',
// //     top: 230,
// //     left: 10,
// //     fontStyle: 'italic',
// //     fontWeight: '600',
// //   },
// //   imageTop: {
// //     alignItems: 'center',
// //     marginTop: 70,
// //     // position: 'relative',
// //   },
// //   packagesImage: {
// //     width: wp('85%'),
// //     height: hp('35%'),
// //   },
// // });

// import {
//   FlatList,
//   Image,
//   Linking,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect} from 'react';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import useAppDispatch, {useAppSelector} from '../app/hooks';
// import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';

// import ContactUs from '../component/common/ContactUs';
// import Footer from '../component/Footer';
// import HTMLView from 'react-native-htmlview';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';
// import {getDestinationData} from './appSlice';
// const Cities = () => {
//   const dispatch = useAppDispatch();
//   const navigation = useNavigation();
//   const route = useRoute();

//   const isFocused = useIsFocused();

//   const {city_id}: any = route.params;
//   const destinationData = useAppSelector(
//     state => state.dashboard.destinationData,
//   );
//   // console.log('city_id==>', city_id);

//   console.log(destinationData, 'UJJANNNN DATAA=====>');
//   const destDataBanner = destinationData?.banners;
//   const destSection = destinationData?.section?.contents;
//   // const dataAccomadationImages = destinationData?.properties[0]?.property_image;
//   const dataAccommodation = destinationData?.properties;

//   // console.log("destDataBanner=====>",destDataBanner[0].description)
 
//   const amenitiesObj: any = Object.freeze({
//     1: 'Dinner',
//     2: 'A/C Rooms',
//     3: 'BAR Facilities',
//     4: 'WiFi Facilities',
//     5: 'Conference Room',
//     6: 'Transport',
//     7: 'Gym Facilities',
//     8: 'Parking facilities',
//     9: 'Pool facilities',
//     10: 'Kerala Ayurvedic Panchkarma',
//   });

//   const rating = 4;
//   useEffect(() => {
//     dispatch(getDestinationData(city_id));
//   }, [city_id, dispatch, isFocused]);

//   return (
//    <FlatList
//     data = {[{key:'outer'}]}
//     renderItem={() =>(
//       <><View style={styles.container}>
//         {destDataBanner && (
//           <Image
//             style={styles.wildlifeImage}
//             source={{
//               uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${destDataBanner[0]?.banner_image}`,
//             }} />
//         )}
//         <View style={styles.opacity} />
//         <Text style={styles.imageText}>{destDataBanner[0]?.banner_title}</Text>
//       </View><View style={styles.AccommodationView}>
//           <Text style={styles.packagesHeading}>Accommodation</Text>
//           {dataAccommodation && (
//             <FlatList
//               horizontal={true}
//               data={dataAccommodation}
//               renderItem={({ item }) => (
//                 <View style={styles.HotelBox}>
//                   {item.property_image && (
//                     <Image
//                       style={styles.hotelImage}
//                       source={{
//                         uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.property_image[0]}`,
//                       }} />
//                   )}
//                   <View style={styles.boxText}>
//                     <Text style={styles.Residency}>{item?.property_type}</Text>

//                     <Text style={styles.mptText}>{item?.property_name}</Text>

//                     <View style={styles.stars}>
//                       <View style={{ marginRight: 5 }}>
//                         <Entypo name="tripadvisor" size={15} color="green" />
//                       </View>
//                       {Array.from({ length: 5 }).map((_item, index) => item?.rating >= index + 1 ? (
//                         <Icon
//                           key={index}
//                           name="star"
//                           size={15}
//                           color="goldenrod" />
//                       ) : (
//                         <Icon
//                           key={index}
//                           name="star-o"
//                           size={15}
//                           color="black" />
//                       )
//                       )}
//                     </View>
//                     {/* ??????????????????????/ */}
//                     <View style={styles.dateNew}>
//                       {item &&
//                         item?.ammenities &&
//                         item?.ammenities?.map((number: number) => {
//                           return (
//                             <View
//                               // eslint-disable-next-line react-native/no-inline-styles
//                               style={{
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 flexDirection: 'row',
//                               }}>
//                               <Text
//                                 style={{ color: 'black', flexDirection: 'row' }}>
//                                 - {amenitiesObj[Number(number)]}
//                               </Text>
//                             </View>
//                           );
//                         })}
//                     </View>
//                   </View>
//                   <View style={styles.button}>
//                     <TouchableOpacity
//                       onPress={() => navigation.navigate('AccommodationView', {
//                         content: item,
//                       })}>
//                       <View style={styles.viewButton}>
//                         <Text style={styles.viewText}>VIEW</Text>
//                       </View>
//                     </TouchableOpacity>
//                     <View style={styles.bookButton}>
//                       <TouchableOpacity
//                         onPress={() => Linking.openURL(`${item.booking_url}`)}>
//                         <Text style={styles.bookText}>BOOK NOW</Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               )} />
//           )}
//         </View><View style={styles.cityTextView}>
//           {/* <Text>{destDataBanner[0].description}</Text> */}
//           {/* <HTMLView value={destDataBanner[0].description} stylesheet={styles} /> */}
//         </View><View style={styles.packages}>
//           <Text style={styles.packagesHeading}>Places To See ...</Text>
//           {destSection && (
//             <FlatList
//               horizontal={true}
//               data={destSection}
//               renderItem={({ item }) => (
//                 <View style={styles.imageTop}>
//                   <Image
//                     style={styles.packagesImage}
//                     source={{
//                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images}`,
//                     }} />
//                   <View style={styles.packagesTitleView}>
//                     <Text style={styles.packagesTitle}>
//                       {item?.content_title}
//                     </Text>
//                   </View>
//                   <View style={styles.packagesDescription}>
//                     <Text style={{ color: 'black', letterSpacing: 2, fontSize: 18 }}>
//                       {item?.description?.value0}
//                     </Text>
//                   </View>
//                 </View>
//               )} />
//           )}
//         </View><View>
//           <ContactUs />
//         </View><View style={styles.footer}>
//           <Footer />
//         </View></>
//     )}
//    />
//   );
// };

// export default Cities;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   wildlifeImage: {
//     width: wp('100%'),
//     height: hp('35%'),
//     borderRadius: 1,
//   },
//   opacity: {
//     position: 'absolute',
//     backgroundColor: 'black',
//     width: wp('100%'),
//     height: hp('35%'),
//     opacity: 0.3,
//   },
//   imageText: {
//     color: 'lightgrey',
//     fontSize: 40,
//     fontWeight: '800',
//     marginBottom: 7,
//     position: 'absolute',
//     opacity: 0.6,
//   },
//   packages: {
//     width: wp('100%'),
//     height: hp('80%'),
//     backgroundColor: 'lightpink',
//     opacity: 0.8,
//     marginTop: 50,
//   },
//   packagesHeading: {
//     fontSize: hp('4.5%'),
//     color: 'darkred',
//     // marginTop: 2,
//     paddingBottom: 8,
//     fontFamily: 'YouthPower-X34qG',
//     alignSelf: 'flex-start',
//     marginLeft: 10,
//     marginTop: 10,
//   },
//   packagesTitle: {
//     fontSize: hp('4.5%'),
//     color: 'darkred',
//     // marginTop: 2,
//     paddingBottom: 8,
//     fontFamily: 'YouthPower-X34qG',
//     // alignSelf: '',
//   },

//   packagesTitleView: {
//     alignSelf: 'flex-start',
//     marginLeft: 8,
//     marginTop: 8,
//   },
//   imageTop: {
//     alignItems: 'center',
//     margin: 10,
//     marginBottom: 20,
//     backgroundColor: 'white',
//   },
//   packagesImage: {
//     width: wp('95%'),
//     height: hp('40'),
//     // marginHorizontal: 8,
//     alignSelf: 'center',
//   },
//   // Residency: {
//   //   fontSize: 13,
//   //   color: 'black',
//   //   marginTop: 5,
//   // },
//   // AccommodationView: {
//   //   width: wp('100%'),
//   //   marginTop: 40,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   // },
//   // headingText: {
//   //   fontSize: hp('3.5%'),
//   //   color: 'darkred',
//   //   fontStyle: 'italic',
//   //   fontWeight: '800',
//   //   // paddingBottom: 8,
//   //   alignSelf: 'flex-start',
//   //   paddingLeft: 5,
//   // },
//   // HotelBox: {
//   //   height: hp('50%'),
//   //   width: wp('96%'),
//   //   borderWidth: 1,
//   //   borderColor: 'darkred',
//   //   margin: 10,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   // },
//   // hotelImage: {
//   //   width: wp('92%'),
//   //   height: hp('25%'),
//   // },
//   // boxText: {
//   //   width: wp('92%'),
//   //   height: hp('15%'),
//   // },
//   // mptText: {
//   //   fontSize: 12,
//   //   color: 'darkred',
//   //   marginTop: 5,
//   // },
//   // stars: {
//   //   flexDirection: 'row',
//   //   padding: 2,
//   // },
//   // priceText: {
//   //   fontSize: 12,
//   //   color: 'black',
//   //   marginTop: 5,
//   // },
//   // button: {
//   //   flexDirection: 'row',
//   //   marginTop: 20,
//   // },
//   // viewButton: {
//   //   width: wp('20%'),
//   //   height: hp('4%'),
//   //   borderWidth: 1,
//   //   borderColor: 'darkred',
//   //   marginRight: 10,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
//   // bookButton: {
//   //   width: wp('20%'),
//   //   height: hp('4%'),
//   //   backgroundColor: 'darkred',
//   //   marginRight: 10,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
//   // viewText: {
//   //   fontSize: 12,
//   //   color: 'darkred',
//   // },
//   // bookText: {
//   //   fontSize: 12,
//   //   color: 'white',
//   // },
//   // footer: {
//   //   marginLeft: 10,
//   // },
//   cityTextView: {
//     paddingHorizontal: 10,
//   },
//   p: {
//     color: 'black',
//     fontSize: 16,
//     // paddingBottom: 20,
//     letterSpacing: 1,
//   },
//   h2: {
//     color: 'darkred',
//     fontSize: 20,
//     fontWeight: '800',
//   },
//   h1: {
//     color: 'darkred',
//     // fontFamily: 'YouthPower-X34qG',
//     fontSize: 23,
//     fontWeight: 'bold',
//   },
//   li: {
//     color: 'black',
//     fontSize: 16,
//   },
//   packagesDescription: {
//     width: wp('95%'),
//     height: hp('40'),
//     marginLeft: 9,
//     marginTop: 10,
//   },
//   AccommodationView: {
//     width: wp('100%'),
//     marginTop: 70,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headingText: {
//     fontSize: hp('3.5%'),
//     color: 'darkred',
//     fontStyle: 'italic',
//     fontWeight: '800',
//     // paddingBottom: 8,
//     alignSelf: 'flex-start',
//     paddingLeft: 5,
//   },
//   HotelBox: {
//     height: hp('50%'),
//     width: wp('96%'),
//     borderWidth: 1,
//     borderColor: 'darkred',
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   hotelImage: {
//     width: wp('92%'),
//     height: hp('25%'),
//   },
//   boxText: {
//     width: wp('92%'),
//     height: hp('15%'),
//   },
//   Residency: {
//     fontSize: 13,
//     color: 'black',
//     marginTop: 5,
//   },
//   mptText: {
//     fontSize: 12,
//     color: 'darkred',
//     marginTop: 5,
//   },
//   stars: {
//     flexDirection: 'row',
//     padding: 2,
//   },
//   priceText: {
//     fontSize: 12,
//     color: 'black',
//     marginTop: 5,
//   },
//   button: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   viewButton: {
//     width: wp('20%'),
//     height: hp('4%'),
//     borderWidth: 1,
//     borderColor: 'darkred',
//     marginRight: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bookButton: {
//     width: wp('20%'),
//     height: hp('4%'),
//     backgroundColor: 'darkred',
//     marginRight: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   viewText: {
//     fontSize: 12,
//     color: 'darkred',
//   },
//   bookText: {
//     fontSize: 12,
//     color: 'white',
//   },

//   contact: {
//     width: wp('100%'),
//     height: hp('40%'),
//     marginTop: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // done
//   },
//   contactHeading: {
//     color: 'white',
//     fontSize: hp('4%'),
//     marginBottom: 35,
//     fontStyle: 'italic',
//     fontWeight: '600',
//     // done
//   },
//   contactImage: {
//     height: hp('30%'),
//     width: wp('100%'),
//     // done
//   },
//   contactText: {
//     position: 'absolute',

//     alignItems: 'center',
//     // done
//   },
//   contentSubText: {
//     color: 'white',
//     fontSize: hp('1.7%'),
//     // done
//   },
//   dateNew: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     // marginHorizontal: 10,
//     flexWrap: 'wrap',
//   },
//   footer: {
//     width: wp('100%'),
//     height: hp('90%'),
//     paddingLeft: 10,
//   },
// });

import { View, Text } from 'react-native'
import React from 'react'

const Trial = () => {
  return (
    <View>
      <Text>Trial</Text>
    </View>
  )
}

export default Trial