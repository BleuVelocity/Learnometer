// chat.js

function sendMessage() {
    var message = document.getElementById('messageInput').value.trim();
    if (message !== "") {
        addMessageToStorage(message);
        document.getElementById('messageInput').value = "";
        displayMessages();
    }
}

function addMessageToStorage(message) {
    var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

function displayMessages() {
    var messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    var messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = "";
    messages.forEach(function(message) {
        var div = document.createElement('div');
        div.textContent = message;
        messagesContainer.appendChild(div);
    });
}

displayMessages();

function goHome() {
    window.location.href = "index.html";
}
