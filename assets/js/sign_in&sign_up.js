// Sign Up
let username =document.querySelector("#username"),
    email =document.querySelector("#email"),
    password =document.querySelector("#password"),
    confirm_password =document.querySelector("#confirmPassword"),
    register_btn =document.querySelector("#register");

register_btn.addEventListener("click",register);


function register(e){
    e.preventDefault();

    if(username.value==="" || email.value==="" || password.value=="" || confirm_password.value=="") {
        alert("Please Enter Data");
    }

    else if(password.value!==confirm_password.value) {
        alert("Password and Confirm Password are incorrect")

    } else {
        localStorage.setItem("username",username.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);
        localStorage.setItem("confirmPassword",confirm_password.value);

        setTimeout(()=>{
            window.location = 'index.html'
        },1500)
    }
}

/***************************************************/

// Sign In
let log_email = document.querySelector("#log_email"),
  log_password = document.querySelector("#log_password"),
  login_btn = document.querySelector("#login"),
  link = document.querySelector("#links");

let getUser = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

login_btn.addEventListener('click',login);

function login(e){
    e.preventDefault();
    if (log_email.value ==="" || log_password.value===""){
        alert("please Enter Data");
    }
    else {
        if (getUser && getUser.trim()===log_email.value.trim()&&
         getPassword&&getPassword===log_password.value) {
            setTimeout(()=>{
                window.location = 'index.html';
            },1500);
        } else {
            alert("Email or Password is wrong !!");
        }
        
    }
}
