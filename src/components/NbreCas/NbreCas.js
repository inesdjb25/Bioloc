import React, { Component } from 'react';
import "./NbreCas.css"
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';




class NbreCas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        fetch(`https://fr.openfoodfacts.org/categorie/${this.props.name}.json`)
            // fetch(`https://world.openfoodfacts.org/api/v0/product/${this.props.name}.json`)
            .then((response) => {
                return response.json()

            })

            .then((result) => {
                this.setState(result);

            })

    }
    componentDidUpdate(prevProps) {

        if (this.props.name !== prevProps.name) {
    
            fetch(`https://fr.openfoodfacts.org/categorie/${this.props.name}.json`)
                // fetch(`https://world.openfoodfacts.org/api/v0/product/${this.props.name}.json`)
                .then((response) => {


                    this.setState({
                        products: [
                            {
                                image_url: this.state.products.image_url

                            }
                    
                        ]
                    })

                    return response.json()

                })

                .then((result) => {
                    this.setState(result);
                })
        }
        
    }
    
    render() {
        
        return (

            
            this.state.products.map((empresa,index) => {
                
                if(empresa.image_url){
                    return (
    
                        <div className="col-xl-3 col-lg-6 mb-5">
                            <div id="card">
                                <div className="card-body">
                                <a href={"Admin/"+ this.props.name+"/"+index }><img id="fit-picture" src={empresa.image_url} alt="Grapefruit slice atop a pile of other slices" /></a>
                                    
                                    <h6 className="card-title mt-2">
                                        {empresa.product_name}
                                        
                                    </h6>
    
    
    
                                </div>
                            </div>
                        </div>
    
                    )
                }
                if(!empresa.image_url){

                    return (

                        <div class="NoImg">

                            {this.state.compteur = this.state.compteur + 1 }
                        </div>
    
                    )
                }
            })




        );
    }
}


export default NbreCas;
