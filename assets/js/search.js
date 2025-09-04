// // Define Product
// let products = [ 
//   {
//       id:Math.random(),
//       title:"T-Shirt1",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Man/man_3_2.jpg',
//       imageUrl_2: 'assets/images/ClothingPictures/Man/man_3_1.jpg'
//   },

//   {
//       id:Math.random(),
//       title:"Shirt2",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Man/man_2_1.jpg',
//       imageUrl_2: 'assets/images/ClothingPictures/Man/man_2_2.jpg'
//   },

//   {
//       id:Math.random(),
//       title:"manShirt3",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Kid/kid_2_1.avif',
//       imageUrl_2: 'assets/images/ClothingPictures/Kid/kid_2_2.avif'
//   },

//   {
//       id:Math.random(),
//       title:"kidShirt4",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Kid/kid_3_1.jpg',
//       imageUrl_2: 'assets/images/ClothingPictures/Kid/kid_3_2.jpg'
//   },

//   {
//       id:Math.random(),
//       title:"kidT-Shirt5",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Kid/kid_1_1.avif',
//       imageUrl_2: 'assets/images/ClothingPictures/Kid/kid_2_1.avif'
//   },

//   {
//       id:Math.random(),
//       title:"manT-Shirt6",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Man/man_3_2.jpg',
//       imageUrl_2: 'assets/images/ClothingPictures/Man/man_3_1.jpg'
//   },

//   {
//       id:Math.random(),
//       title:"T-Shirt7",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Man/man_3_2.jpg',
//       imageUrl_2: 'assets/images/ClothingPictures/Man/man_3_1.jpg'
//   },

//   {
//       id:Math.random(),
//       title:"Shirt8",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Man/man_2_1.jpg',
//       imageUrl_2: 'assets/images/ClothingPictures/Man/man_2_2.jpg'
//   },

//   {
//       id:Math.random(),
//       title:"manShirt9",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Kid/kid_2_1.avif',
//       imageUrl_2: 'assets/images/ClothingPictures/Kid/kid_2_2.avif'
//   },

//   {
//       id:Math.random(),
//       title:"kidShirt10",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Kid/kid_3_1.jpg',
//       imageUrl_2: 'assets/images/ClothingPictures/Kid/kid_3_2.jpg'
//   },

//   {
//       id:Math.random(),
//       title:"kidT-Shirt11",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Kid/kid_1_1.avif',
//       imageUrl_2: 'assets/images/ClothingPictures/Kid/kid_2_1.avif'
//   },

//   {
//       id:Math.random(),
//       title:"manT-Shirt12",
//       desc:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',                            
//       imageUrl_1: 'assets/images/ClothingPictures/Man/man_3_2.jpg',
//       imageUrl_2: 'assets/images/ClothingPictures/Man/man_3_1.jpg'
//   },

//   ];

// localStorage.setItem('products',JSON.stringify(products));
////////////////////////////
let productsDom = document.querySelector(".products-container");
// let products = JSON.parse(localStorage.getItem('products')); 
// let products = productsDB;

// Function DrawProductsUI
(drawProductsUI = function(products=[]){
    let ProductsUI = products.map((item)=>{
        // console.log("eee",item);
        return `
            <div class="product-item swiper-slide">
              <div class="product-banner">
                <a href="details.html" class="product-images">
                  <img src="${item.imageUrl_1}" alt="" class="product-img default">

                  <img src="${item.imageUrl_2}" alt="" class="product-img hover">
                </a>
                <div class="product-actions">

                  <a href="#" class="action-btn" aria-label="Quick View">
                    <i class="fi fi-rs-eye"></i>
                  </a>

                  <a href="#" class="action-btn" aria-label="Add To Favouraite">
                    <i class="fi fi-rs-heart"></i>
                  </a>

                  <a href="#" class="action-btn" aria-label="Compare">
                    <i class="fi fi-rs-shuffle"></i>
                  </a>

                  
                </div>

                <!-- <div class="product-badge light-pink">Hot</div> -->
              </div>

              <div class="product-content">
                <span class="product-category">CLothing</span>
                <a href="details.html">
                  <h3 class="product-title" onclick='saveItemData(${item.id})'>${item.title}</h3>
                </a>
                <div class="product-rating">
                  <i class="fi fi-rs-star"></i>
                  <i class="fi fi-rs-star"></i>
                  <i class="fi fi-rs-star"></i>
                  <i class="fi fi-rs-star"></i>
                  <i class="fi fi-rs-star"></i>
                </div>
                <div class="product-price flex">

                  <span class="new-price">450L.E</span>
                  <!-- <span class="old-price">700L.E</span> -->
                </div>
               
                  <a href="#" class="cart-btn">
                    <!-- <i class="fi fi-rs-shoping-bag-add"></i> -->
                    <!-- <i class="fi fi-ts-cart-minus lg" class="shopping-carts"></i> -->
                    <img src="assets/img/shopping-card.png" alt="" class="shopping-carts" onclick="checkedUser()">
                  </a>

              </div>
            </div>
        ` ;
    });
    productsDom.innerHTML = ProductsUI.join("");
})(JSON.parse(localStorage.getItem('products')) || products);

// Checked User
function checkedUser(){
  if(localStorage.getItem('username')){
    console.log("Ok");
  }else {
    window.location="login-register.html"
  }
}
    
// function saveItemData(id){
//   localStorage.setItem('productId',id);
// }


// Search Function
let input = document.getElementById('search')

input.addEventListener('keyup', function(e){
 //   if(e.keyCode ===13){ // 13 =======> code button (Enter)
        // console.log("Enter");
    search(e.target.value,JSON.parse(localStorage.getItem('products')));
//}
if(e.target.value.trim()===""){
    drawProductsUI(JSON.parse(localStorage.getItem('products')));
}

});
function search(title,myArray){
    let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 );
    
    // console.log(arr);
    drawProductsUI(arr);
}
// search("T-Shirt1", JSON.parse(localStorage.getItem("products")));
