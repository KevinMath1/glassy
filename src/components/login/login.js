import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de importar isso
import "./login.css";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Definindo navigate corretamente

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/menu"); // Navega para a página /menu
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="App">
      <div className="Esquerdo">
        <p>Glassy</p>
      </div>
      <div className="Main">
        <h1>ACESSE A SUA CONTA</h1>

        <form className="Login" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
        </form>

        <div className="Botoes">
          <button type="submit" onClick={handleLogin}>
            LOGIN
          </button>
          <button type="button" onClick={() => navigate("/")}>
            VOLTAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
