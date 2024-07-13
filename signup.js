document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    
    alert('Sign up successful! Please log in.');
    window.location.href = 'login.html';
});
