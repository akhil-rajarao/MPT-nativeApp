import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ContactUs from '../../component/common/ContactUs';
import ExploreImageContainer from '../../component/common/ExploreImageContainer';
import Footer from '../../component/Footer';
import React from 'react';

const Adventure = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.wildlifeImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/4287949877.png',
          }}
        />
        <View style={styles.opacity} />
        <Text style={styles.imageText}>ADVENTURE</Text>
      </View>
      <View style={styles.textBoxView}>
        <ScrollView>
          <Text style={styles.textBox}>
            Madhya Pradesh has recently won the award for the 'Best State for
            Adventure Tourism' along with Uttarakhand. The heart of incredible
            India offers the best adventure opportunities to its tourists. From
            river rafting, mountaineering, jungle safari, heritage walk to food
            walk, there is something for everyone.
          </Text>
        </ScrollView>
      </View>
      {/* >>>>>>>>>>>>>>>>>>>>>>> */}

      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2899590516.png',
          }}
        />
        <Text style={styles.contentHeading}>Cycle Tour - Bhopal -Halali</Text>
        <Text style={styles.textBox}>
          Halali is a lovely dam in the midst of nature, far from the urban
          chaos of a city. A perfect picnic spot to spend the day for complete
          peace of mind. Dam's picturesque beauty surrounded by greenery makes
          it a perfect destination to gather some unforgettable experiences. It
          is located approximately 40 kilometres from Bhopal. Bike riders will
          enjoy the ride from Bhopal because the roads are smooth and surrounded
          by lush farm fields and trees. Why bother? Get on the road; we've
          planned a stress-free route for all you cyclists. Examine it out!
        </Text>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/331471220.png',
          }}
        />
        <Text style={styles.contentHeading}>
          India's First Ever Tiger Reserve Hot Air Balloon
        </Text>
        <Text style={styles.textBox}>
          If Madhya Pradesh is on your bucket list and you want to take your
          jungle safari experience to another level then Bandhavgarh National
          Park and Tiger Reserve is the place you need to visit and the hot air
          balloon safari is all you need to do. After all, what can match the
          feeling of gliding in the air and watching wildlife through the
          clouds. To book a hot air balloon safari you can visit
          www.skywaltz.com.
        </Text>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3610507155.png',
          }}
        />
        <Text style={styles.contentHeading}>
          Jungle Camping in Madhya Pradesh
        </Text>
        <Text style={styles.textBox}>
          Blessed with over 25 national parks and sanctuaries, it is no surprise
          that M.P. is the go-to destination for every wildlife enthusiast, who
          wishes to experience nature at its absolute unadulterated best. The 25
          parks are surrounded by resorts and hotels that allow you to explore
          them with ease. However, nothing makes the experience and excitement
          of exploring the flora and fauna of a forest complete without actually
          living in a jungle camp. Madhya Pradesh Tourism has established some
          of the very best jungle camps that hold the potential to truly take
          you into the wild. Since camping is the best way for you to explore
          the raw, untamed beauty of M.P.'s jungles, let us tell you some of the
          state's finest jungle camps you can stay at : Adventure Camping in
          Nature's Karavas, Kerwa Backwaters Camping, Forest Camping At
          Kalakund, Camping Near Patalpani Waterfall, Halali Riverside Camp,
          Waterfall View Camp at Bhedaghat
        </Text>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3035366232.png',
          }}
        />
        <Text style={styles.contentHeading}>
          Cycle Tour - Vidisha- Udaigiri
        </Text>
        <Text style={styles.textBox}>
          Plan a day trip with your friends to Vidisha Udaigiri Vidisha via a
          scenic route. Udaigiri, located 58 kilometers/90 minutes from Bhopal,
          is famous for the ancient Udayagiri Caves, which ring 20 Gupta-era
          temples and monasteries carved out of a rocky hill, one of which is
          dedicated to Jainism and the rest to Hindu Gods and Goddesses. The
          trip will include historical and natural sights, as well as delicious
          farm-fresh delicacies prepared for lunch and dinner at the Udaigiri
          Jungle Resort.
        </Text>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}

      <View style={styles.explore}>
        <ExploreImageContainer />
      </View>
      <View>
        <ContactUs />
      </View>
      <View>
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wildlifeImage: {
    width: wp('100%'),
    height: hp('35%'),
    borderRadius: 1,
  },
  opacity: {
    position: 'absolute',
    backgroundColor: 'black',
    width: wp('100%'),
    height: hp('35%'),
    opacity: 0.3,
  },
  imageText: {
    color: 'lightgrey',
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 7,
    position: 'absolute',
    opacity: 0.6,
  },
  textBoxView: {
    paddingTop: 25,
    // backgroundColor: 'skyblue',
    height: hp('33%'),
  },
  textBox: {
    color: 'black',
    fontSize: 15,
    letterSpacing: 2,
    marginHorizontal: 10,
  },
  explore: {
    marginTop: 30,
  },
  contentBox: {
    width: wp('100%'),
    height: hp('80%'),
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentImage: {
    width: wp('95%'),
    height: hp('30%'),
    marginTop: 10,
  },
  contentHeading: {
    alignSelf: 'flex-start',
    margin: 10,
    fontFamily: 'YouthPower-X34qG',
    fontSize: 20,
    color: 'darkred',
  },
});

export default Adventure;
