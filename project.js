const cart = document.querySelectorAll('.add-to-cart');

product = [{
    name: 'Corel Graphics',
    tag: 'corelgraphics',
    price: '10.99',
    InCart: 0,
}];

for(let i = 0; i < cart.length; i++){
    cart[i].addEventListener('click', ()=>{
        cartNumbers(product[i]);
        totalCost(product[i]);
    });
}

function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
   if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = 1 + productNumbers;
   }
   else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
   }
   setItem(product);
}
function setItem(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].InCart += 1;
    }
    else{
        product.InCart = 1;
        cartItems = {[product.tag]: product};
    }
    product.InCart = 1;
    cartItems = {
        [product.tag]: product
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost", product.price);
    }
}

//scroll to top start
const scrollToTop = document.querySelector("#scroll-to-top");
scrollToTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

const dropdown = document.querySelector('.categories');
const navLinks = document.querySelector('.nav-links');
const subMenuBtn = document.querySelectorAll('#links');
const subMenu = document.querySelector('.sub-menu1');


dropdown.addEventListener('mouseover', ()=>{
    if(navLinks.style.display == 'none'){
        navLinks.style.display = 'block';
    }
    else{
        navLinks.style.display = 'none';
    }
})

for(let i = 0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener('mouseover', ()=>{
        if(subMenu.style.display == 'none'){
            subMenu.style.display = 'block';
        }
        else{
            subMenu.style.display = 'none';
        }
    })
}



/* ------------------------- MOBILE VIEW -----------------------------------*/

const hamburgerMenu = document.querySelector('.mobile-toggler');
const showLinks = document.querySelector('.links');
 function myFunction(){
    showOverLay();
    const showMenu = document.querySelector('#show-all');
    if(showMenu.style.display == 'none'){
        showMenu.style.display = 'block';
    }
    else{
        showMenu.style.display = 'none';
    }
 } 
 hamburgerMenu.addEventListener('click', myFunction);

 function showOverLay(){
    const overlay = document.querySelector('#overlay');
    if(overlay.style.display == 'none'){
        overlay.style.display = 'block';
    }
    else{
        overlay.style.display = 'none';
    }

 }


 const displayMenu = document.querySelector('#display-submenu');
 const showAllLinks = document.querySelector('.sub-menu1');
 displayMenu.addEventListener('click', ()=>{
    if(showAllLinks.style.display == 'none'){
        showAllLinks.style.display = 'block';
    }
    else{
        showAllLinks.style.display = 'none';
    }

 })

const inputBoxBtn = document.querySelector('#search');
searchBox = document.getElementsByName('#search-box');
console.log(searchBox)
 function showSearchBox(){
    if(searchBox.style.display == 'none'){
        searchBox.style.display = 'block';
    }
    else{
        searchBox.style.display = 'none';
    }
 }
 inputBoxBtn.addEventListener('click',showSearchBox);
 
onLoadCartNumber();



