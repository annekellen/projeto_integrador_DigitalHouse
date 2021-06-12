import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3333/login', { "username":email, "password":senha });
      const token = response.data.token
      window.localStorage.setItem('overlook@token-user', token)

      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login" id="form">
      <form
        className="container-formLogin"
        method="post"
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="bene@dito.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <input
            type="password"
            name="senha"
            id="senha"
            required
            placeholder="Senha123"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        <button type="submit" id="button" className="button-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
