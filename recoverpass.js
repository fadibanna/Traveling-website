const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = emailInput.value;

	// Check if email is valid
	if (!isValidEmail(email)) {
		message.textContent = 'Please enter a valid email address.';
		message.style.color = 'red';
		return;
	}

	// Send password recovery email
	sendPasswordRecoveryEmail(email);
});

function isValidEmail(email) {
	// Regex to check if email is valid
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

function sendPasswordRecoveryEmail(email) {
	// Code to send password recovery email would go here
	// For demo purposes, we'll just display a success message
	message.textContent = 'A password recovery email has been sent to your email address.';
	message.style.color = 'green';
}
