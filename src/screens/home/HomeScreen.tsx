import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Footer from '../../components/footer';
import Header from '../../components/Header';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.navbar}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/tiger3.png')}
          />
          <View style={styles.text}>
            <Text style={styles.heading}>Majestic</Text>
            <Text style={styles.heading1}>MADHYA PRADESH</Text>
            <View style={styles.explore}>
              <Text style={styles.exploreText}>EXPLORE</Text>
            </View>
            <View>
              <Text style={styles.content}>
                The Heart of India, tourism hotspot that boasts of a rich
                cultural and natural heritage.From the intricately carved
                Khajuraho Temples to the rugged wilderness of Kanha National
                Park, the state offers a diverse range of attractions that cater
                to all kinds of travelers.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bannerHeading}>
          <Text style={styles.disText}>Discover</Text>
          <Text style={styles.heartText}>Heart of India</Text>
        </View>
        <View style={styles.banners}>
          <View>
            <Image
              style={styles.wildlife}
              source={require('../../assets/wildLife.png')}
            />
            <View style={styles.opacity} />
            <Text style={styles.bannerText}>Wildlife</Text>
          </View>
          <View style={styles.bannersRow}>
            <View>
              <Image
                style={styles.adventure}
                source={require('../../assets/adventure.png')}
              />
              <View style={styles.opacity2} />
              <Text style={styles.bannerText2}>Adventure</Text>
            </View>
            <View>
              <Image
                style={styles.food}
                source={require('../../assets/food.png')}
              />
              <View style={styles.opacity2} />
              <Text style={styles.bannerText2}>food</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.heritage}
              source={require('../../assets/heritage.png')}
            />
            <View style={styles.opacity}></View>
            <Text style={styles.bannerText}>Heritage</Text>
          </View>
        </View>

        <View style={styles.unexploredView}>
          <Text style={styles.unexplored}>Unexplored side of MP</Text>
          <Image
            style={styles.exploreImage}
            source={require('../../assets/explore.png')}
          />
          <Text style={styles.relaxText}>
            Destination To Relax And Enjoy Nature
          </Text>
          <Text style={styles.read}>Read more -- </Text>
        </View>
        <View style={styles.packages}>
          <Text style={styles.packagesHeading}>Our Top Packages</Text>
          <View style={styles.imageTop}>
            <Image
              style={styles.packagesImage}
              source={require('../../assets/package.jpeg')}
            />
            <View style={styles.packagesContent}>
              <View style={styles.days}>
                <Text style={styles.dayText}>4 Night / 5 Days</Text>
              </View>
              <Text style={styles.headpackage}>Natures Nest Pachmarhi</Text>
              <Text style={styles.textpackage}>
                Popularly known as the 'Satpura ki Rani' (Queen of Satpura) is
                the glorious land called Pachmarhi.Pachmarhi is one of the most
                popular destinations in the Heart of Incredible India and is a
                treasure trove of rich history and nature's bounty.
              </Text>
              <Text style={styles.optionPackage}>
                PIPARIYA - TAWA - PACHMARHI - TAMIA - PATALKOT
              </Text>
              <Text style={styles.optionPackage1}>PENCH - ROOKHAD - SEONI</Text>
              <View style={styles.view}>
                <Text style={styles.viewText}>VIEW</Text>
              </View>
            </View>
          </View>
        </View>
        {/* >>>>>>>>>>>>>>>>>>>>>> */}
        <View style={styles.popular}>
          <Text style={styles.packagesHeading}>Popular Places</Text>
          <View style={styles.imageTop}>
            <Image
              style={styles.packagesImage}
              source={require('../../assets/popular.jpeg')}
            />
            <View style={styles.opacityPlace}></View>
            <Text style={styles.PlaceText}> Pachmarhi</Text>
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
export default HomeScreen;

