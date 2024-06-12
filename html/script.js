document.addEventListener('DOMContentLoaded', function () {
    var stripe = Stripe('pk_test_51POO55HPStxLJRgyktt28zcfjvgwOgqdyjzS5jotMMu3anYS0lniRCgJax162ULr0UrqkyrE1VoQMG0tIqH2QAGy00O0vrljyJ');  // Reemplaza con tu Public Key de Stripe

    // Agregar funcionalidad al botón de pago
    var checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', function () {
        var cartContent = document.getElementsByClassName('cart-box');
        var items = [];
        for (var i = 0; i < cartContent.length; i++) {
            var item = cartContent[i];
            var titulo = item.getElementsByClassName('cart-product-title')[0].innerText;
            var cantidad = item.getElementsByClassName('cart-quantity')[0].value;
            var precio = parseFloat(item.getElementsByClassName('cart-price')[0].innerText.replace('$', '').replace('.', ''));
            items.push({
                title: titulo,
                quantity: cantidad,
                price: precio
            });
        }
        fetch('http://localhost:4242/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: items })
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.error) {
                console.error('Error:', data.error);
                alert('Hubo un error al crear la sesión de pago.');
            } else {
                return stripe.redirectToCheckout({ sessionId: data.sessionId });
            }
        })
        .then(function (result) {
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
    });

});