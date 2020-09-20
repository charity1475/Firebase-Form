/*Listen for our form submit action */
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
  e.preventDefault();
  console.log(123);
}
