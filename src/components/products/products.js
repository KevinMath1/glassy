import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import CreateProductModal from "../Modals/CreateProductModal";
import UpdateProductModal from "../Modals/UpdateProductModal";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenUpdateModal = (product) => {
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const handleSaveProduct = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const savedProduct = await response.json();
        console.log("Produto criado", savedProduct);
        setProducts([...products, savedProduct]);
        setIsModalOpen(false);
      } else {
        console.error("Falha ao salvar o produto");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${updatedProduct.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct),
      });
      if (response.ok) {
        const updatedProductFromServer = await response.json();
        console.log("Produto atualizado", updatedProductFromServer);
        setProducts(products.map(product => 
          product.id === updatedProductFromServer.id ? updatedProductFromServer : product
        ));
        setIsUpdateModalOpen(false);
      } else {
        console.error("Falha ao atualizar o produto");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (response.ok) {
        const products = await response.json();
        console.log(products);
        setProducts(products);
      } else {
        console.error("Falha ao buscar produtos");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setProducts(products.filter((product) => product.id !== productId));
        console.log("Produto deletado com sucesso");
      } else {
        console.error("Falha ao deletar o produto");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleViewProduct = (product) => {
    navigate("/detalhe", { state: { product } });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-products">
      <header className="nav-bar">
        <h1>Glassy</h1>
        <p onClick={handleOpenModal}>Cadastrar</p>
      </header>
      <br></br>
      <h1>PRODUTOS</h1>
      <br></br>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            {product.imageUrl && (
              <img src={`http://localhost:3000${product.imageUrl}`} alt={product.name} />
            )}
            <h3>Produto: {product.name}</h3>
            <p>Marca: {product.brand}</p>
            <p>Valor: {product.price}</p>
            <p>Qtd: {product.quantity}</p>
            <div className="buttons">
              <div className="actions">
                <p className="delete" onClick={() => handleDeleteProduct(product.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                  </svg>
                </p>
                <p className="view" onClick={() => handleOpenUpdateModal(product)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"></path>
                  </svg>
                </p>
              </div>
              <p className="view" onClick={() => handleViewProduct(product)}>
                Visualizar
              </p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <CreateProductModal onClose={handleCloseModal} onSave={handleSaveProduct} />}
      {isUpdateModalOpen && (
        <UpdateProductModal
          productData={selectedProduct}
          onClose={handleCloseUpdateModal}
          onSave={handleUpdateProduct}
        />
      )}
    </div>
  );
}

export default Products;
