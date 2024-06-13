import React from "react";
import "./land.css";
import { Form, Link } from "react-router-dom";
import pesquisa from "../../img/seach.svg";
import pessoa from "../../img/user.svg";
import shopping from "../../img/bag.svg";
import heart from "../../img/heart.svg";
import logo from "../../img/Glassy.jpg";
import oculos from "../../img/oculos-desgaste.png";
import oculos2 from "../../img/oculosdegrau.png";
import oculos3 from "../../img/oculossol.png";
function Land(props) {
  const openExternalUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <header>
      <body>
        <nav className="secao">
          <div className="header-logo">
            <h2>Glassy</h2>

            <div className="header-search">
              <div>
                <input className="search" placeholder="Busque por modelos ou coleção  ? "></input>
                <img className="icon-search" src={pesquisa} alt="icone de pesquisa" />
              </div>
              <div className="button-enter">
                <img className="icon " src={pessoa} alt="Ícone do usuário" />

                <Link className="link" to="/login">
                  Entrar
                </Link>
              </div>
            </div>
          </div>
          <div className="header-icons">
            <img className="icon" src={shopping} alt="icone de carrinho" />
            <img className="icon" src={heart} alt="icone de coração" />
          </div>
        </nav>
        <div className="container">
          <p>ÓCULOS DE SOL</p>
          <p>ÓCULOS DE GRAU</p>
          <p>ACESSÓRIOS</p>
          <p>OFERTAS</p>
        </div>
        <div className="log">
          <img className="logos" src={logo} alt="imagem" />
        </div>

        <div className="texto">
          <h1>NOVOS MODELOS</h1>
          <p>lançamento da semana</p>
        </div>

        <div className="secao2">
          <div className="cards">
            <div className="card-img">
              <img className="oculos1" src={oculos} alt="imagen grau" />
            </div>
            <div className="contaier-title">
              <h2>ÓCULOS DE GRAU FEMININO - ALUS PRETO</h2>
            </div>
            <br></br> <br></br>
            <div className="text">
              <p>R$ 200,00</p>
              <p>4x de R$ 50,00 s/juros</p>
            </div>
          </div>

          <div className="cards">
            <div className="card-img">
              <img className="oculos2" src={oculos2} alt="imagen grau" />
            </div>
            <div className="contaier-title1">
              <h2>ÓCULOS DE GRAU MASCULINO - BLANZE PRETO</h2>
            </div>
            <br></br> <br></br>
            <div className="text">
              <p>R$ 180,00</p>
              <p>4x de R$ 45,00 s/juros</p>
            </div>
          </div>

          <div className="cards">
            <div className="card-img2">
              <img className="oculos3" src={oculos3} alt="imagen grau" />
            </div>
            <div className="contaier-title2">
              <h2>ÓCULOS DE SOL FEMININO - VAL PRETO</h2>
            </div>
            <br></br> <br></br>
            <div className="text">
              <p>R$ 300,00</p>
              <p>4x de R$ 75,00 s/juros</p>
            </div>
          </div>
        </div>

        <div className="secao3">
          <div className="cards2">
            <h1>@GLASSYOFICIAL</h1>
            <div className="boto1">
              <button
                className="ints"
                type="button2"
                onClick={() => openExternalUrl("https://www.instagram.com/")}
              >
                acessar o instagram
              </button>
            </div>
          </div>
        </div>

        <div className="container3">
          <div className="container2-title">
            <h1>Meus Dados</h1>
          
            <Link className="link">Minha Conta</Link>
            <Link className="link">Meus Pedidos</Link>
            <Link className="link">Favoritos</Link>
          </div>

          <div className="container2-title">
            <h1>Políticas</h1>
           
            <Link className="link">Privacidade</Link>
            <Link className="link">Termos de Uso</Link>
            <Link className="link">Trocas e Devolução</Link>
            <Link className="link">Entrega e Frete</Link>
            <Link className="link">Pagamento</Link>
          </div>

    

          <div className="container2-title">
            <h1>Fale Conosco</h1>
          
            <p>WhatsApp 11 9 6666-2020</p>
            <p>Telefone 11 5555-1111</p>
            <p>sac@glassy.com.br</p>
            <p>Horários de Atendimento: de segunda à quinta-feira, das 10h às 18h.</p>
            <p>Prazo para respostas: 48h úteis.</p>
          </div>
        </div>
      </body>
    </header>
  );
}

export default Land;
