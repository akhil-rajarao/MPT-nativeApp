import {Modal, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ContactUs from '../../../component/common/ContactUs';
import Footer from '../../../component/Footer';
import {Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Row, Rows, Table} from 'react-native-table-component';

// import {useNavigation} from '@react-navigation/native';

const Wellness = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
            const onpress =() =>{
                 setModalVisible (!modalVisible)

            }

            const [lastmodalVisible, setLastmodalVisible] = React.useState(false);
            const onpressLast =() =>{
                 setLastmodalVisible (!lastmodalVisible)

            }

            const [sixthmodalVisible, setsixthmodalVisible] = React.useState(false);
            const onpresssixth =() =>{
                 setsixthmodalVisible (!sixthmodalVisible)

            }

            const [fivemodalVisible, setFivemodalVisible] = React.useState(false);
            const onpressFive =() =>{
                 setFivemodalVisible (!fivemodalVisible)

            }

            const [fourmodalVisible, setFourmodalVisible] = React.useState(false);
            const onpressFour =() =>{
                 setFourmodalVisible (!fourmodalVisible)

            }


            const [threemodalVisible, setThreemodalVisible] = React.useState(false);
            const onpressThree =() =>{
                 setThreemodalVisible (!threemodalVisible)

            }

            const [secondmodalVisible, setSecondmodalVisible] = React.useState(false);
            const onpressSecond =() =>{
                 setSecondmodalVisible (!secondmodalVisible)

            }

            const [droponeVisible, setDroponeVisible] = React.useState(false);
            const onpressDropONE =() =>{
                 setDroponeVisible (!droponeVisible)

            }

            const [droptwoVisible, setDropTwoVisible] = React.useState(false);
            const onpressDropTWO =() =>{
                 setDropTwoVisible (!droptwoVisible)

            }

            const [dropthreeVisible, setDropThreeVisible] = React.useState(false);
            const onpressDropTHREE =() =>{
                 setDropThreeVisible (!dropthreeVisible)

            }


            const header = ['BASTI', 'Sarvanga Abhyanga, Nadi Sweda & Basti', 'Adhoshaka Abhyanga, Nadi Sweda & Basti','Sthanika Abhyanga, Nadi Sweda & Basti' ];
  const data = [
    ['YOGA BASTI (8 Days)', '₹21,850', '₹17,220','₹15,500', ],
    ['KALA BASTI (16 Days)', '₹21,850', '₹17,220','₹15,500', ],
    ['KARMA BASTI (30 Days)', '₹21,850', '₹17,220','₹15,500', ],
    ['MADHUTAILIKA/', '₹21,850', '₹17,220','₹15,500', ],
    ['LEKHANA/VAITARANA/ PICHCHA/BASTI/ KSHEERA/ KSHARABASTI etc.', '₹21,850', '₹17,220','₹15,500', ],
   
  ];


  


  // const navigation = useNavigation<any>();
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: 'https://mpstdc.com/assets/Wellness.4d82aff7.jpg',
          }}
          style={styles.imageTop}
        />
        <Text style={styles.Heading}>WELLNESS TOURISM</Text>
      </View>
      <View style={{margin: 20}}>
        <Text style={styles.subHeading}>Wellness Options</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={{marginTop: 10}}>
        <Pressable onPress={onpress}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-john-tekeridis-3212179.c7ac00fc.png',
            }}
            style={styles.bannerImage}
          />
            </Pressable>
          {
          modalVisible ?    
         <Modal>
          
          <View  style={styles. modelmainview}>
          <ScrollView>
          <Pressable>
              <Text style={{color:'red'}} onPress={onpress}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>
            <View>
            <Text style={styles.modelheadtext}>HEALTHY BODY-REJUVENATION THERAPIES</Text>
            </View>
          
          
       <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>ABHYANGA & SWEDAM</Text>
            <Text style={styles.boxtext}>60 Minutes </Text>
            <Text style={styles.secondarytext}>Traditional Ayurveda relaxing body massage, done using medicated oils. It stimulates circulation, mobilizes and pacifies toxins, nourishes the skin & tones up the muscles followed by medicated steam.</Text>
          
           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >2 Hands Massage</Text>
            <Text  style={styles.typestext}>4 Hands Massage</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >R - 1850</Text>
            <Text  style={{color:'red',fontSize:16}}>R - 2250</Text>
           </View>
      </View>
        <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>MARDHANA</Text>
            <Text style={styles.boxtext}>90 Minutes </Text>
            <Text style={styles.secondarytext}>Deep tissue massage specifically designed for individuals with overworked muscles like athletes, fitness fanatics etc. it involves application of sustained pressure with deep strokes to target deeper muscles</Text>
          
           {/* <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >2 Hands Massage</Text>
            <Text  style={styles.typestext}>4 Hands Massage</Text>
           </View> */}

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2100</Text>
            </View>
         </View>

         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>VISHESHA ABHYANGA</Text>
            <Text style={styles.boxtext}>70 Minutes </Text>
            <Text style={styles.secondarytext}>Traditional Ayurveda relaxing body massage, done using medicated oils. It stimulates circulation, mobilizes and pacifies toxins, nourishes the skin & tones up the muscles followed by medicated steam.</Text>
          
           {/* <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >2 Hands Massage</Text>
            <Text  style={styles.typestext}>4 Hands Massage</Text>
           </View> */}

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2450</Text>
            {/* <Text  style={{color:'red',fontSize:16}}>R - 2250</Text> */}
           </View>
         </View>

   <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>HEAD, FOOT & SHOULDER MASSAGE</Text>
            <Text style={styles.boxtext}>45 Minutes </Text>
            <Text style={styles.secondarytext}>Massage done for specific regions for relaxation and feeling of wellness and sleeplessness.</Text>
          
           {/* <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >2 Hands Massage</Text>
            <Text  style={styles.typestext}>4 Hands Massage</Text>
           </View> */}

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 1400</Text>
            {/* <Text  style={{color:'red',fontSize:16}}>R - 2250</Text> */}
           </View>
         </View>



         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>PADAABHYANGA</Text>
            <Text style={styles.boxtext}>45 Minutes </Text>
            <Text style={styles.secondarytext}>Massage done to the feet which gives something, revitalizing and calming effects to the entire body</Text>
          
           {/* <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >2 Hands Massage</Text>
            <Text  style={styles.typestext}>4 Hands Massage</Text>
           </View> */}

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 980</Text>
            {/* <Text  style={{color:'red',fontSize:16}}>R - 2250</Text> */}
           </View>
         </View>

         <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
           
            <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>
        
          </ScrollView>
           </View>
           
      </Modal>  :null
         }
         
          {/* <Text style={styles.bannerText}>RELAX REFRESH REJUVENATE</Text> */}
        </View>

        {/* ??????????????? */}

 <View style={styles.image}>
  <Pressable onPress={onpressSecond}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-ron-lach-9146383.19538721.png',
            }}
            style={styles.bannerImage}
          />
          </Pressable>

          {
         secondmodalVisible ?    
         <Modal>
          
          <View  style={styles. modelmainview}>
          <ScrollView>
              <Pressable>
              <Text style={{color:'red',marginLeft:10}} onPress={onpressSecond}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>

           <View>
               <View style={styles.secondImagedropView}>
                <Text style={styles.droptext1}>PAIN MANAGEMENT THERAPIES</Text>
                <Pressable>
                <Text style={styles.droptext2} onPress={onpressDropONE} ><Icon name="chevron-down" size={25} color="red" /></Text>
                </Pressable>
               </View>
               
               <View style={styles.secondImagedropView}>
                <Text style={styles.droptext1}>SANDHI PARICHARANA – JOINT & SPINAL CARE</Text>
                <Pressable>
                <Text style={styles.droptext2} onPress={onpressDropTWO}><Icon name="chevron-down" size={25} color="red" /></Text>
                </Pressable>
               </View>
               
               <View style={styles.secondImagedropView}>
                <Text style={styles.droptext1}>PERSONALISED THERAPIES</Text>
                <Pressable>
                <Text style={styles.droptext2} onPress={onpressDropTHREE}><Icon name="chevron-down" size={25} color="red" /></Text>
                </Pressable>
               </View>
           </View>
            
          <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
   
            <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>


           
          
              </ScrollView>
           </View>
           
          
        </Modal>  :null
         }

 
      {
          droponeVisible ?    
         <Modal>
          
          <View  style={styles. secondImagreDropModalView}>
          <ScrollView>
          <Pressable>
              <Text style={{color:'red'}} onPress={onpressDropONE}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>

              {/* <View>
            <Text style={styles.modelheadtext}>PAIN MANAGEMENT </Text>
            </View>
             */}
            
            
            {/* <View>
          <Text  style={styles.underline}></Text>
         </View> */}

         <View>
            <Text style={styles.modelheadtext}>PAIN MANAGEMENT THERAPIES</Text>
            </View>
          
          
       <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>DHANYAMLADHARA</Text>
            <Text style={styles.boxtext}>90 Minutes </Text>
            <Text style={styles.secondarytext}>Dhanyamladhara is a special kind of Ayurveda therapy done using fermented liquid prepared using cereals, medical herbs etc ad is poured over affected body part in a continuous stream. Highly beneficial in obesity & pain arising from inflammation, musculoskeletal and neurological disorders</Text>
          
           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            {/* <Text  style={styles.typestext}>7 Sessions</Text> */}
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2500</Text>
            <Text  style={{color:'red',fontSize:16}}> ₹ 7200</Text>
            <Text  style={{color:'red',fontSize:16}}>₹ 15,000</Text>
            {/* <Text  style={{color:'red',fontSize:16}}>₹ 7910</Text> */}
           </View>
      </View>
        <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>SARVANGA TAKRA/KSHEERA DHARA</Text>
            <Text style={styles.boxtext}>40 Minutes </Text>
            <Text style={styles.secondarytext}>Continuous and steady pouring of warm medicated milk/buttermils/ herbal decoction or other medicated liquids all over the body. mainly indicated inn skin disorders, and other Neurological disorders</Text>
          
           
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 3650</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 10,350</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 16,350</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 21,630</Text>
            </View>
         </View>

         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>UDWARTANA/ UTSAADANA</Text>
            <Text style={styles.boxtext}>60 Minutes </Text>
            <Text style={styles.secondarytext}>Powder massage with or without oil using course powder of combination of medical herbs that aid in improving circulation. Beneficial in weight management, certain vascular and neurological condition..</Text>
          
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2000</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 5700</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 9,125</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 12,110</Text>
            </View>
         </View>

   
        <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
   
            <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>
          </ScrollView>
           </View>
           
      </Modal>  :null
         }


      {
          droptwoVisible ?    
         <Modal>
          
          <View  style={styles. secondImagreDropModalView}>
          <ScrollView>
          <Pressable>
              <Text style={{color:'red'}} onPress={onpressDropTWO}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>

              {/* <View>
            <Text style={styles.modelheadtext}>PAIN MANAGEMENT </Text>
            </View>
             */}
            
            
            {/* <View>
          <Text  style={styles.underline}></Text>
         </View> */}

         <View>
            <Text style={styles.modelheadtext}>SANDHI PARICHARANA – JOINT & SPINAL CARE</Text>
            </View>
          
          
       <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>JANU BASTI- unique therapy for knee care (Both Joint)</Text>
            <Text style={styles.boxtext}>60 Minutes </Text>
            <Text style={styles.secondarytext}>An external palliative and anti-inflammatory treatment to the knee joints. It reduces pain, weakness of the knee join, strengthens and lubricate joint spaces and ligaments, helpful in degenerative arthritis and non-specific arthritis, very suitable for maintenance of good joint function in athletes and sports-persons.</Text>
          
           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2300</Text>
            <Text  style={{color:'red',fontSize:16}}> ₹ 6550</Text>
            <Text  style={{color:'red',fontSize:16}}>₹ 10,350</Text>
            <Text  style={{color:'red',fontSize:16}}>₹ 13,750</Text>
           </View>
      </View>
        <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>KATI BASTI- unique therapy for low back health</Text>
            <Text style={styles.boxtext}>40 Minutes </Text>
            <Text style={styles.secondarytext}>An external treatment for degenerative diseases of the spine. It reduces inflammation, Strengthens the low back muscles, relatives strain and pain due to bad posture, over-weight, spondylosis and other spinal disorders.</Text>
          
           
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 1450</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 4,200</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 6,600</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 8,750</Text>
            </View>
         </View>

         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>BAHU BASTI/JANU BASTI (Single Joint)</Text>
            <Text style={styles.boxtext}>60 Minutes </Text>
            <Text style={styles.secondarytext}>An external palliative and anti-inflammatory treatments to the shoulder/knee joints. It reduces pain, weakness of the joint, strengthens and lubricate joint spaces and ligaments helpful in frozen shoulder, degenerative arthritis and other pain related conditions.</Text>
          
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 1600</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 4750</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 7,500</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 10,000</Text>
            </View>
         </View>

         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>GREEVA BASTI- therapy for neck care</Text>
            <Text style={styles.boxtext}>60 Minutes </Text>
            <Text style={styles.secondarytext}>An external palliative and rejuvenating treatment done locally at the cervical region. It reduces pain, Stiffness and strengthens the neck & shoulder region.</Text>
          
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2500</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 7200</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 11,500</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 15,000</Text>
            </View>
         </View>

         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>ABHYANGA - SPINE</Text>
            <Text style={styles.boxtext}>60 Minutes </Text>
            <Text style={styles.secondarytext}>Massage done for the relaxation of spinal stress. **(Package includes Sthanika abhyanga & Pinda sweda/Nadi sweda) Note: Duration of the therapy and procedure may alter based on the disease condition and physician discretion.</Text>
          
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 1600</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 4750</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 7,500</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 10,000</Text>
            </View>
         </View>


   
        <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
   
        <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>

          </ScrollView>
           </View>
           
      </Modal>  :null
         }

          
{
          dropthreeVisible ?    
         <Modal>
          
          <View  style={styles. secondImagreDropModalView}>
          <ScrollView>
          <Pressable>
              <Text style={{color:'red'}} onPress={onpressDropTHREE}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>

              {/* <View>
            <Text style={styles.modelheadtext}>PAIN MANAGEMENT </Text>
            </View>
             */}
            
            
            {/* <View>
          <Text  style={styles.underline}></Text>
         </View> */}

         <View>
            <Text style={styles.modelheadtext}>PERSONALISED THERAPIES</Text>
            </View>
          
          
       <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>DHANYAMLADHARA</Text>
            <Text style={styles.boxtext}>90 Minutes </Text>
            <Text style={styles.secondarytext}>Dhanyamladhara is a special kind of Ayurveda therapy done using fermented liquid prepared using cereals, medical herbs etc ad is poured over affected body part in a continuous stream. Highly beneficial in obesity & pain arising from inflammation, musculoskeletal and neurological disorders</Text>
          
           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            {/* <Text  style={styles.typestext}>7 Sessions</Text> */}
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2500</Text>
            <Text  style={{color:'red',fontSize:16}}> ₹ 7200</Text>
            <Text  style={{color:'red',fontSize:16}}>₹ 15,000</Text>
            {/* <Text  style={{color:'red',fontSize:16}}>₹ 13,750</Text> */}
           </View>
      </View>
        <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>SARVANGA TAKRA/KSHEERA DHARA</Text>
            <Text style={styles.boxtext}>40 Minutes </Text>
            <Text style={styles.secondarytext}>Continuous and steady pouring of warm medicated milk/buttermils/ herbal decoction or other medicated liquids all over the body. mainly indicated inn skin disorders, and other Neurological disorders</Text>
          
           
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 3650</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 10,350</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 16,350</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 21,630</Text>
            </View>
         </View>

         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>UDWARTANA/ UTSAADANA</Text>
            <Text style={styles.boxtext}>60 Minutes </Text>
            <Text style={styles.secondarytext}>Powder massage with or without oil using course powder of combination of medical herbs that aid in improving circulation. Beneficial in weight management, certain vascular and neurological condition..</Text>
          
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2000</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 5700</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 9,125</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 12,110</Text>
            </View>
         </View>

        

        

   
        <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
   
        <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>

          </ScrollView>
           </View>
           
      </Modal>  :null
         }

 

        


          {/* <Text style={styles.bannerText}>PAIN FREE LIFE</Text> */}
        </View>
   {/* 3rd IMAGE START>>>>>>>>>>>>>>>>>>>>>>>??????????????? */}

        <View style={styles.image}>
          <Pressable onPress={onpressThree}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-pinkwitch-%E8%AF%B8%E8%91%9B%E7%AD%B1%E6%9A%96-12851257.3857f411.png',
            }}
            style={styles.bannerImage}
          />
          </Pressable>
          {
         threemodalVisible ?    
         <Modal>
          
          <View  style={styles. modelmainview}>
          <ScrollView>
          <Pressable>
              <Text style={{color:'red',marginLeft:10}} onPress={onpressThree}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>
            <View>
            <Text style={styles.modelheadtext}>CLEANING | BALANCING | HEALING</Text>
             </View>

             <View style={{marginTop:40}}>
             <Text style={styles.modelheadtext}>PANCHAKARMA THERAPY</Text>
             <Text style={styles.modelheadtext2}>[Ayurveda Bio-purification Therapies]</Text>
            </View>

         <View>
          <Text  style={styles.underline}></Text>
         </View>

         <View>
          <Text style={styles.secondarytext}>Panchakarma is a five pronged bio-purificatory therapy, which is unique Ayurveda treatment tailored for various ailments, depending on body and health status of individuals by selecting specific herbal formulations and diet pattern. It is one among the ancient Ayurveda treatment for improving immunity, boosting metabolism & thereby maintenance of health and disease - free state</Text>
         </View>
          
          
       <View style={{padding:10}}>
            
            {/* <Text style={styles.firsttext}>FACIAL PACKAGES- SOUNDARYA PACKAGES</Text>
           <Text style={styles.secondarytext}>This antiaging property of milk & Nourishing property of Navara rice is highly beneficial for dull skin. It brings back the natural glow & Luster to you skin by reducing tan & Dark patches.</Text>
          <Text style={styles.boxtextLast}>60 Minutes </Text> */}

      <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
            
           <Text style={styles.detailstextImagepopup4}>-VAMANA- THERAPEUTIC EMESIS</Text>
           <Text style={styles.detailstextImagepopup4}>-VAMANA- THERAPEUTIC EMESIS</Text>
           <Text style={styles.detailstextImagepopup4}>-NASYA- ERRHINE THERAPY/NASAL DROPS (7 Sessions)</Text>
           <Text style={styles.detailstextImagepopup4}>-RAKTAMOKSHANA- BLOODLETTING/ LEECH THERAPY</Text>
          </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          <Text style={styles.detailstext3}>-₹ 77,000</Text>
          <Text style={styles.detailstext3}>-₹ 14,000</Text>
          <Text style={styles.detailstext3}>-₹ 77,00</Text>
          <Text style={styles.detailstext3}>-₹ 12,000/Leech</Text>

          </View>
         </View>
        
   </View>
           
             <View style={{marginTop:30,paddingHorizontal:5}}>
             <Table>
                <Row data={header} style={styles.header} flexArr={[5, 4, 4,4 ]} textStyle={styles.textH} />
                <Rows data={data} style={styles.datarow} flexArr={[5, 4, 4,4 ]} textStyle={styles.text2} />
             </Table>
              </View>
            
              <View style={{marginTop:30,paddingHorizontal:5}}>
             <Table>
                <Row data={header} style={styles.header} flexArr={[5, 4, 4,4 ]} textStyle={styles.textH} />
                <Rows data={data} style={styles.datarow} flexArr={[5, 4, 4,4 ]} textStyle={styles.text2} />
             </Table>
              </View>
            


         <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
   
            <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>
           
          
              </ScrollView>
           </View>
           
          
        </Modal>  :null
         }




          {/* <Text style={styles.bannerText}>CLEANSING BALANCING HEALING</Text> */}
        </View>
  {/* 4th IMAGE START>>>>>>>>>>>>>>> ??????????????? */}

        <View style={styles.image}>
          <Pressable onPress={onpressFour}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-elina-fairytale-3822646.02bc4e48.png',
            }}
            style={styles.bannerImage}
          />
          </Pressable>
          {
         fourmodalVisible ?    
         <Modal>
          
          <View  style={styles. modelmainview}>
          <ScrollView>
          <Pressable>
              <Text style={{color:'red',marginLeft:10}} onPress={onpressFour}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>
            <View>
            <Text style={styles.modelheadtext}>CLINICALLY CUSTOMIZED | MEDICALLY SUPERVISED WEIGHT-LOSS TREATMENTS</Text>
            </View>

           
          
          
          
           <View style={{padding:10}}>
       
            
            {/* <Text style={styles.firsttext}>DRUDHAKAYA CHIKITSA</Text> */}
           {/* <Text style={styles.secondarytext}>This antiaging property of milk & Nourishing property of Navara rice is highly beneficial for dull skin. It brings back the natural glow & Luster to you skin by reducing tan & Dark patches.</Text> */}
          {/* <Text style={styles.boxtextLast}>60 Munites </Text> */}
          <View>
          <Text style={styles.firsttext}>DRUDHAKAYA CHIKITSA</Text>
          </View>

      <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.detailstextImagepopup4}>Option 1 : Rookshana + 37 sessioins of Udwartana/Utsaadana</Text>
           <Text style={styles.detailstextImagepopup4}>Option 2 : 15 of Dhanyamaladhaara + 30 Sessions of Udwartana? Utsaadana</Text>
           <Text style={styles.detailstextImagepopup41}>Annual weight management program</Text>
          </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.Lastboxtext3}>Valid - 12 Months</Text>
          <Text style={styles.detailstext2}>₹ 77,000</Text>
          {/* <Text style={styles.Lastboxtext3}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2100</Text> */}

          </View>
      </View>


      <View>
          <Text style={styles.firsttext}>MEDOHARA CHIKITSA</Text>
          </View>

      <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.detailstextImagepopup4}>Option 1 : Rookshana + 37 sessioins of Udwartana/Utsaadana</Text>
           <Text style={styles.detailstextImagepopup4}>Option 2 : 15 of Dhanyamaladhaara + 30 Sessions of Udwartana? Utsaadana</Text>
           <Text style={styles.detailstextImagepopup41}>Annual weight management program</Text>
          </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.Lastboxtext3}>Valid - 09 Months</Text>
          <Text style={styles.detailstext2}>₹ 70,700</Text>
          {/* <Text style={styles.Lastboxtext3}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2100</Text> */}

          </View>
      </View>


      <View>
          <Text style={styles.firsttext}>LEKHANA CHIKITSA</Text>
          </View>

      <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.detailstextImagepopup4}>Rookshana + 4 Dhanyamladhaara+ 6 Udwartana/Utsaadana</Text>
           <Text style={styles.detailstextImagepopup4}>Option 2 : 15 of Dhanyamaladhaara + 30 Sessions of Udwartana? Utsaadana</Text>
           <Text style={styles.detailstextImagepopup41}>Combination of Ayurveda therapies for weight management</Text>
          </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.Lastboxtext3}>Valid - 03 Months</Text>
          <Text style={styles.detailstext2}>₹ ₹ 39,900</Text>
          {/* <Text style={styles.Lastboxtext3}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2100</Text> */}

          </View>
      </View>

      
      <View>
          <Text style={styles.firsttext}>ROOKSHANA CHIKITSA</Text>
          </View>

      <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.detailstextImagepopup4}>2 Udwartana +2 Dhanyam|adhaara + classical Virechana</Text>
          <Text style={styles.detailstextImagepopup41}>Natural weight loss therapy which includes detox, paste massage, pouring stream of medicated fermented liquids.</Text>
          </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.Lastboxtext3}>Valid - 09 Months</Text>
          <Text style={styles.detailstext2}>₹ 20,790</Text>
          {/* <Text style={styles.Lastboxtext3}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2100</Text> */}

          </View>
      </View>

      <View>
          <Text style={styles.firsttext}>KARSHANA CHIKITSA</Text>
          </View>

      <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.detailstextImagepopup4}>1. sadhyo Virechana + 7.Dhanyam|adhaara or 9 Udwartana Utsaadana</Text>
          <Text style={styles.detailstextImagepopup41}>Natural and short period therapy for losing weight and toning of the body</Text>
          </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.Lastboxtext3}>Valid - 09 Months</Text>
          <Text style={styles.detailstext2}>₹ 16,170</Text>
          {/* <Text style={styles.Lastboxtext3}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2100</Text> */}

          </View>
      </View>


      

      

          
   

   </View>
        {/* <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>Disclaimer</Text>
           
            <Text style={styles.secondarytext}>-Please arrive at the centre 15 minutes before the appointment.</Text>
            <Text style={styles.secondarytext}>-Reporting late may shorten the duration of the therapy booked.</Text>
            <Text style={styles.secondarytext}>-Please report about your allergies prior to the treatments.</Text>
            <Text style={styles.secondarytext}>-Incase of cancellation or postponement of the appointments, please let us know in advance.</Text>
            <Text style={styles.secondarytext}>-The duration, selection of therapies and medicines are subjected to change according to Doctor’s advice based on health condition, season etc.</Text>
            <Text style={styles.secondarytext}>-Doctor’s advice is a must before therapy for pregnant women and children below 18 years of age.</Text>

          
         </View> */}

         <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
   
            <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>


           
          
              </ScrollView>
           </View>
           
          
        </Modal>  :null
         }


          {/* <Text style={styles.bannerText}>SOUNDARYA</Text> */}
        </View>






        {/*FIVE IMAGE start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ??????????????? */}

        <View style={styles.image}>
          <Pressable onPress={onpressFive}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-breakingpic-3188.d063448e.png',
            }}
            style={styles.bannerImage}
          />
          </Pressable>
          {
          fivemodalVisible ?    
         <Modal>
          
          <View  style={styles. modelmainview}>
          <ScrollView>
          <Pressable>
              <Text style={{color:'red'}} onPress={onpressFive}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>

              <View>
            <Text style={styles.modelheadtext}>LIVE A STRESS FREE LIFE</Text>
            </View>
            
            
            
            <View>
          <Text  style={styles.underline}></Text>
         </View>

         <View>
            <Text style={styles.modelheadtext}>HEALTHY MIND - DE - STRESSING THERAPIES</Text>
            </View>
          
          
       <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>TAILA DHARA</Text>
            <Text style={styles.boxtext}>75 Minutes </Text>
            <Text style={styles.secondarytext}>Dhara with medicated oili **Exclusice of medicated oils</Text>
          
           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 1330</Text>
            <Text  style={{color:'red',fontSize:16}}> ₹ 3780</Text>
            <Text  style={{color:'red',fontSize:16}}>₹ 5980</Text>
            <Text  style={{color:'red',fontSize:16}}>₹ 7910</Text>
           </View>
      </View>
        <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>KSHEERA DHARA</Text>
            <Text style={styles.boxtext}>60 Minutes </Text>
            <Text style={styles.secondarytext}>Dhara with medicated oili **Exclusice of medicated oils</Text>
          
           
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2030</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 5800</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 9,100</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 12,120</Text>
            </View>
         </View>

         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>TAKRA DHARA</Text>
            <Text style={styles.boxtext}>60 Minutes </Text>
            <Text style={styles.secondarytext}>Dhara procedure done with buttermilk processed with medicated decoctions</Text>
          
            <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2030</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 5800</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 9,100</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 12,120</Text>
            </View>
         </View>

   <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>SHIRO BASTI</Text>
            <Text style={styles.boxtext}> </Text>
            <Text style={styles.secondarytext}>It is a unique procedure in which a pool of warm herbarized oil is retained over the scalp for a prescribed period of time. **Duration and medicines- As decided by the physician</Text>
          
           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 1650</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 4750</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 7500</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 10,000</Text>
            
           </View>
         </View>



         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>SHIRO PICHU</Text>
            <Text style={styles.boxtext}>30 Minutes </Text>
            <Text style={styles.secondarytext}>Retention of oil on the scalp using a cotton pad impregnated with medicated oil, effective in psychological disorders, head & neck disorders and dermatological conditions</Text>
          
           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 910</Text>
           </View>
         </View>


         <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>SHIRO ABHYANGA</Text>
            <Text style={styles.boxtext}>30 Minutes </Text>
            <Text style={styles.secondarytext}>The rekaxing head-massage with medicated oils that protects the sense organs, prevents hair fall, premature greying, and relaxes the body & mind</Text>
          
           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={styles.typestext} >costsession</Text>
            <Text  style={styles.typestext}>3 Sessions</Text>
            <Text  style={styles.typestext}>5 Sessions</Text>
            <Text  style={styles.typestext}>7 Sessions</Text>
           </View>

           <View style={{marginLeft:30,marginTop:20}}>
            <Text style={{color:'red',fontSize:16}} >₹ 2000</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 5700</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 9,125</Text>
            <Text style={{color:'red',fontSize:16}} >₹ 12,110</Text>
            
           </View>
         </View>






            

         <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
   
            <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>
          </ScrollView>
           </View>
           
      </Modal>  :null
         }

          










          {/* <Text style={styles.bannerText}> LIVE A STRESS-FREE LIFE</Text> */}
        </View>
  {/* SIXTH IMAGE START>>>>>>>>>>???????????????>>>>>>>>>>>>>>>>>>>> */}

        <View style={styles.image}>
          <Pressable onPress={onpresssixth}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-cottonbro-studio-3997986.b6909e14.png',
            }}
            style={styles.bannerImage}
          />
          </Pressable>
           {
         sixthmodalVisible ?    
         <Modal>
          
          <View  style={styles. modelmainview}>
          <ScrollView>
          <Pressable>
              <Text style={{color:'red',marginLeft:10}} onPress={onpresssixth}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>
            <View>
            <Text style={styles.modelheadtext}>REFRESH THE SOUL</Text>
            </View>

            <View>
            <Text  style={styles.underline}></Text>
            </View>
          
          
          
           <View style={{padding:10}}>
       
            
            <Text style={styles.firsttext}>WELLNESS CARDS</Text>
           {/* <Text style={styles.secondarytext}>This antiaging property of milk & Nourishing property of Navara rice is highly beneficial for dull skin. It brings back the natural glow & Luster to you skin by reducing tan & Dark patches.</Text> */}
          {/* <Text style={styles.boxtextLast}>60 Munites </Text> */}

      <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
           <Text style={styles.detailstext2}>This antiaging property of milk & Nourishing property of Navara rice is highly beneficial for dull skin. It brings back the natural glow & Luster to you skin by reducing tan & Dark patches.</Text>
           <Text style={styles.detailstext2}>NAVARA FACIAL50</Text>
           <Text style={styles.detailstext2}>WELLNESS CARD - WE</Text>
           <Text style={styles.detailstext2}>25 Abhyanga + Swedana</Text>
          </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.sixthboxtext1}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2100</Text>
          <Text style={styles.Lastboxtext3}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2100</Text>

          </View>
      </View>

      <View>
      <Text style={styles.secondarytext}>Note:Two registered members of the family can avail the services</Text>
      </View>

           <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
            
           <Text style={styles.detailstext2}>WELLNESS CARD - ME</Text>
           <Text style={styles.detailstext2}>15 Abhyanga + Swedana</Text>
           </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.Lastboxtext3}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2450</Text>
         </View>
         </View>
   <View>
    <Text style={styles.secondarytext}>Note: One registered member of the family can avail the services</Text>
   </View>

   </View>
        <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>Disclaimer</Text>
           
            <Text style={styles.secondarytext}>-Please arrive at the centre 15 minutes before the appointment.</Text>
            <Text style={styles.secondarytext}>-Reporting late may shorten the duration of the therapy booked.</Text>
            <Text style={styles.secondarytext}>-Please report about your allergies prior to the treatments.</Text>
            <Text style={styles.secondarytext}>-Incase of cancellation or postponement of the appointments, please let us know in advance.</Text>
            <Text style={styles.secondarytext}>-The duration, selection of therapies and medicines are subjected to change according to Doctor’s advice based on health condition, season etc.</Text>
            <Text style={styles.secondarytext}>-Doctor’s advice is a must before therapy for pregnant women and children below 18 years of age.</Text>

          
         </View>

         <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
   
            <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>


           
          
              </ScrollView>
           </View>
           
          
        </Modal>  :null
         }
          {/* <Text style={styles.bannerText}>REFRESH THE SOUL</Text> */}
        </View>



 {/* LAST IMAGE START      .....>>>??????????????? */}

        <View style={styles.image}>
        <Pressable onPress={onpressLast}>
          <Image
            source={{
              uri: 'https://mpstdc.com/assets/pexels-anna-shvets-5069459.1159bc56.png',
            }}
            style={styles.bannerImage}
          />
          </Pressable>

        {
         lastmodalVisible ?    
         <Modal>
          
          <View  style={styles. modelmainview}>
          <ScrollView>
          <Pressable>
              <Text style={{color:'red',marginLeft:10}} onPress={onpressLast}><Icon name="remove" size={25} color="red" /></Text>
              </Pressable>
            <View>
            <Text style={styles.modelheadtext}>SOUNDARYA</Text>
            </View>

            <View>
          <Text  style={styles.underline}></Text>
         </View>
          
          
       <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>FACIAL PACKAGES- SOUNDARYA PACKAGES</Text>
           <Text style={styles.secondarytext}>This antiaging property of milk & Nourishing property of Navara rice is highly beneficial for dull skin. It brings back the natural glow & Luster to you skin by reducing tan & Dark patches.</Text>
          <Text style={styles.boxtextLast}>60 Minutes </Text>

      <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
            
           <Text style={styles.detailstext2}>NAVARA FACIAL50</Text>
           <Text style={styles.detailstext2}>WELLNESS CARD - WE</Text>
           <Text style={styles.detailstext2}>25 Abhyanga + Swedana</Text>
          </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          <Text style={styles.detailstext2}>₹ 2100</Text>
          <Text style={styles.Lastboxtext3}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2100</Text>

          </View>
      </View>

      <View>
      <Text style={styles.secondarytext}>Note:Two registered members of the family can avail the services</Text>
      </View>

           <View style={styles.contactdetailsView}>
           <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
            
           <Text style={styles.detailstext2}>WELLNESS CARD - ME</Text>
           <Text style={styles.detailstext2}>15 Abhyanga + Swedana</Text>
           </View>

          <View style={{alignItems:'center',marginHorizontal:60,paddingHorizontal:40,}}>
          
          <Text style={styles.Lastboxtext3}>75 - Minutes</Text>
          <Text style={styles.detailstext2}>₹ 2450</Text>
         </View>
         </View>
   <View>
    <Text style={styles.secondarytext}>Note: One registered member of the family can avail the services</Text>
   </View>

   </View>
        <View style={{padding:10}}>
            
            <Text style={styles.firsttext}>Disclaimer</Text>
           
            <Text style={styles.secondarytext}>-Please arrive at the centre 15 minutes before the appointment.</Text>
            <Text style={styles.secondarytext}>-Reporting late may shorten the duration of the therapy booked.</Text>
            <Text style={styles.secondarytext}>-Please report about your allergies prior to the treatments.</Text>
            <Text style={styles.secondarytext}>-Incase of cancellation or postponement of the appointments, please let us know in advance.</Text>
            <Text style={styles.secondarytext}>-The duration, selection of therapies and medicines are subjected to change according to Doctor’s advice based on health condition, season etc.</Text>
            <Text style={styles.secondarytext}>-Doctor’s advice is a must before therapy for pregnant women and children below 18 years of age.</Text>

          
         </View>

         <View>
          <Text  style={styles.underline}></Text>
         </View>
    
         <View>
            <Text style={styles.modelheadtext}>AVAIL SERVICES AT OUR PROPERTIES MENTIONED BELOW</Text>
            </View>
   
            <View style={styles.contactdetailsView}>
          <View style={styles.iconsView1}>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
          
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          <Text style={styles.iconone}><Icon name="building" size={25} color="red" /></Text>
          <Text style={styles.iconetwo}><Icon name="phone" size={25} color="red" /></Text>
         
          </View>
          
          
          <View style={styles.iconsTextView}>
          
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
          
          <Text style={styles.detailstext1} >MPT Holiday Homes, Amarkantak</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT White Tiger Forest Lodge, Bandhavgarh</Text>
          <Text style={styles.detailstext2}>8123156357</Text>
         
          <Text style={styles.detailstext1} >MPT Baghira Jungle Resort, Mocha</Text>
          <Text style={styles.detailstext2}>9611526357</Text>
         
          <Text style={styles.detailstext1} >MPT Glen View Pachmarhi</Text>
          <Text style={styles.detailstext2}>8123154357</Text>
         
         </View>
          </View>

           
          
              </ScrollView>
           </View>
           
          
        </Modal>  :null
         }
         




          {/* <Text style={styles.bannerText}>SOUNDARYA</Text> */}
        </View>
        {/* ??????????????? */}
      </View>

      <View>
        <ContactUs />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imageTop: {
    width: wp('100%'),
    height: hp('40%'),
    position: 'relative',
  },
  Heading: {
    fontSize: 32,
    color: 'white',
    position: 'absolute',
    top: 130,
    alignSelf: 'center',
    zIndex: 30,
    fontWeight: '900',
  },
  subHeading: {
    fontSize: 35,
    fontFamily: 'YouthPower-X34qG',
    color: 'darkred',
    marginTop: 50,
  },

  imageContainer: {
    height: hp('300%'),
    // width: wp('90%'),
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'lightblue',
  },
  bannerImage: {
    width: wp('90%'),
    height: hp('40%'),
  },
  bannerText:{
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 200,
    fontSize: 20,
    fontWeight: 800,
    color: '#ffffff',
  },
  image: {
    marginTop: 20,
  },
  footer: {
    marginLeft: 10,
  },
  


  modelmainview:{
    backgroundColor:'white',
    flex:1,
    marginHorizontal:20,
    marginTop:20,
    marginBottom:100,
    borderRadius:5,
    borderWidth:1,
    borderColor:'red'
  },

