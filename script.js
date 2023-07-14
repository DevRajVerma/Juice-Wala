document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous messages
        clearMessages();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (name === '' || email === '' || message === '') {
            displayErrorMessage('Please fill in all fields');
            return;
        }

        // Simulate sending form data to the server
        // Replace the following code with your actual form submission logic
        setTimeout(function () {
            displaySuccessMessage('Form submitted successfully!');
            contactForm.reset();
        }, 1000);
    });

    function displaySuccessMessage(message) {
        const successMessage = document.createElement('p');
        successMessage.className = 'success-message';
        successMessage.textContent = message;
        contactForm.appendChild(successMessage);
    }

    function displayErrorMessage(message) {
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        contactForm.appendChild(errorMessage);
    }

    function clearMessages() {
        const messages = contactForm.getElementsByClassName('success-message');
        while (messages.length > 0) {
            messages[0].remove();
        }

        const errors = contactForm.getElementsByClassName('error-message');
        while (errors.length > 0) {
            errors[0].remove();
        }
    }
});
