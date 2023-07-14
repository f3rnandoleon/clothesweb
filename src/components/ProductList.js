// ProductList.js
import React from 'react';
import '../styles/ProductList.css';

function ProductList() {
  const productList = [
    { id: 1, name: 'Camiseta', price: 20, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    { id: 2, name: 'Pantalón', price: 40, image: 'https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png' },
    // ...
  ];

  return (
    <div>
      <h1>Lista de productos</h1>
      <div className="product-list">
        {productList.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

