import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Create_Categories from './pages/Create_Catagories';
import Generate_Link from './pages/Generate_Link';
import Links from './pages/Links';
import Customer from './pages/Customer';
import Form from './components/Form';
function App(){
  return(
    
  <Router>
    
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/categories" component={Categories} />
      <Route path="/categories/create_categories" exact component={Create_Categories} />
      <Route path="/generate_link" component={Generate_Link} />
      <Route path="/links" component={Links} />
      <Route path="/customer" component={Customer} />
      
    </Switch>
  </Router>
  );
}
export default App;
