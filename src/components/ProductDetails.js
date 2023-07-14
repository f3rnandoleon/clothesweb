// ProductDetails.js
import React from 'react';
import '../styles/ProductDetails.css';

function ProductDetails({ match }) {
  const productId = match.params.id;

  const product = { id: 1, name: 'Camiseta', price: 20, description: '...', image: 'shirt.jpg' };

  return (
    <div>
      <h1>{product.name}</h1>
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <p>Precio: ${product.price}</p>
          <p>{product.description}</p>
          <button>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;



