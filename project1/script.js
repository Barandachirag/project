// Function to validate the registration form
function validateRegistrationForm() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }

    // You can add more complex validation logic here if needed

    return true;
}

// Function to validate the login form
function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }

    // You can add more complex validation logic here if needed

    return true;
}