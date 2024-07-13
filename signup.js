document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Store new user credentials in localStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    
    // Redirect to login page after successful sign up
    alert('Sign up successful! Please log in.');
    window.location.href = 'login.html';
});
