import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useAppDispatch, {useAppSelector} from '../app/hooks';

import Footer from '../component/Footer';
import {getPageDataGo} from './appSlice';

// import {getDestinationData} from './appSlice';

// import  getPageDataGo from './appSlice';

// const images1 = [
//   require('../assets/images/sound.jpeg'),
//   require('../assets/images/history.jpeg'),
//   require('../assets/images/pachmarchi.jpeg'),
// ];

const Destination = () => {
  const dispatch = useAppDispatch();

  const destinationData = useAppSelector(state => state.dashboard.bannerData);
  const sectionsData = useAppSelector(state => state.dashboard.sectionsData);
  console.log(destinationData, 'destinationData>>>>>>>>>>>>>>>>>>>>');

  let popularPlacesData = sectionsData?.filter((item, index) =>
    item.section_title.includes('Popular'),
  );

  let exploreData = sectionsData?.filter((item, index) =>
    item.section_title.includes('Explore'),
  );

  let popularPlacesData1 = popularPlacesData[0].contents;

  popularPlacesData1 &&
    console.log('=====popularPlacesData===>', popularPlacesData1);
  //  console.log("fwoakfpoa",popularPlacesData1)

  useEffect(() => {
    dispatch(getPageDataGo(59908572));
  }, []);

  //  59908572
  const [text, onChangeText] = React.useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageSlice}>
          <Image
            style={styles.image}
            source={require('../assets/images/destination.jpg')}
          />
          <View style={styles.search}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="City/Destination"
            />
            <View style={styles.searchButton}>
              <Text style={styles.buttonText}>Search</Text>
            </View>
          </View>
        </View>
      </View>
      {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.container1}>
            <View style={{flexDirection: 'row', height: hp('35%')}}>
              {popularPlacesData1.map((content_images:any, index:any) => (
                <Image key={index} style={styles.image1} source={{
                  uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${content_images}`,
                }} />
              ))}
            </View>
          </View>
        </ScrollView> */}

      <View style={styles.imageTop}>
        <Text style={styles.headingText}>Popular Places</Text>
        {popularPlacesData1 && (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={popularPlacesData1}
            renderItem={({item}) => (
              <View style={{padding: 10}}>
                <Image
                  style={styles.packagesImage}
                  source={{
                    uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${item.content_images[0]}`,
                  }}
                />
                <View style={styles.opacityPlace}></View>
                <Text style={styles.PlaceText}> {item.content_title}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.interests}>
        <Text style={styles.headingText}>Explore</Text>
        <View style={styles.exploreOther}>
          <View style={styles.exploreBox}>
            <Image
              style={styles.exploreOtherImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[0]?.content_images[0]}`,
              }}
            />
            <View style={styles.otherOpacity} />
            <Text style={styles.otherText}>
              {exploreData[0]?.contents[0].content_title}{' '}
            </Text>
          </View>
          <View style={styles.exploreBox}>
            <Image
              style={styles.exploreOtherImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[1]?.content_images[0]}`,
              }}
            />
            <View style={styles.otherOpacity} />
            <Text style={styles.otherText}>
              {exploreData[0]?.contents[1].content_title}
            </Text>
          </View>
        </View>
        <View style={styles.exploreOther}>
          <View style={styles.exploreBox}>
            <Image
              style={styles.exploreOtherImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[2]?.content_images[0]}`,
              }}
            />
            <View style={styles.otherOpacity} />
            <Text style={styles.otherText}>
              {exploreData[0]?.contents[2].content_title}
            </Text>
          </View>
          <View style={styles.exploreBox}>
            <Image
              style={styles.exploreOtherImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[3]?.content_images[0]}`,
              }}
            />
            <View style={styles.otherOpacity} />
            <Text style={styles.otherText}>
              {exploreData[0]?.contents[3].content_title}
            </Text>
          </View>
        </View>
        <View style={styles.exploreOther}>
          <View style={styles.exploreBox}>
            <Image
              style={styles.exploreOtherImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[4]?.content_images[0]}`,
              }}
            />
            <View style={styles.otherOpacity} />
            <Text style={styles.otherText}>
              {exploreData[0]?.contents[4].content_title}
            </Text>
          </View>
          <View style={styles.exploreBox}>
            <Image
              style={styles.exploreOtherImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[5]?.content_images[0]}`,
              }}
            />
            <View style={styles.otherOpacity} />
            <Text style={styles.otherText}>
              {exploreData[0]?.contents[5].content_title}
            </Text>
          </View>
        </View>
        <View style={styles.exploreOther}>
          <View style={styles.exploreBox}>
            <Image
              style={styles.exploreOtherImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[6]?.content_images[0]}`,
              }}
            />
            <View style={styles.otherOpacity} />
            <Text style={styles.otherText}>
              {exploreData[0]?.contents[6].content_title}
            </Text>
          </View>
          <View style={styles.exploreBox}>
            <Image
              style={styles.exploreOtherImage}
              source={{
                uri: `https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/${exploreData[0]?.contents[7]?.content_images[0]}`,
              }}
            />
            <View style={styles.otherOpacity} />
            <Text style={styles.otherText}>
              {exploreData[0]?.contents[7].content_title}
            </Text>
          </View>
        </View>
      </View>
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <View style={styles.storyContainer}>
        <View style={styles.headingBox}>
          <Text style={styles.headingText}>Guest Stories</Text>
        </View>
        <Image
          style={styles.storyImage}
          source={require('../assets/images/story.jpg')}
        />
        <View style={styles.textBox}>
          <Text style={styles.storyText}>
            Best Hotel Of MP, I really did not expect such a wonderful
            experience over there, everything went as an exceptional, very
            supportive staff Have stayed in many excellent hotels but this one
            is really amazing Champak Bungalow rocks.
          </Text>
        </View>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contact}>
        <Image
          style={styles.contactImage}
          source={require('../assets/images/contact3.jpeg')}
        />
        <View style={styles.contactText}>
          <Text style={styles.contactHeading}>Contact Us</Text>
          <Text style={styles.contentSubText}>
            Tourist Helpline (Toll Free): 1800 233 7777
          </Text>
          <Text style={styles.contentSubText}>Timing: (10 AM to 6PM) </Text>
          <Text style={styles.contentSubText}>
            (Sunday holiday, Saturday and other holiday Half Day)
          </Text>
          <Text style={styles.contentSubText}>
            Email : mpthelpline@mpstdc.com
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ScrollView>
  );
};
export default Destination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: hp('30%'),
  },
  image: {
    height: hp('23.5%'),
    width: wp('100%'),
    position: 'relative',
  },
  imageSlice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    position: 'absolute',
    top: 150,
  },

  input: {
    height: hp('5%'),
    width: wp('60%'),
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'darkred',
  },
  searchButton: {
    height: hp('5%'),
    width: wp('30%'),
    borderWidth: 1,
    backgroundColor: 'darkred',
    borderColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },

  bannerHeading: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    // done
  },

  heartText: {
    fontSize: hp('3.5%'),
    color: 'darkred',
    fontStyle: 'italic',
    fontWeight: '600',
    paddingLeft: 10,
    // done
  },
  banners: {
    width: wp('100%'),
    height: hp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    // done
  },
  wildlife: {
    width: wp('98%'),
    height: hp('30%'),
    // done
  },
  bannersRow: {
    display: 'flex',
    flexDirection: 'row',
    width: wp('98%'),
    height: hp('50%'),

    justifyContent: 'space-between',
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

    marginTop: 30,
    // done
  },

  lifestyle: {
    color: 'darkred',
    fontWeight: 'bold',
    fontSize: hp('1.8%'),
    marginLeft: 5,
    // done
  },
  exploreImage: {
    width: wp('95%'),
    height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  exploreOpacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 255,
    bottom: 0,
    left: 0,
    right: 335,
    opacity: 0.3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  exploreText: {
    fontSize: hp('2%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 255,
    fontWeight: '600',
    alignSelf: 'flex-start',
    paddingLeft: 15,
  },
  opacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 200,
    bottom: 0,
    left: 250,
    right: 0,
    opacity: 0.5,
    // done
  },
  opacity2: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 240,
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
    top: 200,
    left: 260,
    fontStyle: 'italic',
    fontWeight: '600',
    // done
  },
  bannerText2: {
    fontSize: hp('2%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 240,
    left: 90,
    fontStyle: 'italic',
    fontWeight: '600',
    // done
  },
  popularView: {
    width: wp('100%'),
    height: hp('38%'),
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: hp('3.5%'),
    color: 'darkred',
    fontStyle: 'italic',
    fontWeight: '800',
    paddingBottom: 8,
    alignSelf: 'flex-start',
    paddingLeft: 5,
  },

  read: {
    color: 'black',
    fontSize: hp('1.8%'),
    paddingTop: 2,
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
    height: hp('113%'),
    backgroundColor: 'tan',
    marginTop: 30,
  },
  exploreBox: {
    width: wp('48%'),
    height: hp('25%'),
    backgroundColor: 'black',
    borderRadius: 10,
    // done
  },
  exploreOther: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
    // done
  },
  exploreOtherImage: {
    width: wp('48%'),
    height: hp('25%'),
    // borderRadius: 10,
    // done
  },
  otherOpacity: {
    backgroundColor: 'white',
    alignItems: 'center',
    position: 'absolute',
    top: 160,
    bottom: 0,
    left: 0,
    right: 70,
    opacity: 0.4,

    // done
  },
  otherText: {
    fontSize: hp('2.1%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 162,
    left: 10,
    fontWeight: '500',
    fontStyle: 'italic',
    // opacity: 0.5,
    // done
  },
  storyContainer: {
    width: wp('100%'),
    height: hp('80%'),
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImage: {
    width: wp('96%'),
    height: hp('30%'),
  },
  textBox: {
    width: wp('96%'),
    height: hp('30%'),
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBox: {
    width: wp('96%'),
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyText: {
    color: 'black',
    marginHorizontal: 10,

    fontStyle: 'italic',
  },

  footer: {
    width: wp('100%'),
    height: hp('90%'),
    paddingLeft: 10,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor:"red",
    height: hp('20%'),
    marginTop: 50,
  },

  image1: {
    width: wp('95%'),
    height: hp('25%'),
    marginRight: 10,
    // resizeMode: 'cover',
    resizeMode: 'stretch',
    // aspectRatio:1
    // borderRadius:10
  },
  opacityPlace: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 220,
    bottom: 10,
    left: 10,
    right: 210,
    opacity: 0.3,
  },
  PlaceText: {
    fontSize: hp('3.0%'),
    color: '#ffffff',
    position: 'absolute',
    top: 230,
    left: 10,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  imageTop: {
    alignItems: 'center',
    marginTop: 70,
  },
  packagesImage: {
    width: wp('85%'),
    height: hp('35%'),
  },
});
