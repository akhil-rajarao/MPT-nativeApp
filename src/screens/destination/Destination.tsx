import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Footer from '../../components/footer';
import Header from '../../components/Header';
import React from 'react';

const Destination = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageSlice}>
            <Image
              style={styles.image}
              source={require('../../assets/destination.jpg')}
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
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <View style={styles.popularView}>
          <Text style={styles.headingText}>Popular Places</Text>
          <Image
            style={styles.exploreImage}
            source={require('../../assets/ujjan.jpeg')}
          />
          <View style={styles.exploreOpacity} />
          <Text style={styles.exploreText}>Ujjan</Text>
        </View>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        {/* <View style={styles.bannerHeading}>
        <Text style={styles.heartText}>Explore</Text>
      </View>
      <View style={styles.banners}>
        <View>
          <Image
            style={styles.wildlife}
            source={require('../../assets/owl.png')}
          />
          <View style={styles.opacity} />
          <Text style={styles.bannerText}>Know more</Text>
        </View>
        <View style={styles.bannersRow}>
          <View>
            <Image
              style={styles.adventure}
              source={require('../../assets/deer.png')}
            />
            <View style={styles.opacity2} />
            <Text style={styles.bannerText2}>Know more</Text>
          </View>
          <View>
            <Image
              style={styles.food}
              source={require('../../assets/tigerExplore.png')}
            />
            <View style={styles.opacity2} />
            <Text style={styles.bannerText2}>Know more</Text>
          </View>
        </View>
      </View> */}

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        {/* <View style={styles.unexploredView}>
        <Text style={styles.headingText}>Unexplored side of MP</Text>
        <Image
          style={styles.exploreImage}
          source={require('../../assets/unexplored.jpg')}
        />
        <Text style={styles.lifestyle}>Organic Lifestyle</Text>
        <Text style={styles.read}>Read more -- </Text>
      </View> */}

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <View style={styles.interests}>
          <Text style={styles.headingText}>Explore</Text>
          <View style={styles.exploreOther}>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../../assets/wildLife.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Kanha</Text>
            </View>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../../assets/Pachmarhi.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Pachmarhi</Text>
            </View>
          </View>
          <View style={styles.exploreOther}>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../../assets/deer.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Bandhavgarh</Text>
            </View>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../../assets/budhYatra.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Amarkantak</Text>
            </View>
          </View>
          <View style={styles.exploreOther}>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../../assets/fort.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Indore</Text>
            </View>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../../assets/Khajuraho.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Khajuraho</Text>
            </View>
          </View>
          <View style={styles.exploreOther}>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../../assets/temple.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Bhopal</Text>
            </View>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../../assets/exploreTiger.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Panna</Text>
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
            source={require('../../assets/story.jpg')}
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
            source={require('../../assets/contact3.jpeg')}
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
    </View>
  );
};
export default Destination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: hp('40%'),
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
    top: 280,
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

  //   text: {
  //     position: 'absolute',
  //     // done
  //   },

  //   heading1: {
  //     color: 'lightgrey',
  //     fontSize: 35,
  //     fontWeight: '800',
  //     marginBottom: 7,
  //     // done
  //   },

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
    // paddingBottom: 8,
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
});
