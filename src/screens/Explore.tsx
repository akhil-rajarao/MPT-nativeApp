import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Footer from '../component/Footer';
// import Footer from '../../components/footer';/
// import Header from '../../components/Header';
import React from 'react';

const images1 = [
  require('../assets/images/sound.jpeg'),
  require('../assets/images/history.jpeg'),
  require('../assets/images/pachmarchi.jpeg'),
]

const images2 = [
  require('../assets/images/riverRafting.jpeg'),
  require('../assets/images/spotDolphins.jpeg'),
  require('../assets/images/relax.jpeg'),
  require('../assets/images/naturalGeography.jpeg'),
  require('../assets/images/village.jpeg'),
  require('../assets/images/organicLifestyle.jpeg')
] 

const Explore = () => {
  return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageSlice}>
            <Image
              style={styles.image}
              source={require('../assets/images/explore1.png')}
            />
            <Image
              style={styles.image}
              source={require('../assets/images/explore2.png')}
            />
            <Image
              style={styles.image}
              source={require('../assets/images/explore3.png')}
            />
            <Image
              style={styles.image}
              source={require('../assets/images/explore4.png')}
            />
            <View style={styles.text}>
              <Text style={styles.heading1}>EXPLORE</Text>
            </View>
          </View>
        </View>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <View style={styles.attractionView}>
          <Text style={styles.headingText}>Attractions</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container1} >
        <View style={{ flexDirection: 'row', height:hp('35%')}}>
        {images1.map((image, index) => (
          <Image key={index} style={styles.image1} source={image} />
        ))}
        </View>
      </View>
    </ScrollView>
          <View style={styles.exploreOpacity} />
          <Text style={styles.exploreText}>Take a walk through history</Text>
        </View>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <View style={styles.bannerHeading}>
          <Text style={styles.heartText}>Explore</Text>
        </View>
        <View style={styles.banners}>
          <View>
            <Image
              style={styles.wildlife}
              source={require('../assets/images/owl.png')}
            />
            <View style={styles.opacity} />
            <Text style={styles.bannerText}>Know more</Text>
          </View>
          <View style={styles.bannersRow}>
            <View>
              <Image
                style={styles.adventure}
                source={require('../assets/images/deer.png')}
              />
              <View style={styles.opacity2} />
              <Text style={styles.bannerText2}>Know more</Text>
            </View>
            <View>
              <Image
                style={styles.food}
                source={require('../assets/images/tigerExplore.png')}
              />
              <View style={styles.opacity2} />
              <Text style={styles.bannerText2}>Know more</Text>
            </View>
          </View>
        </View>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <View style={styles.unexploredView}>
          <Text style={styles.headingText}>Unexplored side of MP</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container1} >
        <View style={{ flexDirection: 'row', height:hp('35%')}}>
        {images2.map((image, index) => (
          <Image key={index} style={styles.image1} source={image} />
        ))}
        </View>
      </View>
    </ScrollView>
          <Text style={styles.lifestyle}>Organic Lifestyle</Text>
          <Text style={styles.read}>Read more -- </Text>
        </View>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <View style={styles.interests}>
          <Text style={styles.headingText}>Explore Other Interests</Text>
          <View style={styles.exploreOther}>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../assets/images/budhYatra.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Spritual Yatra</Text>
            </View>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../assets/images/riverQuila.jpeg')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Heritage</Text>
            </View>
          </View>
          <View style={styles.exploreOther}>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../assets/images/exploreTiger.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Wildlife</Text>
            </View>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../assets/images/budhYatra.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Spritual Yatra</Text>
            </View>
          </View>
          <View style={styles.exploreOther}>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../assets/images/temple.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Heritage</Text>
            </View>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../assets/images/fort.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Spritual Yatra</Text>
            </View>
          </View>
          <View style={styles.exploreOther}>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../assets/images/deer.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Wildlife</Text>
            </View>
            <View style={styles.exploreBox}>
              <Image
                style={styles.exploreOtherImage}
                source={require('../assets/images/Mp.png')}
              />
              <View style={styles.otherOpacity} />
              <Text style={styles.otherText}>Quila</Text>
            </View>
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
export default Explore;

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
    fontSize: 35,
    fontWeight: '800',
    marginBottom: 7,
    // done
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
    // done
  },
  exploreOpacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 255,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // done
  },
  exploreText: {
    fontSize: hp('2%'),
    color: 'grey',
    position: 'absolute',
    top: 200,
    fontWeight: '600',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    opacity: 0.5,
    // done
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
  attractionView: {
    width: wp('100%'),
    height: hp('38%'),
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // done
  },
  headingText: {
    fontSize: hp('3.5%'),
    color: 'darkred',
    fontStyle: 'italic',
    fontWeight: '800',
    paddingBottom: 8,
    alignSelf: 'flex-start',
    paddingLeft: 5,
    // done
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
    // done
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
    borderRadius: 10,
    // done
  },
  otherOpacity: {
    backgroundColor: 'black',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.4,
    borderRadius: 10,
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

  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor:"red",
    height:hp('20%'),
   marginTop:50,
  },

  image1: {
     width: wp('95%'),
     height: hp('25%'),
     marginRight:10,
   // resizeMode: 'cover',
      resizeMode:'stretch',
      // aspectRatio:1
      // borderRadius:10
  },
});