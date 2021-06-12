import React from "react";
import validate from "../ValidateInfo";
import useForm from "../../CadastroLogin/UseForm";
import "../style.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Deixe um comentário</h1>
        <h3> Seu comentário é muito importante para nós!</h3>
        <div className="form-inputs">
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Nome"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="E-mail"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group">
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Mensagem"
            value={values.textarea}
            onChange={handleChange}
            />
            {errors.textarea && <p>{errors.textarea}</p>}
        </div>
        <div>
        <button className="form-input-btn" type="submit">
          Enviar
        </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
