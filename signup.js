const signUpForm = document.querySelector('form');
const errorMessage = document.getElementById('error-message');

// add an event listener to the form submission
signUpForm.addEventListener('submit', function(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the values of the email, password, and confirm password fields
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  // validate that the password and confirm password fields match
 if (password.value !== confirmPassword.value) {
  errorMessage.innerHTML = "Passwords do not match.";
  confirmPassword.focus();
  return false;
}


  // save the user's email and password to local storage
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  // redirect the user to the index.html page
  window.location.href = 'index.html';
});
