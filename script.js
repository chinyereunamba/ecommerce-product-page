const decrease = document.getElementById("decrement");
const increase = document.getElementById("increment");
const number = document.getElementById("number");
const addToCart = document.querySelector(".add button");
const noInCart = document.getElementById("badge");
const cartContainer = document.querySelector(".cart-content .content");
const productCount = document.getElementById("product-count");
const price = document.getElementById("product-price");

const total = document.getElementById("total");

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

function cart() {
    if (number.textContent != 0) {
        productCount.textContent = number.textContent;
        total.textContent = `$${Number(number.textContent) * Number(price.textContent)}`
        cartContainer.classList.add("active");
    } else {
        cartContainer.classList.remove("active");
    }
}