secondImagreDropModalView:{
  
    backgroundColor:'white',
    flex:1,
    marginHorizontal:30,
    marginTop:20,
    marginBottom:100,
    borderRadius:5,
    borderWidth:1,
    borderColor:'red'
  
},

  firsttext:{
    color:'red',
    fontSize:16,
   marginTop:5
   
  },
  boxtext:{
    color:'red',
    fontSize:18,
    borderWidth:2,
    borderRadius:5,
    width:150,
    height:40,
    paddingHorizontal:25,
    paddingTop:5,
    marginTop:10,
  },
  secondarytext:{
    color:'black',
    fontSize:15,
    paddingHorizontal:20,
    marginTop:5
  },
  typestext:{
    color:'black',
    fontWeight:'bold',
    fontSize:17
  },
modelheadtext:{
  alignSelf:'center',
  color:'red',
  fontSize:17,
  padding:5
},
modelheadtext2:{
  alignSelf:'center',
  color:'black',
  fontSize:17,
  padding:5
},

underline: {
  width: '80%',
  borderBottomWidth: 2,
  borderColor: 'gray',
  marginLeft:20
},
contactdetailsView:{
  flexDirection:'row',
 justifyContent:'space-evenly',
 marginTop:40
},
detailstext1:{
color:'black',
fontSize:17,
marginTop:1,
alignSelf:'flex-start',
},
detailstext2:{
  color:'red',
  fontSize:15,
  marginTop:5,
  alignSelf:'flex-start',
 

},
detailstext3:{
  color:'red',
  fontSize:15,
  marginTop:0,
  alignSelf:'flex-start',
  paddingTop:40
 

},

