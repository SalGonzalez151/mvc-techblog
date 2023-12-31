// login handler for the login button
const loginFormHandler = async (event) => {

    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    }
};

// signup handler for the signup button
const signupFormHandler = async (event) => {

    event.preventDefault();
    const user = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (user && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ user, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            
            alert('Failed to sign up');
        }
    }
};
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);