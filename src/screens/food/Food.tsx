import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ContactUs from '../../component/common/ContactUs';
import ExploreImageContainer from '../../component/common/ExploreImageContainer';
import Footer from '../../component/Footer';
import React from 'react';

const Food = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.wildlifeImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3964146312.png',
          }}
        />
        <View style={styles.opacity} />
        <Text style={styles.imageText}>FOOD</Text>
      </View>
      <View style={styles.textBoxView}>
        <ScrollView>
          <Text style={styles.textBox}>
            The distinct Malwa cuisine, the Nimar cuisine or the Bagelkhand
            cuisine, Madhya Pradesh has a lot to offer. Be it Rass Kheer, Lapsi,
            Kalakand, Lavang Latika, Palak Puri, Bhutte Ki Khees (grated corn
            roasted in ghee and later cooked in milk with spices). Amli Ri Kadhi
            made with tamarind instead of yogurt, Khoprapak and Malpua; there's
            so much to try out, that one visit just won't be enough.
          </Text>
        </ScrollView>
      </View>
      {/* >>>>>>>>>>>>>>>>>>>>>>> */}

      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/364014289.png',
          }}
        />
        <Text style={styles.contentHeading}>Daal Bafla</Text>
        <Text style={styles.textBox}>
          Baati is believed to have been born in the time of Bappa Rawal, the
          founder of the Mewar Kingdom. With whole grains, corn flour, ghee,
          baking soda, cottage cheese and turmeric powder, you can have a
          healthy meal or snack whenever you need it. Dal bafla is usually
          served with plain malwa dal, but it can also be served with spicy
          panchmel dal. Darbahura cuisine is well known in Ujjain.
        </Text>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/473109174.png',
          }}
        />
        <Text style={styles.contentHeading}>Jalebi </Text>
        <Text style={styles.textBox}>
          The origin of Jalebi is unknown, but it is a shock to know that
          Jalebi's origin is not Indian. In fact, a popular recipe in the
          country may be an import from its Middle Eastern counterpart Zarabiya,
          or Persian Zurbiya. The oldest history of this food in West Asia dates
          back to the 10th century by Ibn Sayyar al-Walaq in his Arabic cookbook
          Kitab al-Tabikh (English: The Book of Dishes). This dish is lovingly
          cooked in flour, fried and then drenched in sugar syrup.The crunchy
          flavor of this sweet dish will rekindle your love for Madhya Pradesh's
          most popular dish. For the best authentic taste, forget the big chain
          restaurants and head to Madhya Pradesh interiors. There, jalebi is
          served in the most authentic and sinful way. To eat the best jalebis
          in Madhya Pradesh, you have to visit Khandwa.
        </Text>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/3483981411.png',
          }}
        />
        <Text style={styles.contentHeading}>Seekh Kababs</Text>
        <Text style={styles.textBox}>
          One of the most popular non-vegetarian dishes in Madhya Pradesh is
          seekh kebab. Well-chopped meat wraps tempt your taste buds with meat
          that melts in your mouth.Historically , Wherever the Turks used to go
          to fight, they always prepared their food the same way.
        </Text>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/222496793.png',
          }}
        />
        <Text style={styles.contentHeading}>Mawa Bati</Text>
        <Text style={styles.textBox}>
          The number of wonderful foods you can find in central India is
          endless. One of the must-try desserts in MP is Mawa Bhatti. These are
          delicious fried mawa balls stuffed with cardamom powder and chopped
          dried fruits.Served on festive occasions and similar to the larger
          gulab jamuns.There are some additional foods that easily satisfy your
          sweet taste, such as Srikhand,Imarti, Farda, Khaju Khatri, Laban Rata,
          and Rabli.
        </Text>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/2819955248.png',
          }}
        />
        <Text style={styles.contentHeading}>Bhutte Ka Kees</Text>
        <Text style={styles.textBox}>
          Bhutta means corn and kees means grated, so the snack basically
          consists of grated corn. Bhutte Ka Kees is another delicious and
          healthy snack from Madhya Pradesh. As the name suggests, it is a dish
          that uses corn as the main ingredient. Grated grains are slowly cooked
          with spices and skim milk to create a slightly sweet taste. This
          traditional Madhya Pradesh dish also includes mustard seeds and green
          chillies for added flavor. It's one of the popular street snacks in
          Madhya Pradesh
        </Text>
      </View>

      {/* >>>>>>>>>>>>>>>>>>>>>>> */}
      <View style={styles.contentBox}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://d3b9bso2h5gryf.cloudfront.net/mp-cms-images/4052024960.png',
          }}
        />
        <Text style={styles.contentHeading}>Poha</Text>
        <Text style={styles.textBox}>
          This dish was popular in Maharashtra when the Horkar and Scindia
          families came to Madhya Pradesh from Maharashtra. It is therefore
          reasonable to assume that Maratha warriors brought it to North India
          and the Marwa region, a super light and super food that is happily
          eaten in all parts of our country. Healthy food was gifted to India
          from Madhya Pradesh. Poha is made from flattened rice with well-cooked
          onions and tomatoes and tastes best with green chillies, curry leaves
          and some lemon. You can enjoy a great bowl of Poha in every nook and
          corner of Madhya Pradesh.
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
    width: wp('120%'),
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
export default Food;
