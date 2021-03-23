import React from 'react';
import validate from '../ValidateInfo';
import useForm from '../UseForm';
import '../style.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Cadastre-se em nossa loja agora mesmo! 
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Nome de usuário</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Fulano da Silva'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='fulanodasilva@overlook.com'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Senha</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Crie sua senha'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirme a sua Senha</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirme sua senha'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Cadastrar
        </button>
        <span className='form-input-login'>
          Já possui cadastro? Faça o Login aqui!
        </span>
      </form>
    </div>
  );
};

export default FormSignup;