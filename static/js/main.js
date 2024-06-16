// Menu Toggle //
const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
};

// Referencia a los elementos del carrito
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let cartClose = document.querySelector('#cart-close');

// Abrir el carrito al hacer clic en el icono del carrito
cartIcon.onclick = () => {
    cart.classList.add('active');
};

// Cerrar el carrito al hacer clic en el icono de cerrar
cartClose.onclick = () => {
    cart.classList.remove('active');
};

// Asegurarse de que el DOM esté cargado antes de ejecutar el resto del código
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// Función principal para inicializar los eventos
function ready() {
    // Remover items del carrito
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for (var button of removeCartButtons) {
        button.addEventListener('click', removeCartItem);
    }

    // Cambios en la cantidad
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var input of quantityInputs) {
        input.addEventListener('change', quantityChanged);
    }

    // Añadir al carrito
    var addCartButtons = document.getElementsByClassName('add-cart');
    for (var button of addCartButtons) {
        button.addEventListener('click', addCartClicked);
    }

    // Funcionalidad del botón de compra
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}

// Remover items del carrito
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Cambios en la cantidad
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Añadir al carrito
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.closest('.card');
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('product-price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].getElementsByTagName('img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

// Añadir producto al carrito
function addProductToCart(title, price, productImg) {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartItems = cartContent.getElementsByClassName('cart-box');
    for (var cartItem of cartItems) {
        var cartItemTitle = cartItem.getElementsByClassName('cart-product-title')[0].innerText;
        if (cartItemTitle === title) {
            // Si el producto ya está en el carrito, incrementa la cantidad
            var quantityInput = cartItem.getElementsByClassName('cart-quantity')[0];
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotal();
            return;
        }
    }

    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartContent.append(cartShopBox);

    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

// Actualizar el total
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var cartBox of cartBoxes) {
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total += price * quantity;
    }

    // Redondear el total a dos decimales
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}

// Funcionalidad del botón de compra
function buyButtonClicked() {
    alert('Gracias por tu compra');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}
