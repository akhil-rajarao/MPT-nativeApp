// import {
//   FlatList,
//   Image,
//   Pressable,
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
// import {useIsFocused, useNavigation} from '@react-navigation/native';

// import {Carousel} from 'react-native-auto-carousel';
// import ContactUs from '../component/common/ContactUs';
// import Footer from '../component/Footer';
// import PopularPlaces from '../component/common/PopularPlaces';
// import {getPageDataGo} from './appSlice';


// const Trial = () => {
//   const navigation = useNavigation<any>();

//   const dispatch = useAppDispatch();

//   const isFocused = useIsFocused();

//   const sectionsData = useAppSelector(state => state?.dashboard?.sectionsData);
//   const sectionsArray = sectionsData[1]?.contents;
//   const unexploredofMP = sectionsData[3]?.contents;
//   const topPackages = sectionsData[0]?.contents;
//   const upcomingEvents = sectionsData[2]?.contents;

//   useEffect(() => {
//     dispatch(getPageDataGo(80373489));
//   }, [dispatch, isFocused]);
  
//   console.log("insideee triallll hurrayyy===>")
//   const Images = [
//     'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2471332643.png',
//     'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2179003322.png',
//   ];

//   return (
//     <FlatList
//     data={[{ key: 'outer' }]} // data for outer FlatList, can be an empty array if you don't need it
//     renderItem={({ item }) => (
//       <><View style={styles.container}>
//         <Carousel
//           data={Images}
//           renderItem={item => (
//             <Image key={item} source={{ uri: item }} style={styles.image} />
//           )} />
//         <View style={styles.text}>
//           <Text style={styles.heading}>Majestic</Text>
//           <Text style={styles.heading1}>MADHYA PRADESH</Text>
//           <View style={styles.explore}>
//             <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
//               <Text style={styles.exploreText}>EXPLORE</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Text style={styles.content}>
//               The Heart of India, tourism hotspot that boasts of a rich cultural
//               and natural heritage.From the intricately carved Khajuraho Temples
//               to the rugged wilderness of Kanha National Park, the state offers
//               a diverse range of attractions that cater to all kinds of
//               travelers.
//             </Text>
//           </View>
//         </View>
//       </View><View style={styles.eventPackages}>
//           <Text style={styles.packagesHeading}>Upcoming Events in MP</Text>
//           {upcomingEvents && (
//             <FlatList
//               horizontal={true}
//               showsHorizontalScrollIndicator={false}
//               data={upcomingEvents}
//               renderItem={({ item }) => (
//                 <View style={styles.imageTop}>
//                   <Image
//                     style={styles.eventImage}
//                     source={{
//                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images}`,
//                     }} />
//                   <View style={styles.eventOpacity} />
//                   <Text style={styles.eventText}>{item?.content_title}</Text>
//                   <Pressable
//                     onPress={() => navigation.navigate('KnowMoreUE', {
//                       content: item,
//                     })}>
//                     <View>
//                       <Text style={styles.knowMore}>Know More</Text>
//                     </View>
//                   </Pressable>
//                 </View>
//               )} />
//           )}
//         </View><View style={styles.bannerHeading}>
//           <Text style={styles.disText}>Discover</Text>
//           <Text style={styles.heartText}>Heart of India</Text>
//         </View><View style={styles.banners}>
//           {sectionsArray && (
//             <FlatList
//               data={sectionsArray}
//               renderItem={({ item }) => (
//                 <View>
//                   <Pressable
//                     onPress={() => {
//                       if (item.id === 93187332 || item.id === 24947658) {
//                         navigation.navigate('InnerPage2', {
//                           id: item?.id,
//                         });
//                       } else {
//                         navigation.navigate('InnerPages', {
//                           id: item?.id,
//                         });
//                       }
//                     } }>
//                     <Image
//                       style={styles.wildlife}
//                       source={{
//                         uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
//                       }} />
//                   </Pressable>

