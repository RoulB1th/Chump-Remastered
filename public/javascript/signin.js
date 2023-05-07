let form = document.getElementById("sign-in");

//-------------Username Error
let user_el = document.createElement("p");
user_el.className = "username-error-p";
let user_error_div = document.getElementById("username-error");
user_error_div.appendChild(user_el);
//-------------Password Error
let password_el = document.createElement("p");
password_el.className = "password-error-p";
let password_error_div = document.getElementById("password-error");
password_error_div.appendChild(password_el);
//-------------Invalid Credentials
let invalid_el = document.createElement('p');
invalid_el.className = "invalid-error-p";
let invalid_error_div = document.getElementById("invalid-error");
invalid_error_div.appendChild(invalid_el);

form.addEventListener("submit",(e)=>{
    let loadingscreen = document.getElementById("loading-screen");
    let userInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    e.preventDefault();
    const config = {
        headers: {
            'Content-Type': 'application/json', //x-www-form-urlencoded
            'Authorization': 'AUTHCODE',
    }};
    axios.post('/signin',{
        username: userInput,
        password: passwordInput,
    },config).then((e)=>{
        if(Array.isArray(e.data)){
            let username_error = e.data[0];
            let password_error = e.data[1];
            user_el.innerText = username_error;
            password_el.innerText = password_error;
        }else if(e.data == "Invalid Credentials"){
            loadingscreen.style.display = "block";
            user_el.innerText = null;
            password_el.innerText = null;
            let invalid_error = e.data;
            invalid_el.innerText = invalid_error;
            loadingscreen.style.display = "none";
        }else if(e.data == "Success"){
            loadingscreen.style.display = "block";
            window.location.pathname = "/";
        }
    })
});