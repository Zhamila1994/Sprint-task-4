function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fullName = document.getElementById("fullName").value;
    let country = document.getElementById("country").value;
    let birthdate = document.getElementById("birthdate").value;

    let user = {
        userEmail: email,
        userPassword: password,
        userFullName: fullName,
        userCountry: country,
        userBirthdate: birthdate
    }

    let existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    existingUsers.push(user);

    localStorage.setItem('users', JSON.stringify(existingUsers));

    console.log('User registered:', user);
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let loggedInUser = users.find(user => user.userEmail === email && user.userPassword === password);

    if (loggedInUser) {
        console.log('Login successful:', loggedInUser);
        window.location.href = 'profile.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}