import React from "react";
import validate from "../ValidateInfo";
import useForm from "../../CadastroLogin/UseForm";
import "../style.css";
import BotaoDestaque from "../../../Componentes-Gerais/Botoes/BotaoDestaque";

const FormSignup = () => {
  

  return (
    <div className="form-content-right">
      <form  className="form" >
        <h1>Deixe um comentário</h1>
        <h3> Seu comentário é muito importante para nós!</h3>
        <div className="form-inputs">
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Nome"
          />
        </div>
        <div className="form-inputs">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="E-mail"
            
          />
        
        </div>
        <div className="form-group">
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Mensagem"
           
            />
          
        </div>
        <div>
        <BotaoDestaque classe="botao-continuar .border-radius-20" texto="Enviar" />
        
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
