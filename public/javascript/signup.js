let form = document.getElementById("sign-up");

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
//-------------Email Error
let email_el = document.createElement("p");
email_el.className = "email-error-p";
let email_error_div = document.getElementById("email-error");
email_error_div.appendChild(email_el);
//-------------Invalid Credentials
let invalid_el = document.createElement('p');
invalid_el.className = "invalid-error-p";
let invalid_error_div = document.getElementById("invalid-error");
invalid_error_div.appendChild(invalid_el);

form.addEventListener("submit",(e)=>{
    let loadingscreen = document.getElementById("loading-screen");
    let userInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    let emailInput = document.getElementById("email").value;
    e.preventDefault();
    const config = {
        headers: {
            'Content-Type': 'application/json', //x-www-form-urlencoded
            'Authorization': 'AUTHCODE',
    }};
    axios.post('/signup',{
        username: userInput,
        password: passwordInput,
        email: emailInput
    },config).then((e)=>{
        loadingscreen.style.display = "block";
        if(Array.isArray(e.data))
        {
            let errors = e.data;
            let user_error = errors[0];
            let password_error = errors[1];
            let email_error = errors[2];


            if(user_error != null)
            {
                invalid_el.innerText = null;
                user_el.innerText = user_error;
                loadingscreen.style.display = "none";
            }
            if(password_error != null)
            {
                invalid_el.innerText = null;
                password_el.innerText = password_error;
                loadingscreen.style.display = "none";
            }
            if(email_error != null)
            {
                invalid_el.innerText = null;
                email_el.innerText = email_error;
                loadingscreen.style.display = "none";
            }
         }else if(e.data=="Success"){
            invalid_el.innerText = null;
            window.location.pathname = "/";
         }else if(e.data=="User Exists")
         {
            password_el.innerText = null;
            email_el.innerText = null;
            user_el.innerText = null;
            invalid_el.innerText = e.data;
            loadingscreen.style.display = "none";
         }

    })
});