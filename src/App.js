import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing/Landing.js';
import Admin from './components/Admin/Admin.js';
import Commercant from './components/Commercant/Commercant.js';

import Form from './components/Form/Form.js';
import React, { Component } from 'react';

import "./components/Header/Header.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component {

  constructor(props)
    {
        super(props);
        this.state = {
          products: []
      };
    }
    
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/Admin/:categoryId/:position" component={Admin} />
              
            <Route path="/Commercant" component={Commercant} />
            <Route path="/">
            
            <Landing/>
            </Route>
            

          </Switch>
          
          <Footer />
        </div>

      </Router>
     
    );
  }
}

export default App;
