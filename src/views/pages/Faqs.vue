<template>
  <div class="container">
    <vue-headful
            title="FAQs | TravCP"
            description="Description from TravCP"
        />
    <Navbar/>
    <!--About us start -->
    <div class="about-us-header">
      <p>FAQs</p>
      <hr>
    </div>
    <div class="about-us-main"> 
     <ul id="FAQ" class="faq">

		  <li v-for="data in FAQS" :key="data.title">
		    <div class="faq-q">
		      {{ data.title }}
		      <hr style="color: #FFF">
		      <div class="faq-a closedFAQ" v-html="data.description"> 
		      </div>
		    </div>
		  </li>
		</ul>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Faqs",
  components: {
    Navbar
  },
  mounted(){
	var timing = 300;

	$('#FAQ .faq-q').click(function() {
	  if ($(this).children('.faq-a').hasClass('openFAQ')) {
	    $(this).children('.faq-a').removeClass('openFAQ').addClass('closedFAQ').slideUp(timing);
	  } else if ($('.faq-a').hasClass('openFAQ')) {
	    $('.faq-a').removeClass('openFAQ').addClass('closedFAQ').slideUp(timing);
	    $(this).children('.faq-a').removeClass('closedFAQ').addClass('openFAQ').slideDown(timing);
	  } else {
	    $(this).children('.faq-a').removeClass('closedFAQ').addClass('openFAQ').slideDown(timing);
	  }
	});
  },
  data() {
  	return {
  		FAQS : [
  			{
  				title: 'How do I book?',
  				description: 'Booking on TravCP is very easy! Enter the name of the destination or the area which you’d like to visit in the search field and click on the search button. You can apply the available filters to narrow your search, or simply call our support for help. Once you have located the Experience, Restaurant, Place or Tour you want to book, Click into its information page and select an available date. Simply click book and go to the Checkout page to pay for the booked Experience. '
  			},
  			{
  				title: 'Is booking on TravCP secure?',
  				description: 'Absolutely! We DO NOT save or share any card details/information to any party whatsoever. Our paymennt processor is PCIDSS Compliant and thus quite secure. Please refer to our <router-link to="/policies">privacy policy</router-link> for more.'
  			},
  			{
  				title: 'What are the modes of payment I can use?',
  				description: 'If you choose “Pay now”, you can pay online by credit/debit card (Master Card, VISA, Paypal) depending on where these payment methods are available. We advise not to pay Merchants directly as TravCP will not be held liable for any such direct payments.'
  			},
  			{
  				title: 'How do I check the status of my refund?',
  				description: 'Please check our <router-link to="/policies">terms and conditions</router-link> for more or contact our support for all matters related to refunds.'
  			},
  			{
  				title: 'How do I cancel my booking through TravCP?',
  				description: 'Cancellation policy is peculiar/different for each experience or host as this is mostly defined by the host. Click <router-link to="/policies">here</router-link> to see more on our terms and conditions.'
  			},
  			{
  				title: 'How can I modify my booking?',
  				description: 'To modify your booking, please contact our support who will take care of this for you.'
  			},
  			{
  				title: 'When is the latest I can cancel my booking?',
  				description: 'This will depend on the destination or restaurant’s policy. Please refer to the cancellation policy of the destination which is displayed on the destination’s details page.'
  			},
  			{
  				title: 'What happens if I don\'t show up and I have already paid for my reservation?',
  				description: 'This depends on the cancellation policies that applies to the booking you have made. Most of our destinations/restaurants do allow you to cancel your booking before check-in, but a fee may apply depending on how much time before your check-in, you cancel your booking. Please refer to the cancellation policies of your booking or contact our support'
  			},
  			{
  				title: 'How do I confirm my booking?',
  				description: 'As soon as you have paid, you will receive an e-mail with the details of your booking. Your bookings can also be viewed on “my bookings” section of your profile'
  			},
  			{
  				title: 'How do I know my booking is confirmed?',
  				description: 'Once you have confirmed your booking and paid, you will receive an e-mail with the details of your booking, including your booking reference. After you’ve received this e-mail, the booking is 100% confirmed'
  			},
  			{
  				title: 'I have not received a confirmation email after making a reservation, what should I do?',
  				description: 'Please contact our support'
  			},
  			{
  				title: 'What if the destination or restaurant does not acknowledge the booking made online?',
  				description: 'Please contact our support right away to handle this issue with the destination or restaurant directly. We advise you to always take a printed copy or take a screen shot of the booking confirmation received by e-mail.'
  			},
  			{
  				title: 'How long will it take for the restaurant to have my reservation information?',
  				description: 'As soon as you have made the payment online, your reservation is complete'
  			},
  			{
  				title: 'How can I reach the customer service team?',
  				description: 'You can either call us, chat with us, or send us an e-mail anytime, anywhere! Click here to find more details about how to reach us.'
  			},
  			{
  				title: 'How can I make a special request to a restaurant? (E.g. Marriage proposal, birthday)',
  				description: 'Make sure to indicate any special request and time of booking in the box provided for this purpose and our support will take care for it for you'
  			},
  			{
  				title: 'Which countries do you have a presence in?',
  				description: 'We are everywhere in Nigeria, and quickly expanding to the whole of Africa!'
  			},
  			{
  				title: 'How early do I have to book?',
  				description: 'You can book at any time. We however recommend that you book early enough to guarantee the availability of the tables at the restaurants'
  			},
  			{
  				title: 'Do I need to have an account on TravCP to make a booking on the website?',
  				description: 'Yes, you need to have an account on TravCP to make a booking'
  			},
  			{
  				title: 'Why do I need to create an account?',
  				description: 'To enhance your booking experience on TravCP with a faster, seamless booking process by finding all your bookings easily in one place'
  			},
  			{
  				title: 'I forgot my password, what should I do?',
  				description: 'You can ask for a new password to be reset on the TravCP <router-link to="/signin">sign-in</router-link> page, under “Forgot Password?”'
  			},
  			{
  				title: 'How do I change my password?',
  				description: 'After signing into your account, click on the “Your Profile” in the navigation and click on “Change Password”. Alternatively, go to “Settings”. Go to “password” and click on “Edit”'
  			},
  			{
  				title: 'What is a star rating?',
  				description: 'Star ratings indicate the quality, service and facilities of the restaurant or destination'
  			},
  			{
  				title: 'How do I give a star rating?',
  				description: 'After you are done with an experience or a visit to a destination/restaurant, a mail will be sent to you to rate your experience or you would get a pop up message on your screen reminding you to give ratings. If none of this is done,kindly send an email or contact our support team'
  			},
  			{
  				title: 'What is the security rating for?',
  				description: 'We encourage that your leave a security rating for every experience, restaurant or destination visited based on how safe or secured your experience was. This is to help improve destination and experience quality assurance'
  			},
  			{
  				title: 'How do I give a security rating?',
  				description: 'After you are done with an experience or a visit to a destination/restaurant, a mail will be sent to you to give security ratings or you would get a pop up message up on your screen reminding you to give ratings. If none of this is done, kindly send an email or contact our support team'
  			}
  		]
  	}
  }
};
</script>
<style scoped>
.about-us-header {
  padding-top: 3%;
}
.about-us-header p {
  font-size: 3em;
  font-weight: bolder;
  color: #f81894;
  text-align: center;
}
.about-us-header hr {
  width: 200px;
}
.about-us-main {
  background: #fafafa;
  height: auto;
}
.about-us-details-view {
  padding-left: 10%;
  padding-right: 0;
  padding-top: 5%;
  padding-bottom: 5%;
}
.about-us-image {
  background: url("../../assets/ueno.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
}
.right-pad {
  padding-right: 5%;
}
.remove-pad {
  padding-left: 5%;
}
.text-width {
  width: 50%;
}
.about-us-image-text-view {
  padding-left: 5%;
}
.about-us-image-text-view h5 {
  color: #f81894;
  font-weight: bolder;
}
.about-us-image-text-view p {
  padding-top: 20px;
  font-weight: bold;
  text-align: justify;
}

/*body {
  background: #272728;
  
}*/

.faq {
  list-style: none;
  width: 94%;
  padding: 3%;
  max-width: 800px;
  margin: 0 auto;
  color: #FFF;
}
.faq li {
  margin-bottom: 1em;
  position: relative;
}

.faq-q {
  cursor: pointer;
  font-size: 22px;
  font-weight: 600;
  background: rgb(248, 24, 148);
  padding: .5em;
  border-radius: 5px;
  transition: .5s ease-in;
}
.faq-q:hover {
  background: #555;
}

.faq-a {
  display: none;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  margin-left: 5px;
}

</style>



