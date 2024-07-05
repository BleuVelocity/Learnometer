function Enter() {
    var passwordInput = document.getElementById("passwordInputBox").value;
    var userPassword = "BrawlStars4Life";
    if (passwordInput === userPassword) {
        goAdminPage();
    } else {
        alert("Incorrect password!");
    }
}

function goAdminPage() {
    window.location.href = "adminPage.html";
}

function goHome() {
    window.location.href = "index.html";
}
