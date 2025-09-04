/*=============== OPEN AND CLOSE ICON BARS MENUE ===============*/
let Open = document.querySelector('.bars');
let iconBarsMenue = document.querySelector('.bar');
let close = document.querySelector('.close');
let closeBar = document.querySelector('#close-bar');
let openBar = document.querySelector('#open-bar');
closeBar.addEventListener("click",CloseBar);
openBar.addEventListener("click",OpenBar);

// Open Bar
function OpenBar(e){
  e.preventDefault();
  Open.addEventListener('click',()=>{
    // iconBarsMenue.style.display ='block' ;
    iconBarsMenue.style.transform='translateX(5px)';
    iconBarsMenue.style.transition= 'all 1s ease'
    // open.style.display='none';
    Open.style.transform='translateX(-100px)';
  })
  
}

// Close Bar
function CloseBar(e){
  e.preventDefault();
  close.addEventListener('click',()=>{
    // iconBarsMenue.style.display='none';
    iconBarsMenue.style.transform='translateX(-100px)';
    iconBarsMenue.style.transition= 'all 1s ease'
    // open.style.display='block';
    Open.style.transform='translateX(0px)';
    Open.style.transition= 'all 2s ease'
  })  
}


// Open.addEventListener('click',()=>{
//   // iconBarsMenue.style.display ='block' ;
//   iconBarsMenue.style.transform='translateX(5px)';
//   iconBarsMenue.style.transition= 'all 1s ease'
//   // open.style.display='none';
//   Open.style.transform='translateX(-100px)';
// })

// close.addEventListener('click',()=>{
//   // iconBarsMenue.style.display='none';
//   iconBarsMenue.style.transform='translateX(-100px)';
//   iconBarsMenue.style.transition= 'all 1s ease'
//   // open.style.display='block';
//   Open.style.transform='translateX(0px)';
//   Open.style.transition= 'all 2s ease'
// })


