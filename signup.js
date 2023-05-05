const signUpForm = document.querySelector('form');
const errorMessage = document.getElementById('error-message');

// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.set('view engine', 'ejs');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Travel2023!',
//   database: 'fadi'
// });

// connection.connect();

// app.get('/', (req, res) => {
//   res.render('signup');
// });

// app.post('/signup', (req, res) => {
//   const { username, password } = req.body;
//   connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (error, results, fields) => {
//     if (error) throw error;
//     res.send('Sign up successful!');
//   });
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });



var errorDiv = document.getElementById("error-message");

// add an event listener to the form submission
signUpForm.addEventListener('submit', function(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the values of the email, password, and confirm password fields
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password');
  document.getElementById("password").addEventListener("input", function() {
    var password = this.value;
    if (password.length < 8) {
      errorDiv.textContent = "Password must be at least 8 characters long.";
      return;
    } else if (!/\d/.test(password)) {
      errorDiv.textContent = "Password must contain at least one number.";
      return;
    } else if (!/[a-zA-Z]/.test(password)) {
      errorDiv.textContent = "Password must contain at least one letter.";
      return;
    } else if (!/[\W_]/.test(password)) {
      errorDiv.textContent = "Password must contain at least one special character.";
      return;
    } else {
      errorDiv.textContent = "";
    }
  
 
  });
  
 if (password !== confirmPassword.value) {
  errorMessage.innerHTML = "Passwords do not match.";
  confirmPassword.focus();
  return false;
}


 
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);
  console.log(email, password);

  if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password) || !/[\W_]/.test(password)) {
    errorDiv.textContent = "Password does not meet the requirements.";
    return;
  } else {
    window.location.href = 'index.html';
  }
  });
