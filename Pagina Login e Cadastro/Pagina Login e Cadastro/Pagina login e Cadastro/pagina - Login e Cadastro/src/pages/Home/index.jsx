import { useState } from "react";
import './style.css'


  

   export default function Home() {
    const [move, setMove] = useState(false);

    function moveOverlay() {
      setMove(!move);
    }
  
   

  return (
     <main>
  <div className={`login-container ${move ? "move" : ""}`}  id="login-container">
    <div className="form-container">
      <form className="form form-login">
        <h2 className="form-title">Entrar com</h2>
        <div className="form-social">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
        </div>
        <p className="form-text">ou utilize sua conta</p>
        <div className="form-input-container">
          <input type="email" className="form-input" placeholder="email" />
          <input type="password" className="form-input" placeholder="senha" />
        </div>
        <a href="#" className="form-link">Esqueceu a Senha?</a>
        <button type="button" className="form-button">Entrar</button>
      </form>

      <form className="form form-register">
        <h2 className="form-title">Criar Conta</h2>
        <div className="form-social">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
        </div>
        <p className="form-text">ou cadastre seu email aqui</p>
        <div className="form-input-container">
          <input type="text" className="form-input" placeholder="nome" />
          <input type="email" className="form-input" placeholder="email" />
          <input type="password" className="form-input" placeholder="senha" />
        </div>
        <button type="button" className="form-button">Cadastrar</button>
      </form>
    </div>

    <div className="overlay-container">
      <div className="overlay">
        <h2 className="form-title form-title-light">Crie Sua Conta</h2>
        <p className="form-text">
          Não possui conta, ainda? Clique no botão abaixo e venha conhecer o StockFlow
        </p>
        <button className="form-button form-button-light" id="open-login" onClick={moveOverlay}>Cadastrar</button>
      </div>

      <div className="overlay">
        <h2 className="form-title form-title-light">Bem Vindo de Volta</h2>
        <p className="form-text">
          Já possui conta? Se, sim execute o login clicando no botão abaixo
        </p>
        <button className="form-button form-button-light" id="open-register" onClick={moveOverlay}>Entrar</button>
      </div>
    </div>
  </div>
</main>

  )
}



