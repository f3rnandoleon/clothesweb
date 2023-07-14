// PaymentMethods.js
import React from 'react';
import '../styles/PaymentMethods.css';

function PaymentMethods() {
  return (
    <div className="payment-methods">
      <h1 className="payment-title">Métodos de pago</h1>
      <p>Selecciona un método de pago:</p>
      <ul className="payment-list">
        <li className="payment-item">PayPal</li>
        <li className="payment-item">Tarjeta Visa</li>
        <li className="payment-item">QR</li>
      </ul>
    </div>
  );
}

export default PaymentMethods;