//                   <View style={styles.opacity} />
//                   <Text style={styles.bannerText}>{item?.content_title}</Text>
//                 </View>
//               )} />
//           )}
//         </View><View style={styles.unexploredView}>
//           <Text style={styles.unexplored}>Unexplored side of MP</Text>
//           <View>
//             {unexploredofMP && (
//               <FlatList
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//                 data={unexploredofMP}
//                 renderItem={({ item }) => (
//                   <View>
//                     <Image
//                       style={styles.exploreImage}
//                       source={{
//                         uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
//                       }} />
//                     <Text style={styles.relaxText}>{item.content_title}</Text>
//                     <Pressable
//                       onPress={() => navigation.navigate('KnowMoreUE', {
//                         content: item,
//                       })}>
//                       <Text style={styles.read}>Read more -- </Text>
//                     </Pressable>
//                   </View>
//                 )} />
//             )}
//           </View>
//         </View><View style={styles.packages}>
//           <Text style={styles.packagesHeading}>Our Top Packages</Text>
//           {topPackages && (
//             <FlatList
//               horizontal={true}
//               showsHorizontalScrollIndicator={false}
//               data={topPackages}
//               renderItem={({ item }) => (
//                 <View style={styles.imageTop}>
//                   <Image
//                     style={styles.packagesImage}
//                     source={{
//                       uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
//                     }} />
//                   <View style={styles.packagesContent}>
//                     <View style={styles.days}>
//                       <Text style={styles.dayText}>
//                         {item?.description?.value0}
//                       </Text>
//                     </View>
//                     <Text style={styles.headpackage}>{item?.content_title}</Text>
//                     <Text style={styles.textpackage}>
//                       {item?.description?.value2}
//                     </Text>
//                     <Text style={styles.optionPackage}>
//                       {item?.description?.value3?.toUpperCase()}
//                     </Text>
//                     <Pressable onPress={() => navigation.navigate('PackageView')}>
//                       <View style={styles.view}>
//                         <Text style={styles.viewText}>VIEW</Text>
//                       </View>
//                     </Pressable>
//                   </View>
//                 </View>
//               )} />
//           )}
//         </View><View>
//           <PopularPlaces />
//         </View><View>
//           <ContactUs />
//         </View><View style={styles.footer}>
//           <Footer />
//         </View></>
//     )}
//    />
//  );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     height: hp('100%'),
//     width: wp('100%'),
//     position: 'relative',
//   },
//   text: {
//     position: 'absolute',
//     left: 20,
//     bottom: 100,
//     right: '20%',
//     height: '30%',
//   },
//   heading: {
//     color: 'white',
//     fontSize: 15,
//     fontWeight: '400',
//   },
//   heading1: {
//     color: 'lightgrey',
//     fontSize: 30,
//     fontWeight: '800',
//     marginBottom: 7,
//   },
//   explore: {
//     // color: 'white',
//     // fontSize: 10,
//     // fontWeight: '400',
//     width: wp('20%'),
//     height: hp('4%'),
//     backgroundColor: 'white',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   exploreText: {
//     color: 'red',
//     fontSize: hp('1.5%'),
//     fontWeight: '400',
//   },
//   content: {
//     color: 'white',
//     fontWeight: '600',
//   },
//   eventImage: {
//     width: wp('95%'),
//     height: hp('23'),
//   },
//   eventText: {
//     color: 'white',
//     fontSize: 17,
//     fontWeight: '800',
//     position: 'absolute',
//     top: 145,
//     bottom: 45,
//     left: 10,
//     right: 0,
//   },

//   eventOpacity: {
//     backgroundColor: 'black',
//     position: 'absolute',
//     top: 140,
//     bottom: 55,
//     left: 10,
//     right: 10,
//     opacity: 0.5,
//   },

//   bannerHeading: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 40,
//     paddingLeft: 10,
//   },
//   disText: {
//     fontSize: hp('2.5%'),
//     color: 'black',
//     fontStyle: 'italic',
//     paddingRight: 10,
//   },
//   heartText: {
//     fontSize: hp('4.5%'),
//     color: 'darkred',
//     fontWeight: '600',
//     fontFamily: 'YouthPower-X34qG',
//   },
//   banners: {
//     width: wp('100%'),
//     height: hp('125%'),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   wildlife: {
//     width: wp('98%'),
//     height: hp('30%'),
//     borderRadius: 1,
//     marginTop: 10,
//   },
//   bannersRow: {
//     display: 'flex',
//     width: wp('98%'),
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//   },
//   opacity: {
//     backgroundColor: 'white',
//     position: 'absolute',
//     top: 180,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     opacity: 0.5,
//   },
//   bannerText: {
//     fontSize: hp('3.5%'),
//     color: 'floralwhite',
//     position: 'absolute',
//     top: 180,
//     fontFamily: 'YouthPower-X34qG',
//     marginLeft: 5,
//   },
//   unexploredView: {
//     width: wp('100%'),
//     height: hp('38%'),
//     marginTop: 30,
//   },
//   unexplored: {
//     fontSize: hp('4.5%'),
//     color: 'darkred',

