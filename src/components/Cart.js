// Cart.js
import React from 'react';
import '../styles/Cart.css';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Camiseta', price: 20, quantity: 2, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 2, name: 'Pantalón', price: 40, quantity: 1, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    // ...
  ];

  return (
    <div>
      <h1>Carrito de compras</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <button>Eliminar</button>
          </div>
        ))}
      </div>
      {/* Mostrar total y opciones de pago */}
    </div>
  );
}

export default Cart;

