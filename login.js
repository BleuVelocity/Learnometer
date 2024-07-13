document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored user credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate login credentials
    if (username === storedUsername && password === storedPassword) {
        // Store login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to home page after successful login
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});
