/*Listen for our form submit action */
document.getElementById('contactForm').addEventListener('submit', submitForm);
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
