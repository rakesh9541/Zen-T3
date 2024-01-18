document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (password === "SmartServTest@123")
    {
        window.location.href = 'dashboard.html';
    } 
    else
    {
        alert('The password is incorrect. Please try again.');
    }
});

document.querySelector('.forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "mailto:support@smartserv.io?subject=Password Reset Request";
});
