import React, { Component } from 'react';
import "./Admin.css";
import logo from './ece.png';
import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';


const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            category: this.props.match.params.categoryId,
            position: this.props.match.params.position,
            image: ''
        };

    }
    componentDidMount() {



        fetch(`https://fr.openfoodfacts.org/categorie/${this.state.category}.json`)
            // fetch(`https://world.openfoodfacts.org/api/v0/product/${this.props.name}.json`)
            .then((response) => {
                return response.json()

            })

            .then((result) => {
                this.setState(result);
                console.log(result);

            })

    }
    componentDidUpdate(prevProps) {

        if (this.props.name !== prevProps.name) {
            fetch(`https://fr.openfoodfacts.org/categorie/${this.state.category}.json`)
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
                    console.log(result);
                })
        }
    }




    render() {
        console.log(this.state.products)
        return (
            <BouncyDiv>
                
                <div className="card mb-5">
                    {this.state.products.length > 0 && this.state.products[this.state.position].generic_name_fr}
                    <div className="card-body">
                        <img id="fit-picture" src={this.state.products.length > 0 && this.state.products[this.state.position].image_url} alt="Grapefruit slice atop a pile of other slices" />
                        <p id="para">Caractéristiques</p>

                    </div>
                </div>
            </BouncyDiv>
        );


    }
}

export default Admin;
