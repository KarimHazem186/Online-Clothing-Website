/*=============== AUTHENTICATION ===============*/
let userInfo = document.querySelector("#user_info"),
  userDom = document.querySelector("#user"),
  links = document.querySelector("#links");
  
let user_name = localStorage.getItem("username");

if (user_name){
    // console.log("OK");
    links.remove();
        
    userInfo.style.display="block";
    
    userDom.innerHTML ="Welcome, "  + user_name
} 



  