//     paddingBottom: 8,
//     fontFamily: 'YouthPower-X34qG',
//     paddingLeft: 10,
//   },
//   exploreImage: {
//     width: wp('90%'),
//     height: 200,
//     borderRadius: 10,
//     marginHorizontal: 5,
//   },
//   relaxText: {
//     color: 'darkred',
//     fontSize: hp('2.0%'),
//     fontWeight: '800',
//     paddingTop: 5,
//     marginLeft: 10,
//   },
//   read: {
//     color: 'black',
//     fontSize: hp('1.8%'),
//     paddingTop: 2,
//     marginLeft: 10,
//   },
//   eventPackages: {
//     width: wp('100%'),
//     height: hp('38%'),

//     marginTop: 50,
//   },
//   packages: {
//     width: wp('100%'),
//     height: hp('100%'),
//     marginTop: 50,
//   },
//   packagesHeading: {
//     fontSize: hp('4.5%'),
//     color: 'darkred',
//     marginTop: 2,
//     paddingBottom: 8,
//     fontFamily: 'YouthPower-X34qG',
//     marginLeft: 10,
//   },
//   imageTop: {
//     alignItems: 'center',
//     padding: 10,
//     // margin: 1,
//   },
//   packagesImage: {
//     width: wp('95%'),
//     height: hp('40%'),
//     marginHorizontal: 8,
//   },
//   packagesContent: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: wp('95%'),
//     height: hp('50%'),
//     backgroundColor: 'white',
//     borderRadius: 5,
//     marginTop: 5,
//   },
//   days: {
//     height: hp('3.7%'),
//     borderRadius: 7,
//     borderWidth: 2,
//     borderColor: 'darkred',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 35,
//     marginRight: 10,
//     alignSelf: 'flex-end',
//     paddingHorizontal: 4,
//   },
//   dayText: {
//     color: 'darkred',
//   },
//   headpackage: {
//     color: 'darkred',
//     fontSize: hp('2%'),
//     marginBottom: 35,
//   },
//   textpackage: {
//     color: 'dimgray',
//     fontSize: hp('1.4%'),
//     paddingHorizontal: 20,
//     letterSpacing: 2,
//     marginBottom: 35,
//   },
//   optionPackage: {
//     color: 'darkred',
//     fontSize: hp('1.5%'),
//     paddingHorizontal: 10,
//   },
//   optionPackage1: {
//     color: 'darkred',
//     fontSize: hp('1.5%'),
//     paddingHorizontal: 10,
//     marginBottom: 35,
//   },
//   view: {
//     width: wp('19%'),
//     height: hp('3.7%'),
//     backgroundColor: 'darkred',
//     borderRadius: 7,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 4,
//   },
//   viewText: {
//     color: 'white',
//     fontSize: hp('1.7%'),
//   },
//   popular: {
//     width: wp('100%'),
//     height: hp('50%'),
//     backgroundColor: '#fff2da',
//     marginTop: 30,
//   },
//   opacityPlace: {
//     backgroundColor: 'white',
//     position: 'absolute',
//     top: 250,
//     bottom: 0,
//     left: 0,
//     right: 215,
//     opacity: 0.3,
//   },
//   PlaceText: {
//     fontSize: hp('3.0%'),    // width: wp('30%'),
//     color: '#ffffff',
//     position: 'absolute',
//     top: 250,
//     left: 6,
//     fontFamily: 'YouthPower-X34qG',
//   },
//   contact: {
//     width: wp('100%'),
//     height: hp('40%'),
//     marginTop: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contactHeading: {
//     color: 'white',
//     fontSize: hp('5%'),
//     marginBottom: 35,
//     fontFamily: 'YouthPower-X34qG',
//   },
//   contactImage: {
//     height: hp('30%'),
//     width: wp('100%'),
//   },
//   contactText: {
//     position: 'absolute',
//     alignItems: 'center',
//   },
//   contentSubText: {
//     color: 'white',
//     fontSize: hp('1.7%'),
//   },
//   footer: {
//     marginLeft: 10,
//   },
//   knowMore: {
//     color: 'darkred',
//     textDecorationLine: 'underline',
//     fontSize: 14,
//     marginRight: 250,
//     marginTop: 5,
//   },
// });

// export default Trial;




import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../app/hooks';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import ContactUs from '../component/common/ContactUs';
import ExploreImageContainer from '../component/common/ExploreImageContainer';
import Footer from '../component/Footer';
import {getPageDataGo} from './appSlice';

