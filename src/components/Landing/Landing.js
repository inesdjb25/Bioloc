import React, { Component } from 'react';
import NbreCas from '../NbreCas/NbreCas';
import Searchbar from '../SearchBar/Searchbar';

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Chocolats"
        }; // Par défaut France
        this.onNameFormSubmitted = this.onNameFormSubmitted.bind(this);
    }

    onNameFormSubmitted(value) {
        this.setState({ 
            name: value
        });

    }
    
    render() {
        return (
            <div>
                <BouncyDiv>
                    <Searchbar onNameFormSubmitted={this.onNameFormSubmitted} />
                </BouncyDiv>

                <div className="container-fluid">
                    <div className="row mb-5">
                        <NbreCas name={this.state.name} />
                    </div>
                </div>

            </div>
        );
    }
}

export default Landing;
