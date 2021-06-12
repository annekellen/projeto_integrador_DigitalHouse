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
import Default from '../pages/Default'
import Login from '../pages/Login';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/produtos" component={Produtos} />
        <Route path="/politicas" component={Politicas} />
        <Route path="/meusPedidos" component={MeusPedidos} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/admin" component={Admin} />
        <Route path="/cadastro" component={CadastroLogin} />
        <Route path="/login" component={Login} />
        <Route  exact path="/product/:id" component={ProdutosHome} />
        <Route exact path="/" component={Home} />
        <Route component={Default}/>
      </Switch>
    </Router>
  );
};

export default Routes;
