import React, { Component } from "react";
import "./Graph.css";
import ReactApexChart from "react-apexcharts";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';



class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };



    }


    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
            .then((response) => {
                return response.json()
            })

            .then((result) => {
                this.setState(result);
                // console.log(result);

                
            })
    }

    componentDidUpdate(prevProps) {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.name !== prevProps.name) { // Vérifie si le pays a été modifié (valeur par défaut France)
            let NumPaysSaisi = 59; // ID France
            for (let i = 0; i < this.state.Countries.length; i++) { // Boucle for qui permet d'assosier le nom du pays à sa position dans le json de l'api
                if (this.props.name === this.state.Countries[i].Country) {
                    //alert(`position : ${i}, pays : ${this.state.Countries[i].Country}`);
                    NumPaysSaisi = i;
                }

            }
            fetch('https://api.covid19api.com/summary')
                .then((response) => {
                    return response.json()
                })

                .then((result) => {
                    this.setState(result);
                    // console.log(result);

                    
                })
        }
    }


    render() {
        return (
           
            <div className="card">
                <div className="card-body">
                    <div>
                    </div>
                    <h5 className="mb-5">Épidémie en {this.props.name}</h5>
                    
                    <div class="text-muted mt-4">
                        <center><small>Données issues du gouvernement</small></center>
                    </div>
                </div>

            </div>
           
        );
    }
}

export default Graph;

