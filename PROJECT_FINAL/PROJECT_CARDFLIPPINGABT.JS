import React from 'react';
import './CardFlippingAbt.css';
const ProductCard = ({ title, price, className }) => {
  
  return (
    <div className={`col-md-4 col-sm-6 col-xs-12 ${className}`}>
      <div className="card">
        <div className={`cover ${className}`}>
          <h1>{title}</h1>
          <span className="price">${price}</span>
          <div className="card-back">
            
            {className == 'item-a' && <a href="#">e-Hospital project with the vision to improve the delivery of healthcare services</a>}
            {className == 'item-b' && <a href="#">application is the cloud based Hospital Management Information System for digitization of internal</a>}
            {className == 'item-c' && <a href="#">system is a one-stop solution which helps in connecting patients, hospitals and docto</a>}
          </div>
        </div>
      </div>
    </div>
  );
};




export default ProductCard;
