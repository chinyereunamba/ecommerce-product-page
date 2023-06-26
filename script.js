const body = document.querySelector("body");
const main = document.querySelector('main')
const decrease = document.getElementById("decrement");
const increase = document.getElementById("increment");
const number = document.getElementById("number");
const addToCart = document.querySelector(".add button");
const noInCart = document.getElementById("badge");
const cartContainerContent = document.querySelector(".cart-content .content");
const checkoutBtn = document.querySelector('.cart-content .content button')
const productCount = document.getElementById("product-count");
const price = document.getElementById("product-price");
const cartEmptyP = document.querySelector(".content .empty");
const total = document.getElementById("total");
const cartContainer = document.querySelector(".cart-content");
const cartEl = document.querySelector(".user-info .cart");
const burger = document.querySelector(".burger");
const closeEl = document.querySelector(".nav-links span");
const navMobile = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll('.nav-links ul li')

if (number.textContent == 0) {
    noInCart.style = `display:none`;
}

decrease.addEventListener("click", () => {
    if (Number(number.textContent > 0)) {
        number.textContent = Number(number.textContent) - 1;
        noInCart.textContent = number.textContent;
        if (number.textContent == 0 || number.textContent == "") {
            noInCart.style = `display:none`;
        }
    }
    cart();
});

increase.addEventListener("click", () => {
    number.textContent = Number(number.textContent) + 1;
    noInCart.textContent = number.textContent;
    noInCart.style = `display:flex`;
    cart();
});

addToCart.addEventListener("click", () => {
    if (number.textContent == 0) {
        number.textContent = Number(number.textContent) + 1;
        noInCart.textContent = number.textContent;
        noInCart.style = `display:flex`;
    }
    cart();
});

cartEl.addEventListener("click", () => {
    cartContainer.classList.toggle("active");
    
});
/* checkoutBtn.addEventListener('click', ()=>{
  cartContainer.classList.remove('active')
})
*/
main.addEventListener('click', ()=> {
  if (cartContainer.classList.contains('active')){
    cartContainer.classList.remove('active')
  }
})

burger.addEventListener("click", () => {
    navMobile.classList.add("active");
});

closeEl.addEventListener("click", () => {
    navMobile.classList.remove("active");
});

navLinks.forEach(el =>{ el.addEventListener('click', ()=>{
  navMobile.classList.remove('active')
})})

function cart() {
    if (number.textContent != 0) {
        productCount.textContent = number.textContent;
        total.textContent = `$${
            Number(number.textContent) * Number(price.textContent)
        }`;
        cartContainerContent.classList.add("active");
        cartEmptyP.style = `display:none`;
    } else {
        cartContainerContent.classList.remove("active");
        cartEmptyP.style = `display:block`;
    }
}
