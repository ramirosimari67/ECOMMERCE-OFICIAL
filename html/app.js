document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cart = document.getElementById('cart');
    const cartClose = document.getElementById('cart-close');

    // Mostrar el carrito al hacer clic en el icono
    cartIcon.addEventListener('click', () => {
        cart.classList.add('show');
    });

    // Ocultar el carrito al hacer clic en la cruz
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show');
    });
});


