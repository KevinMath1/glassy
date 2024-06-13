import React, { useState } from 'react';
import './CreateProductModal.css';

function Modal({ onClose, onSave }) {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    quantity: ''
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('brand', product.brand);
    formData.append('price', product.price);
    formData.append('quantity', product.quantity);
    if (image) {
      formData.append('image', image);
    }
    onSave(formData);
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

          <label htmlFor="image">Imagem:</label>
          <input type="file" id="image" name="image" onChange={handleImageChange} />

          <button type="submit">Criar produto</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
