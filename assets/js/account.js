//  Update Profile
let changeProfile = document.getElementById("change-user");
let updateProfile_btn = document.getElementById("save-btn");
updateProfile_btn.addEventListener('click',updateProfile);
function updateProfile(e){
    e.preventDefault();
    setTimeout(()=>{
        localStorage.setItem("username", changeProfile.value);
        window.location="user.js";
        window.location = 'index.html'
    },1500)

}

/////////////////////////////////////////////////////////////////

// Change Password
let getEmail = localStorage.getItem("email");
// console.log(getEmail);
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let Confirm_Password= document.getElementById("Confirm_Password");
let changePassword_btn= document.getElementById("Save");
changePassword_btn.addEventListener('click',changePassword);
function changePassword(e){
    e.preventDefault();
    if(getEmail.trim()===Email.value.trim()) {
        setTimeout(()=>{
            localStorage.setItem("password", Password.value);
            localStorage.setItem("confirmPassword", Confirm_Password.value);
            window.location="user.js";
            window.location = 'index.html'
        },1500)
    } else {
        alert("Email is not Found")
      }

}


//////////////////////////////////////////////////////////////////

// Logout

logout_btn = document.querySelector("#logout");

logout_btn.addEventListener('click',function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location ="login-register.html";
    },1500)

});
