import {
  ScrollView,
  ScrollViewComponent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Button} from 'react-native-elements';
import {Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const CovidPage = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/similar.da06dae7.jpg',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            color: '#ffffff',
            top: -270,
            alignSelf: 'center',
            zIndex: 40,
            fontWeight: 'bold',
          }}>
          COVID-19 PROTOCOLS
        </Text>
        <Text
          style={{
            zIndex: 40,
            top: -210,
            alignSelf: 'center',
            fontSize: 20,
            color: '#ffffff',
            fontWeight: 'bold',
          }}>
          Central Govt. Guidelines ~{'\n'} State Govt. Guidelines ~{'\n'} Our
          Precautionary Steps Saathi
        </Text>
        <View style={{padding: 25}}>
          <Text style={{alignSelf: 'center', marginTop: -70, fontSize: 20}}>
            {' '}
            State Govt. Guidelines
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20,
              alignSelf: 'center',
            }}>
            विषय:- प्रदेश में कोविड-19 के संभावित तृतीय लहर की पूर्व तैयारियों
            के सम्बन्ध में निर्देश|
          </Text>
          <Text style={{alignSelf: 'center', marginTop: 30, fontSize: 17}}>
            सन्दर्भ:- संचलनालयीन पत्र क्र./आई.डी.एस.पी./2021/1572 दिनांक
            11/10/2021 विषयांतर्गत लेख है कि SARS CoV-2 Variants के प्रवृत्तियों
            में अंतर्राष्ट्रीय स्तर पर निरंतर बदलाव होना प्रतिवेदित है जिसके
            कारण Variants of Concern (VOCs) के सम्बन्ध में लगातार निगरानी बनाये
            रखने की आवश्यकता है l ज्ञातव्य हो कि विश्व स्वास्थ्य संगठन द्वारा
            SARS CoV - 2 के नवीन B.1.1.529 प्रजाति Omicron को Variant Of Concern
            घोषित किया गया है l प्रदेश में कोविड - 19 के संभावित तृतीय लहर को
            दृष्टिगत रखते हुए निम्नानुसार व्यवस्थाएं सुनिश्चित की जाए :-
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20,
              alignSelf: 'center',
            }}>
            कोविड - 19 के संभावित प्रकरणों का चिन्हांकन, टेस्टिंग एवं ट्रैकिंग
          </Text>
          <Text style={{alignSelf: 'center', marginTop: 30, fontSize: 17}}>
            1. कोविड पॉजिटिव प्रकरणों की संभावित वृद्धि के नियंत्रण हेतु
            Test-Track-Treat के साथ-साथ कोविड टीकाकरण में गति एवं कोविड अनुकूल
            व्यवहारों का पालन सुनिश्चित किया जाए l2. भीड़-भाड़ को नियंत्रित करते
            हुए मास्किंग, सामूहिक दूरी एवं कोविड अनुकूल व्यवहारों यथा खांसते-
            छींकते समय नाक व मुख का ढांकने सम्बन्धी अनुशासन का पालन किया जाए l
            3. कोविड - 19 के संभावित लक्षण वाले रोगियों की अनिवार्यता जांच कर
            आर.टी.पी.सी.आर. / आर.ऐ.टी. पद्धति से सुनिश्चित की जाए l 4. कोविड -
            19 की पर्याप्त जांच सुविधाएं ग्रामीण तथा शहरी क्षेत्रों में उपलब्ध
            रहे तथा जिलों में ''हॉट-स्पॉटस' का चिन्हांकन कर ऐसे क्षेत्रों में
            अधिकाधिक सैंपल संग्रहण सुनिश्चित किया जाए l 5. पॉजिटिव प्रकरणों के
            हाई - रिस्क एवं अधिक से अधिक अन्य कॉन्टेक्ट्स को सूचीबद्ध कर उनकी
            ट्रैकिंग एवं टेस्टिंग कर, निगरानी में रखा जाए
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20,
              alignSelf: 'center',
            }}>
            कोविड -19 पॉजिटिव प्रकरणों का प्रबंधन
          </Text>
          <Text style={{alignSelf: 'center', marginTop: 30, fontSize: 17}}>
            1. Variant Of Concern की सम्भावना एवं कोविड -19 की तृतीय संभावित लहर
            के त्वरित नियंत्रण हेतु नीतिगत निर्णय अनुसार अब समस्त लक्षण युक्त
            कोविड पॉजिटिव प्रकरणों को लक्षणों के आधार पर अस्पताल में कोविड
            आइसोलेशन वार्ड, कोविड आई. सी. यू. वार्ड अथवा कोविड हाई डिपेंडेंसी
            वार्ड में भर्ती किया जाए l 2. केवल लक्षण रहित पॉजिटिव ऐसे व्यक्ति
            जिनके पास पृथक हवादार एवं शौचालय युक्त कक्ष की उचित व्यवस्था हो को
            चिकित्सक द्वारा पूर्ण चिकित्सिकीय आंकलन उपरांत होम आइसोलेशन की
            अनुमति दी जा सकती है, परन्तु ऐसे व्यक्तियों का निरंतर अनुसरण जिला
            स्तरीय दल द्वारा वीडियो कालिंग के माध्यम से सुनिश्चित किया जाए l 3.
            Whole Genome Sequencing (WGS) में यदि B.1.1.529 (Omicron Variant)
            नेगेटिव पाया जाता है तो, चिकित्सीय परामर्श अनुरूप व्यक्ति को
            डिस्चार्ज किया जा सकता है l4. उपरोक्त देशों से आने वाले समस्त
            अंतर्राष्ट्रीय यात्रियों की सूची आई.डी.एस.पी. शाखा द्वारा समय-समय पर
            सम्बंधित जिलों को उपलब्ध कराई जाती हैl तदानुसार विमानतल पर नेगेटिव
            पाए गए यात्रियों को अनियावर्तः सात दिवस हेतु होम क्वारंटीन किया जाए
            एवं आठवें दिवस पर पुनः आर. टी. पी. सी. आर. द्वारा जांचा जाए l 5.
            पॉजिटिव पाए गए अंतराष्ट्रीय यात्रियों की Whole Genome Sequencing
            (WGS) के लिए सैंपल संग्रहण करते हुए उन्हें पृथक से संस्थागत आइसोलेशन
            में रखा जाए l 6. Variants Of Concern की प्रभावी निगरानी हेतु नियमित
            तौर पर भी WGS सैंपल संग्रहित कर निर्धारित प्रयोगशालाओं में प्रेषित
            की जाए l7. Whole Genome Sequencing (WGS) में व्यक्ति नवीन Variant
            Omicron पॉजिटिव पाया जाता है तो, ऐसे रोगी को कड़ी संस्थागत आइसोलेशन
            में रखने का उचित प्रबंधन किया जाए एवं मानक ट्रीटमेंट प्रोटोकॉल का
            पालन तब तक सुनिश्चित किया जाए जब तक रोगी की पी. सी. आर. द्वारा जांच
            नेगेटिव नहीं हो जाती l 8. भारत सरकार द्वारा दिनांक 30/11/2021 की
            स्थिति में निम्नानुसार Countries at - risk चिन्हांकित किये गए है:-
            {'\n'}
            1. Countries in Europe including The United Kingdom {'\n'}2. South
            Africa{'\n'}
            3. Brazil{'\n'} 4. Botswana {'\n'}5. Chain{'\n'} 6. Mauritius
            {'\n'}7. New Zealand{'\n'} 8. Zimbabwe{'\n'} 9. Singapore {'\n'}
            10. Hong kong{'\n'} 11. Israel
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20,
              alignSelf: 'center',
            }}>
            कोविड -19 प्रकरणों के लिए उपचार व्यवस्थाएं
          </Text>
          <Text style={{alignSelf: 'center', marginTop: 30, fontSize: 17}}>
            1. प्रदेश में कोविड प्रकरणों की स्थिति पर कड़ी निगरानी रखते हुए आवयशक
            स्वास्थ्य संसाधन एवं समुचित अधोसंरचनागत व्यवस्थाएं सुनिश्चित की जाए
            l2. पर्याप्त ऑक्सीजन सिलेंडर तथा क्रियाशील ऑक्सीजन कंसन्टेटर की
            उपलब्धता ग्रामीण / शहरी क्षेत्रों के स्वास्थ्य संस्थाओ में रहे l 3.
            जिले में स्थापित पी.एस.ऐ प्लांट्स को क्रियाशील करने हेतु प्रदेश
            व्यापी मॉक - ड्रिल का आयोजन दिनांक 01 / 12 / 2021 को किया गया है
            तदानुसार, परिलक्षित समस्याओं का उचित स्तर से समाधान यथाशीघ्र
            सुनिश्चित किया जाए l 4. समस्त शासकीय डेडिकेटेड कोविड हेल्थ सेंटर तथा
            चिकित्सा महाविद्यालयीन डेडिकेटेड कोविड अस्पतालों में कोविड उपचार
            हेतु आवश्यक औषधियों (Buffer Stock के साथ) सामग्री व उपकरणों की
            उपलब्धता सुनिश्चित रहे l 5. इसी प्रकार बच्चों में कोविड - 19 के
            प्रबंधन हेतु आवश्यक व्यवस्थाएं (औषधि, सामग्री एवं उपकरण) सुनिश्चित
            किया जाए l 6. उपरोक्त के संबंध में सर्वसंबंधितों को समय रहते सूचित
            किया जाए{'\n'}विषय:- प्रदेश में कोविड-19 के संभावित तृतीय लहर की
            पूर्व तैयारियों के सम्बन्ध में निर्देश|{'\n'}कोविड - 19 के संभावित
            प्रकरणों का चिन्हांकन, टेस्टिंग एवं ट्रैकिंग{'\n'}
            कोविड -19 पॉजिटिव प्रकरणों का प्रबंधन{'\n'}
            कोविड -19 प्रकरणों के लिए उपचार व्यवस्थाएं
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CovidPage;
