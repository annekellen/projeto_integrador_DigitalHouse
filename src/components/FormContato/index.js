import React from 'react';
import './style.css'

const FormContato = () => {
  return (
    <div className="form-container">
      <h3>deixe um comentario</h3>
      <p>seu comentário é muito importante para nós</p>

      <label htmlFor="name"></label>

      <input type="text" name="name" id="name" placeholder="Nome" />

      <label htmlFor="email"></label>

      <input type="email" name="email" id="email" placeholder="email" />

      <label htmlFor="comentario"></label>
      <textarea name="comentario" id="comentario" cols="30" rows="10" placeholder="Escreva seu comentário aqui"></textarea>
    </div>
  );
};

export default FormContato;
