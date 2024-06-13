import React from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";
function Menu() {
  let navigate = useNavigate();

  const openExternalUrl = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="logo">
      <div className="esquerdo">
        <p>Glassy</p>
      </div>
      <div className="main">
        <h1>SEJA BEM VINDO </h1>

        <div className="botoes">
          <button type="submit" onClick={() => navigate("/land")}>
            Home
          </button>
          <button type="submit" onClick={() => navigate("/products")}>
            Produtos
        </button>
          <button type="button" onClick={() => openExternalUrl("https://web.whatsapp.com/")}>
            Contato
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
