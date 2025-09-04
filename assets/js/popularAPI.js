// https://fakestoreapi.com/products

// Setup vars
let products=[];

const selectors= {
 products : document.querySelector(".products")
};

const setupListeners = () => {
    document.addEventListener('DOMContentLoaded',initStore);
};


// event handlers
const initStore = ()=> {
    // fetch("https://fakestoreapi.com/products")
    //     .then((response)=> response.json())
    //     .then((json)=> console.log(json));
    loadProducts("https://fakestoreapi.com/products").then
    (renderProducts);
};

// render functions

const renderProducts = () => {
    selectors.products.innerHTML = products.innerHTML = products.map((product)=> {
    const {id,title,image,price}=product;
    // console.log(title);
    return `
        <div class="slide product">
            <a href="shop.html" class="category-item swiper-slide">
            <img src="${image}" alt="" class="category-img img-slider" style="height: 200px;width: 400px;">
            <h3 class="category-title">${title}</h3>
            </a>
        </div>
    `
    });
};

// api functions

const loadProducts = async (apiURL) => {
    try {
        const response = await fetch(apiURL);
        if(!response.ok) {
            throw new Error(`http error! status=${response.status}`)
        }
        products =await response.json();
        // console.log(products);
    } catch(error) {
        console.error("fetch error:",error);
    }
}

setupListeners();
