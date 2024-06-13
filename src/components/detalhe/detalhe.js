import React from "react";
import { useLocation } from "react-router-dom";
import "./detalhe.css";
import Img from "../img/oculosdesol.png";

function Detalhe() {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div className="logo">
      <div className="esquerdo">
        <p>Glassy</p>
      </div>

      <div className="container">
        <div className="move">
          <img
            className="img"
            src={product ? `http://localhost:3000${product.imageUrl}` : Img}
            alt="oculos"
          />
        </div>
      </div>

      <div className="container2">
        <div className="preco">
          <p>Produto: {product ? `${product.name}` : "Óculos de Sol Masculino"}</p>
          <p>Marca: {product ? `${product.brand}` : "Mart"}</p>
          <br></br>
          <p>R$ {product ? ` ${product.price}` : "320,00"}</p>
          <p>{product ? `4x de R$ ${(product.price / 4).toFixed(2)}` : "4x de R$ 80,00"}</p>
        </div>

        <div className="buttons">
          <button className="button">Comprar</button>
          <button className="button" onClick={() => window.history.back()}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detalhe;
