import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/products/products";
import Land from "./components/home/land/land";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import Detalhe from "./components/detalhe/detalhe";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/land" element={<Land />} />
        <Route path="/products" element={<Products />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/detalhe" element={<Detalhe/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
