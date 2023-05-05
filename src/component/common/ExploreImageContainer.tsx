import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../../app/hooks';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {ScrollView} from 'react-native-gesture-handler';
import {getPageDataGo} from '../../screens/appSlice';

const ExploreImageContainer = () => {
  const dispatch = useAppDispatch();

  const isFocused = useIsFocused();
  const navigation = useNavigation<any>();

  // const ExploreBannerData = useAppSelector(state => state.dashboard.bannerData);
  const ExploresectionsData = useAppSelector(
    state => state.dashboard.sectionsData,
  );

  const exploreotherinterestsData = ExploresectionsData[1]?.contents;
  ExploresectionsData &&
    console.log(
      '===unexplored sideeeeeeeeeeee=====>',
      exploreotherinterestsData,
    );

  useEffect(() => {
    dispatch(getPageDataGo(59789662));
  }, [dispatch, isFocused,getPageDataGo]);
  return (
    <ScrollView>
      {exploreotherinterestsData &&
    <View style={styles.mainview}>
    
    <View style={styles.one}>
    <View
    style={{
    height: 200,
    width: 170,
    // paddingLeft: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'green',
    borderColor: 'black',
    }}>
    
    <Image
    style={styles.image1}
    // source={ uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item?.content_images[0]}`}
    source={{
      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreotherinterestsData[0]?.content_images[0]}`,
    }}
    />
    <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:150,}} >{exploreotherinterestsData[0]?.content_title}</Text>
    
    
    </View>
    <View
    style={{
    height: 300,
    width: 170,
    // paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
    }}>
    <Image
    style={styles.image1}
    source={{
      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreotherinterestsData[1]?.content_images[0]}`,
    }}
    />
    <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:240,}} >{exploreotherinterestsData[1]?.content_title}</Text>
    
    </View>
   
    <View
    style={{
    height: 200,
    width: 170,
    // paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'green',
    borderColor: 'black',
    }}>
    <Image
    style={styles.image1}
    source={{
      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreotherinterestsData[2]?.content_images[0]}`,
    }}
    />
    <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:150,}} >{exploreotherinterestsData[2]?.content_title}</Text>
    
    
    </View>
    <View
    style={{
    height: 300,
    width: 170,
    // paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
    }}>
    <Image
    style={styles.image1}
    source={{
      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreotherinterestsData[3]?.content_images[0]}`,
    }}
    />
    <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:240,}} >{exploreotherinterestsData[3]?.content_title}</Text>
    
    </View>
   
   
   
    </View>
    <View style={styles.one}>
    <View
    style={{
    height: 300,
    width: 170,
    // paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
    }}>
    <Image
    style={styles.image1}
    source={{
      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreotherinterestsData[4]?.content_images[0]}`,
    }}
    />
    <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:240,}} >{exploreotherinterestsData[4]?.content_title}</Text>
    
    </View>
    <View
    style={{
    height: 200,
    width: 170,
    // paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'green',
    borderColor: 'black',
    }}>
    <Image
    style={styles.image1}
    source={{
      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreotherinterestsData[5]?.content_images[0]}`,
    }}
    />
    <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:150,}} >{exploreotherinterestsData[5]?.content_title}</Text>
    
    </View>
   
    <View
    style={{
    height: 300,
    width: 170,
    // paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
    }}>
    <Image
    style={styles.image1}
    source={{
      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreotherinterestsData[6]?.content_images[0]}`,
    }}
    />
    <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:240,}} >{exploreotherinterestsData[6]?.content_title}</Text>
    
    </View>
    <View
    style={{
    height: 200,
    width: 170,
    // paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'green',
    borderColor: 'black',
    }}>
    <Image
    style={styles.image1}
    source={{
      uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreotherinterestsData[7]?.content_images[0]}`,
    }}
    />
    <Text style={{position:'absolute', fontFamily:'cursive',fontSize:30,color:'white',alignSelf:'center',paddingTop:150,}} >{exploreotherinterestsData[7]?.content_title}</Text>
    
    </View>
    </View>
    </View>
}
    </ScrollView>
    );
   };
   
   const styles = StyleSheet.create({
    mainview: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    justifyContent: 'space-evenly',
    },
    one: {
    backgroundColor: '#DEB887',
    width: '50%',
    height: '100%',
    paddingTop: 10,
    flexDirection: 'column',
    marginRight: 20,
    },
    image1: {
    position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,
   
    },
    image2: {
    position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,
    },
    image3: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10, 
    },
    image4: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10, 
    },
    image5: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,
    },
    image6: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,
    },
    image7: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,
    },
    image8: {
    // position: 'relative',
    height:'100%',
    width: '100%',
    paddingTop: 2,
    marginRight:10,
    },
   });

export default ExploreImageContainer;
// const styles = StyleSheet.create({
//   interests: {
//     width: wp('100%'),
//     height: hp('230%'),
//     backgroundColor: 'tan',
//     // done
//   },
//   headingText: {
//     fontSize: hp('4.5%'),
//     color: 'darkred',
//     paddingBottom: 8,
//     fontFamily: 'YouthPower-X34qG',
//     paddingLeft: 10,
//     // done
//   },
//   exploreOther: {
//     width: wp('100%'),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     paddingBottom: 10,
//     flexWrap: 'wrap',

//     // done
//   },
//   exploreBox: {
//     width: wp('93%'),
//     height: hp('25%'),
//     backgroundColor: 'black',
//     borderRadius: 10,
//     margin: 10,
//     // done
//   },
//   exploreOtherImage: {
//     width: wp('93%'),
//     height: hp('25%'),
//     borderRadius: 10,
//     // done
//   },
//   otherOpacity: {
//     backgroundColor: 'black',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     opacity: 0.5,
//     // done
//   },
//   otherText: {
//     fontSize: hp('3.2%'),
//     color: 'floralwhite',
//     position: 'absolute',
//     top: 80,
//     left: 50,
//     opacity: 0.5,
//     // done
//   },
// });
