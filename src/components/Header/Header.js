import React, { Component } from 'react';
import "./Header.css";
import logo from 'C:/Users/djebr/Documents/ProjetPPE/src/bio.jpg';
import { Link } from "react-router-dom";

import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'



class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link to="/" className="text-white">
                        BioLoc
                </Link>
                
                    <span class="navbar-text">
                    <Link to="/Admin" className="Header-a"> Nos produits </Link>
                        <Link to="/Commercant" className="Header-a">Commerçant</Link>
                    </span>


                </nav>
                <div className="alert alert-warning" role="alert">
                    
                        <img src={logo} alt="covid" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
             Ensemble, soyons éco-responsable
             <img src={logo} alt="covid" style={{ width: "20px", height: "20px", marginLeft: "5px" }} />
                    
                </div>
                <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

                    <h2 className="display-4">Découvrez nos produits</h2>
                    <p className="lead">
                       Soyez informé sur les produits achetés 
                    </p>

                </div>
            </div>
        );
    }
}

export default Header;


