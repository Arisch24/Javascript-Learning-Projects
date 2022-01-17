const username = document.getElementById("username");
const password = document.getElementById("password");
const phoneNum = document.getElementById("phoneNum");

username.addEventListener("input", () => {
    const pattern = /[a-zA-Z]$/;
    let usernameTest = pattern.test(username.value);
    usernameTest ? username.style.border = "2px solid #52fb6f": username.style.border = "2px solid red";
});

password.addEventListener("input", () => {
    const pattern = /[a-zA-Z0-9]{8,}/;
    let passwordTest = pattern.test(password.value);
    passwordTest ? password.style.border = "2px solid #52fb6f": password.style.border = "2px solid red";
});

phoneNum.addEventListener("input", () => {
    const pattern = /[0-9]{8,11}/;
    let phoneNumTest = pattern.test(phoneNum.value);
    phoneNumTest ? phoneNum.style.border = "2px solid #52fb6f": phoneNum.style.border = "2px solid red";
})