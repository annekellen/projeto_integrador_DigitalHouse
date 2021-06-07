import React from 'react';
import './styles.css';

const Login = () => {
  return (
    <div className="login" id="form">
      <form className="container-formLogin" method="post">
        <h1>Login</h1>
        <input type="email" placeholder="email" id="email" />
        <input type="password" placeholder="Senha" id="senha" />
        <button type="submit" id="button" className="button-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
