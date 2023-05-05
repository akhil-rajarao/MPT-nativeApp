import { StyleSheet, Text, View,Image ,ScrollView} from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ContactUs from '../../component/common/ContactUs';
import Footer from '../../component/Footer';



const FAQ = () => {
  return (
    <ScrollView>
    <View>
      <View>
       <View>
        <Image
            style={styles.imagestyles}
            source={{
              uri: `https://mpstdc.com/assets/similar.da06dae7.jpg`,
            }}
          />
           
        </View>
        <View style={styles.title}>
        <Text style={styles.secTitle}>Frequently asked question's</Text>
        </View>
        
          {/* <Text style={styles.headingText}>MPIHTTS</Text> */}
          <View style={styles.detailsContainer}>
            <Text style={styles.innerHeading}>
            1) How and where can i cancel my booking?
            </Text>
            <Text style={styles.secondaryText}>
            Cancellation of I-tickets/hotel booking can be done at any computerized reservation system across the country and a cancellation tickets/hotel booking obtained. NO CASH REEFUND will be given. Bank charges that are being levied by the Payment Gateways/Banks are not subject to refund in the event of cancellation of tickets/bookings by the Customer Service Charges is also not refundable. The refund amount will be credited to the respective account electronically.
            </Text>
           
            <Text style={styles.innerHeading}>
            2) Do i receive a confirmation letter when i book a room?
            </Text>
            <Text style={styles.secondaryText}>
            You will get a confirmation via email & SMS once a room is booked and the print out can be used at the time of Check In along with the identification/identity proof selected by you at the time of booking. Therefore we request you to kindly ensure that the correct email ID & mobile number are entered while making the booking.

            </Text>

            <Text style={styles.innerHeading}>
            3) Can i book and hold a reservation and pay later?
            </Text>
            <Text style={styles.secondaryText}>
            No hold reservation is not possible through our website.
           </Text>

           <Text style={styles.innerHeading}>
           4) Can i change my reservation (name, date and time changes)?
            </Text>
            <Text style={styles.secondaryText}>
            Changing of a passenger’s name, date and room is not possible.
           </Text>

           <Text style={styles.innerHeading}>
           5) How do i pay for my booking?
            </Text>
            <Text style={styles.secondaryText}>
            You can make payments through the following modes: - Credit Cards: Visa/MasterCard/Maestro. Net Banking. Debit Cards.
          </Text>


          <Text style={styles.innerHeading}>
          6) I was trying to book my ticket however when i was making the payment some error popped up and the booking was not confirmed but the payment has been deducted from my account?
            </Text>
            <Text style={styles.secondaryText}>
            You can send e-mail to mail@mpstdc.com with full details. If the booking has been confirmed, if not then the full refund will be processed; and credited to the account or card from which the amount has been deducted.
          </Text>


          <Text style={styles.innerHeading}>
          7) Can i check-in if i misplace the identity proof given by me at the time of booking?
            </Text>
            <Text style={styles.secondaryText}>
            Identity proof is a must for Check-In in hotel. We request you to contact on e-mail mail@mpstdc.com regarding this query. However, some form of identity proof is a must for MP Tourism. Authorized ID-The Personal Photo Identification card falling in any of these five categories. 1. Passport 2. Voter identification Card 3. Driving License 4. PAN Card 5. Central Government Or State Government issued Employee identification. 6. Student identity Card with photograph issued by recognized School/College for their students. 7. Nationalized Bank Passbook with photograph. For Non-Indians, their country’s passport will constitute sole authorized ID.
          </Text>


          <Text style={styles.innerHeading}>
          8) What are the cancellation charges and how much time will take to get the refund?
           </Text>
            <Text style={styles.secondaryText}>
            Cancellation charges are as per the cancellation rules and policies. The refund will be processed by us in 2 working days from the time of cancellation; it would take additional 4-5 working days for the bank to credit it into your account.
          </Text>


          <Text style={styles.innerHeading}>
          9) Can i speak to someone in customer support?
            </Text>
            <Text style={styles.secondaryText}>
            You can also write to our customer support team at mpthelpline@mpstdc.com Tourist Helpline (Toll Free): 1800 233 7777 Timing: (10 AM to 6 PM ) (Sunday holiday, Saturday and other holiday Half Day) and someone will get back to you within 12 hours of your inquiry.
          </Text>


          <Text style={styles.innerHeading}>
          10) What are the transaction charges?
            </Text>
            <Text style={styles.secondaryText}>
            Credit Card: - 1.40% of customer payment amountNet banking: - 1.60%+taxes as applicable of customer payment amountAmex/Diners: 2% of customer payment amountInternational cards based Payments Facility: - 3.00 % of Customer Payment AmountUPI: - Nil up to Rs.2000 of Customer Payment Amount. 0.65% of customer payment amount for transactions above Rs.2000.00 (as per RBI guidelines)Cash Cards/Mobile Wallets: 1.60% of customer payment amountDebit Card: - Nil for transactions below Rs.2000 (as per RBI guidelines)1.00% for transactions above Rs.2000.00


          </Text>

          <Text style={styles.innerHeading}>
          11) Can i make payment via UPI?
            </Text>
            <Text style={styles.secondaryText}>
            Yes, but, {"\n"} In case of transaction failures due to any unavoidable technical errors and the amount debited from the customer's account, it will be returned back to the customer's bank account within 7 working days.
          </Text>
          </View>
          </View>
        <View>
          <ContactUs/>
         </View>
        <View style={styles.lastview}>
          <Footer/>
         </View>
       </View>
    </ScrollView>
  )
}

export default FAQ

const styles = StyleSheet.create({
  imagestyles:{
    width:wp('100%'),
    height:hp('40%'),
    position:'relative',
  },
  
  detailsContainer: {
    padding: 20,
    
  },
  innerHeading: {
    fontSize: 17,
    color:'red',
    paddingHorizontal:25,
    paddingTop:30
  },
  secondaryText: {
    color: '#757575',
    fontSize: 17,
    paddingHorizontal:25
  },
  secTitle: {
    textAlign: 'center',
    
    color: 'red',
    fontSize: 17,
   
    margin: 30,
    fontWeight: 'bold',
  },
  lastview:{
    marginLeft:10
  },
  title:{
    paddingRight:10,
    marginTop:30,
    paddingTop:20
  },
});