const Trial = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  const ExploreBannerData = useAppSelector(state => state.dashboard.bannerData);
  const ExploresectionsData = useAppSelector(
    state => state.dashboard.sectionsData,
  );
  let experienceData = ExploresectionsData?.filter(
    item => item.experience === true && item.section_title != 'Explore',
  );

  const attractionsData = ExploresectionsData[0]?.contents;

  const unexploredofMP = ExploresectionsData[6]?.contents;

  console.log('===unexploredofMP side=====>', unexploredofMP);

  useEffect(() => {
    dispatch(getPageDataGo(59789662));
  }, [dispatch, isFocused]);

  return (
    <FlatList
    data={[{ key: 'outer' }]} 
    renderItem={({ item }) => (
      <><><><><View style={styles.container}>
        <View style={styles.imageSlice}>
          {ExploreBannerData && (
            <FlatList
              data={ExploreBannerData}
              horizontal={true}
              renderItem={({ item }) => (
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.banner_image}`,
                  }} />
              )} />
          )}
          <View style={styles.text}>
            <Text style={styles.heading1}>EXPLORE</Text>
          </View>
        </View>
      </View><View style={styles.attractionView}>
          <Text style={styles.headingText}>Attractions</Text>
          {attractionsData && (
            <FlatList
              data={attractionsData}
              horizontal={true}
              renderItem={({ item }) => (
                <View>
                  <Pressable
                    onPress={() => navigation.navigate('InnerPages', {
                      id: item?.id,
                    })}>
                    <Image
                      style={styles.exploreImage}
                      source={{
                        uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
                      }} />
                  </Pressable>
                  <View style={styles.exploreOpacity}></View>
                  <Text style={styles.exploreText}>{item?.content_title}</Text>
                </View>
              )} />
          )}
        </View></><View style={styles.bannerHeading}>
          <Text style={styles.heartText}>Explore</Text>
        </View><View style={styles.banners}>
          <View>
            <Pressable
              onPress={() => navigation.navigate('InnerPage2', {
                id: experienceData[0]?.contents[0]?.id,
              })}>
              <Image
                style={styles.wildlife}
                source={{
                  uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${experienceData[0]?.contents[0]?.content_images[0]}`,
                }} />
            </Pressable>
            <View style={styles.opacity} />
            <Text style={styles.bannerText}>Know more</Text>
          </View>
          <View style={styles.bannersRow}>
            <View>
              <Pressable
                onPress={() => navigation.navigate('InnerPage2', {
                  id: experienceData[0]?.contents[1]?.id,
                })}>
                <Image
                  style={styles.adventure}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${experienceData[0]?.contents[1]?.content_images[0]}`,
                  }} />
              </Pressable>
              <View style={styles.opacity2} />
              <Text style={styles.bannerText2}>Know more</Text>
            </View>
            <View>
              <Pressable
                onPress={() => navigation.navigate('InnerPage2', {
                  id: experienceData[0]?.contents[2]?.id,
                })}>
                <Image
                  style={styles.food}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${experienceData[0]?.contents[2]?.content_images[0]}`,
                  }} />
              </Pressable>
              <View style={styles.opacity2} />

              <Text style={styles.bannerText2}>Know more</Text>
            </View>
          </View>
        </View></><View style={styles.unexploredView}>
          <Text style={styles.unexplored}>Unexplored side of MP</Text>
          <View>
            {unexploredofMP && (
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={unexploredofMP}
                renderItem={({ item }) => (
                  <View>
                    <Image
                      style={styles.exploreImage}
                      source={{
                        uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`,
                      }} />
                    <Text style={styles.relaxText}>{item.content_title}</Text>
                    <Pressable
                      onPress={() => navigation.navigate('KnowMoreUE', {
                        content: item,
                      })}>
                      <Text style={styles.read}>Read more -- </Text>
                    </Pressable>
                  </View>
                )} />
            )}
          </View>
        </View></><View>
          <ExploreImageContainer />
        </View><View>
          <ContactUs />
        </View><View style={styles.footer}>
          <Footer />
        </View></>

    )}
    />
  );
};
export default Trial;

const styles = StyleSheet.create({
  navbar: {},
  container: {
    flex: 1,
    // done
  },
  image: {
    height: hp('40%'),
    width: wp('25%'),
    position: 'relative',
    // done
  },
  imageSlice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // done
  },
  text: {
    position: 'absolute',
    // done
  },

  heading1: {
    color: 'lightgrey',
    fontFamily: 'YouthPower-X34qG',
    marginBottom: 7,
    fontSize: hp('5%'),
    // done
  },

  bannerHeading: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    // done
  },

  heartText: {
    fontSize: hp('4.5%'),
    color: 'darkred',
    paddingBottom: 8,
    fontFamily: 'YouthPower-X34qG',
    paddingLeft: 10,
    // done
  },
  banners: {
    width: wp('100%'),
    height: hp('65%'),
    // justifyContent: 'center',
    alignItems: 'center',

    // done
  },
  wildlife: {
    width: wp('98%'),
    height: hp('27%'),
    // done
  },
  bannersRow: {
    display: 'flex',
    flexDirection: 'row',
    width: wp('98%'),
    // height: hp('30%'),
    justifyContent: 'space-around',
    paddingVertical: 10,
    // done
  },
  adventure: {
    width: wp('47%'),
    height: hp('35%'),
    // done
  },
  food: {
    width: wp('47%'),
    height: hp('35%'),
  },
  unexploredView: {
    width: wp('100%'),
    height: hp('45%'),
    marginTop: 50,
    // done
  },

  lifestyle: {
    color: 'darkred',
    fontSize: hp('2.0%'),
    fontWeight: '800',
    paddingTop: 5,
    marginLeft: 10,
    // done
  },
  exploreImage: {
    width: wp('90%'),
    height: 196,
    // borderRadius: 10,
    marginHorizontal: 5,
    position: 'relative',
    // done
  },
  exploreOpacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 170,
    bottom: 15,
    left: 0,
    right: 0,
    opacity: 0.3,
    marginHorizontal: 5,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,

    // done
  },
  exploreText: {
    fontSize: hp('2%'),
    color: '#ffffff',
    position: 'absolute',
    bottom: 15,
    top: 175,
    fontWeight: '700',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    zIndex: 200,

    // done
  },
  opacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 165,
    bottom: 0,
    left: 250,
    right: 0,
    opacity: 0.5,
    // done
  },
  opacity2: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 220,
    bottom: 0,
    left: 80,
    right: 0,
    opacity: 0.3,
    // done
  },
  bannerText: {
    fontSize: hp('2%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 170,
    left: 260,
    fontStyle: 'italic',
    fontWeight: '600',
    textDecorationLine: 'underline',
    // done
  },
  bannerText2: {
    fontSize: hp('2%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 220,
    left: 90,
    fontStyle: 'italic',
    fontWeight: '600',
    textDecorationLine: 'underline',
    // done
  },
  attractionView: {
    width: wp('100%'),
    height: hp('35%'),
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // done
  },
  headingText: {
    fontSize: hp('4.5%'),
    color: 'darkred',
    paddingBottom: 8,
    fontFamily: 'YouthPower-X34qG',
    paddingLeft: 10,
    // done
  },

  read: {
    color: 'black',
    fontSize: hp('1.8%'),
    paddingTop: 2,
    marginLeft: 10,
    // done
  },

  contact: {
    width: wp('100%'),
    height: hp('40%'),
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // done
  },
  contactHeading: {
    color: 'white',
    fontSize: hp('4%'),
    marginBottom: 35,
    fontStyle: 'italic',
    fontWeight: '600',
    // done
  },
  contactImage: {
    height: hp('30%'),
    width: wp('100%'),
    // done
  },
  contactText: {
    position: 'absolute',

    alignItems: 'center',
    // done
  },
  contentSubText: {
    color: 'white',
    fontSize: hp('1.7%'),
    // done
  },
  interests: {
    width: wp('100%'),
    height: hp('230%'),
    backgroundColor: 'tan',
    // done
  },
  exploreBox: {
    width: wp('93%'),
    height: hp('25%'),
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 10,
    // done
  },
  exploreOther: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
    flexWrap: 'wrap',

    // done
  },
  exploreOtherImage: {
    width: wp('93%'),
    height: hp('25%'),
    borderRadius: 10,
    // done
  },
  otherOpacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 100,
    bottom: 0,
    left: 80,
    right: 0,
    opacity: 0.5,
    // done
  },
  otherText: {
    fontSize: hp('2.2%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 80,
    left: 50,
    opacity: 0.5,
    // done
  },

  footer: {
    width: wp('100%'),
    height: hp('80%'),
    paddingLeft: 10,
  },
  unexplored: {
    fontSize: hp('4.5%'),
    color: 'darkred',

    paddingBottom: 8,
    fontFamily: 'YouthPower-X34qG',
    paddingLeft: 10,
  },

  relaxText: {
    color: 'darkred',
    fontSize: hp('2.0%'),
    fontWeight: '800',
    paddingTop: 5,
    marginLeft: 10,
  },
});

