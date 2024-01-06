const users=[];

function displayError(element,message) {
    element.innerText=message;
    element.style.color="#ff0000";
}
function isValidUsername(username) {
    return username.length>=5;
}
function isValidPassword(password) {
    return password.length>=8;
}

document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault();

    const usernameInput=document.getElementById("username");
    const passwordInput=document.getElementById("password");
    const errorMessage=document.getElementById("login-error-message");

    const mockUsername="Manish";
    const mockPassword="98765432";

    if(usernameInput.value==mockUsername && passwordInput.value==mockPassword) {
        alert("Login Successfull!");
    }
    else {
        displayError(errorMessage,"Invalid Username or Password");
    }
});

document.getElementById("signupForm").addEventListener("submit",function(e) {
    e.preventDefault();

    const newUsernameInput=document.getElementById("newUsername");
    const newPasswordInput=document.getElementById("newPassword");
    const errorMessage=document.getElementById("signup-error-message");

    if(!isValidUsername(newUsernameInput.value)) {
        displayError(errorMessage,"Username must be atleast 5 characters long");
        return;
    }
    if(!isValidPassword(newPasswordInput.value)) {
        displayError(errorMessage,"Password must be atleast 8 characters long");
        return;
    }
    const usernameTaken = users.some(u => u.username === newUsernameInput.value);

    if (usernameTaken) {
        displayError(errorMessage, "Username is already taken. Please choose a different one.");
    } 
    else {
        users.push({ username: newUsernameInput.value, password: newPasswordInput.value });
        alert("Signup successful!");
    }
});