import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import MeusPedidos from '../pages/MeusPedidos'


const Routes = () => {
    return (
        <Router>
            <Switch>
               <Route path="/produtos" component={Produtos}/>  
               <Route path="/meusPedidos" component={MeusPedidos}/>
               <Route path="/" component={Home}/> 
                    
            </Switch>
        </Router> 
    )
}

export default Routes