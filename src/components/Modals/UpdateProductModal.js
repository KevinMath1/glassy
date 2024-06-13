import React, { useState, useEffect } from 'react';
import './UpdateProductModal.css';

function UpdateProductModal({ onClose, onSave, productData }) {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    if (productData) {
      setProduct(productData);
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { ...product };
    onSave(updatedProduct);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" value={product.name} onChange={handleChange} required />

          <label htmlFor="brand">Marca:</label>
          <textarea id="brand" name="brand" value={product.brand} onChange={handleChange} required></textarea>

          <label htmlFor="price">Preço:</label>
          <input type="number" id="price" name="price" value={product.price} onChange={handleChange} required />

          <label htmlFor="quantity">Quantidade:</label>
          <input type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleChange} required />

          <button type="submit">Atualizar produto</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProductModal;