const styles = StyleSheet.create({
  navbar: {},
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  image: {
    height: hp('100%'),
    width: wp('100%'),
    // flex: 1,
    position: 'relative',
    // zIndex: 2,
  },
  text: {
    position: 'absolute',
    left: 20,
    bottom: 100,
    right: '20%',
    height: '30%',
    // zIndex: 2,
  },
  heading: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
  },
  heading1: {
    color: 'lightgrey',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 7,
  },
  explore: {
    // color: 'white',
    // fontSize: 10,
    // fontWeight: '400',
    width: wp('20%'),
    height: hp('4%'),
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  exploreText: {
    color: 'red',
    fontSize: hp('1.5%'),
    fontWeight: '400',
  },
  content: {
    color: 'white',
    fontWeight: '600',
  },
  bannerHeading: {
    display: 'flex',
    flexDirection: 'row',

    marginTop: 40,
  },
  disText: {
    fontSize: hp('2.5%'),
    color: 'black',
    fontStyle: 'italic',
    paddingRight: 10,
  },
  heartText: {
    fontSize: hp('3.5%'),
    color: 'darkred',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  banners: {
    // backgroundColor: 'green',
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  wildlife: {
    // backgroundColor: 'black',
    width: wp('98%'),
    height: hp('30%'),
    borderRadius: 10,
  },
  bannersRow: {
    display: 'flex',
    flexDirection: 'row',
    width: wp('98%'),
    // height: hp('40%'),
    // backgroundColor: 'darkblue',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  adventure: {
    // backgroundColor: 'skyblue',
    width: wp('47%'),
    height: hp('35%'),
    borderRadius: 10,
  },
  food: {
    // backgroundColor: 'red',
    width: wp('47%'),
    height: hp('35%'),
    borderRadius: 10,
  },
  heritage: {
    backgroundColor: 'black',
    width: wp('98%'),
    height: hp('30%'),
    borderRadius: 10,
    // paddingTop: 10,
  },
  opacity: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 190,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  opacity2: {
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: 220,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bannerText: {
    fontSize: hp('3.5%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 190,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  bannerText2: {
    fontSize: hp('3.5%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 220,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  unexploredView: {
    width: wp('100%'),
    height: hp('38%'),
    // backgroundColor: 'lightgrey',
    marginTop: 30,
  },
  unexplored: {
    fontSize: hp('3.5%'),
    color: 'darkred',
    fontStyle: 'italic',
    fontWeight: '800',
    paddingBottom: 8,
  },
  exploreImage: {
    width: wp('90%'),
    height: 200,
    borderRadius: 10,
  },
  relaxText: {
    color: 'darkred',
    fontSize: hp('2.0%'),
    fontWeight: '800',
    paddingTop: 5,
  },
  read: {
    color: 'black',
    fontSize: hp('1.8%'),
    paddingTop: 2,
  },
  packages: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: 'lightgrey',
    marginTop: 30,
  },
  packagesHeading: {
    fontSize: hp('3.5%'),
    color: 'darkred',
    fontStyle: 'italic',
    fontWeight: '800',
    paddingBottom: 8,
  },
  imageTop: {
    alignItems: 'center',
  },
  packagesImage: {
    width: wp('95%'),
    height: hp('40'),
  },
  packagesContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('95%'),
    height: hp('50%'),
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 5,
  },
  days: {
    width: wp('30%'),
    height: hp('3.5%'),
    // backgroundColor: 'darkred',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'darkred',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  dayText: {
    color: 'darkred',
  },
  headpackage: {
    color: 'darkred',
    fontSize: hp('2%'),
    marginBottom: 35,
  },
  textpackage: {
    color: 'dimgray',
    fontSize: hp('1.4%'),
    paddingHorizontal: 20,
    letterSpacing: 2,
    marginBottom: 35,
  },
  optionPackage: {
    color: 'darkred',
    fontSize: hp('1.5%'),
    paddingHorizontal: 10,
  },
  optionPackage1: {
    color: 'darkred',
    fontSize: hp('1.5%'),
    paddingHorizontal: 10,
    marginBottom: 35,
  },
  view: {
    width: wp('19%'),
    height: hp('3.7%'),
    backgroundColor: 'darkred',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewText: {
    color: 'white',
    fontSize: hp('1.7%'),
  },
  popular: {
    width: wp('100%'),
    height: hp('50%'),
    backgroundColor: 'tan',
    marginTop: 30,
  },
  opacityPlace: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 270,
    bottom: 0,
    left: 10,
    right: 250,
    opacity: 0.3,
  },
  PlaceText: {
    fontSize: hp('2.5%'),
    color: 'floralwhite',
    position: 'absolute',
    top: 270,
    left: 20,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  contact: {
    width: wp('100%'),
    height: hp('40%'),
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactHeading: {
    color: 'white',
    fontSize: hp('4%'),
    marginBottom: 35,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  contactImage: {
    height: hp('30%'),
    width: wp('100%'),
  },
  contactText: {
    position: 'absolute',
    // left: 50,
    // bottom: 200,
    // right: '10%',
    // height: '30%',
    alignItems: 'center',
  },
  contentSubText: {
    color: 'white',
    fontSize: hp('1.7%'),
  },
  footer: {
    width: wp('100%'),
    height: hp('80%'),
    paddingLeft: 10,
  },
});