detailstextImagepopup4:{
  color:'black',
  fontSize:15,
  marginTop:5,
  alignSelf:'flex-start'

},
detailstextImagepopup41:{
  color:'black',
  fontSize:15,
  marginTop:5,
  alignSelf:'flex-start',
  backgroundColor:'#DEB887'

},

boxtextLast:{
  color:'red',
  fontSize:18,
  borderWidth:2,
  borderRadius:5,
  width:350,
  height:40,
  paddingHorizontal:60,
  paddingLeft:125,
  paddingTop:5,
  marginTop:5

},
Lastboxtext3:{
  color:'red',
  // fontSize:13,
  borderWidth:2,
  borderRadius:5,
  // width:100,
  // height:40,
  paddingHorizontal:2,
  paddingTop:5,
  marginTop:10,
},

sixthboxtext1:{
  color:'red',
 
  borderWidth:2,
  borderRadius:5,
 
  height:180,
  paddingHorizontal:5,
  paddingTop:60,
  marginTop:10,
  
 

},
header: {
  height: 150,
  backgroundColor: 'darkred',
},
textH: {
  marginHorizontal: 10,
  color: 'white',
  fontSize: 15,
  fontWeight:'bold'
},
datarow: {
  height: 100,
  backgroundColor: 'white',
},
text2: {
  marginHorizontal: 10,
  color: 'black',
  fontSize:14
},
secondImagedropView:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  margin:10,
  padding:10,
  borderWidth:2,
  height:120,
  borderRadius:10,
  borderColor:'gray',
},

droptext1:{
alignItems:'center',
marginHorizontal:60,
paddingHorizontal:30,
color:'red',
fontSize:17
},

droptext2:{
  alignItems:'center',
  marginHorizontal:60,
  paddingHorizontal:30,

},
iconsView1:{
  alignItems:'center',
  marginHorizontal:40,
  paddingHorizontal:40,
},
iconsTextView:{
  alignItems:'center',
  marginHorizontal:40,
  paddingHorizontal:40,

},
iconone:{
  marginTop:10,

},
iconetwo:{
  marginTop:10,

},


});

export default Wellness;
