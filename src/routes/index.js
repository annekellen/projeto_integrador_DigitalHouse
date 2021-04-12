import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProdutosHome from '../pages/ProdutosHome';
import MeusPedidos from '../pages/MeusPedidos';
import Sobre from '../pages/Sobre';
import Produtos from '../pages/Produtos';
import Politicas from '../pages/Politicas';
import Admin from '../pages/Admin';
import CadastroLogin from '../pages/CadastroLogin'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/produtos_home" component={ProdutosHome} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/politicas" component={Politicas} />
        <Route path="/meusPedidos" component={MeusPedidos} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/admin" component={Admin} />
        <Route path="/cadastro" component={CadastroLogin} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
