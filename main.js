// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyB74k80PNRN5mTqxhYoOELWD1DRQT3hIwg",
   authDomain: "contactform-5a414.firebaseapp.com",
   databaseURL: "https://contactform-5a414.firebaseio.com",
   projectId: "contactform-5a414",
   storageBucket: "contactform-5a414.appspot.com",
   messagingSenderId: "855113774734",
   appId: "1:855113774734:web:3a4492e1126e91be953bdf"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
/*initializing collections for messages in no-sql*/
var messagesRef = firebase.database().ref('messages');

/*Listen for our form submit action */
document.getElementById('contactForm').addEventListener('submit', submitForm);
/* a function to submit the form*/
function submitForm(e){
  e.preventDefault();
 /*getting values from field using id*/
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  console.log(name);
}

/*Function to get form values*/
function getInputVal(id){
  return document.getElementById(id).value;
}

/*function to save the message*/
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message

  });
}
