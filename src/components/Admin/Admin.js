import React, { Component } from 'react';
import "./Admin.css";

import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

import a_b from 'D:/ECE/Bioloc/src/images/labels/ab_agriculture_biologique.png';

const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;


function set_img(logo) {
  // Import result is the URL of your image
  return <img id="img-label" src={logo} alt="Logo" />;
}


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



        fetch(`https://fr.openfoodfacts.org/label/bio/categorie/${this.state.category}.json`)
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
            fetch(`https://fr.openfoodfacts.org/label/bio/categorie/${this.state.category}.json`)
                // fetch(`https://world.openfoodfacts.org/api/v0/product/${this.props.name}.json`)
                .then((response) => {


                    this.setState({
                        products: [
                            {
                                image_url: this.state.products.image_url ,
                                labels: this.state.products.labels,
                                packaging : this.state.products.packaging,
                                stores : this.state.products.stores

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
        if (this.state.products.length > 0 && this.state.products[this.state.position].labels.includes("Agriculture Biologique") ) {
          console.log(this.state.products[this.state.position].labels.includes("Bio"))
         

        }
         
       // ON TEST SI LES DIFFERENTS LABELS POUR POUVOIR LES AFFICHER
        
       

        return (
            <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="author" content />
        <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico" />
        <title>Carousel Template for Bootstrap</title>
        <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/carousel/" />
        {/* Bootstrap core CSS */}
        <link href="../../dist/css/bootstrap.min.css" rel="stylesheet" />
        
        <link href="carousel.css" rel="stylesheet" />
        
        <main role="main">
          
            
         
          <div className="container marketing">
           
            
           
            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                {this.state.products.length > 0 && this.state.products[this.state.position].product_name}
                 <span className="text-muted"> | Catégorie {this.state.category}</span></h2>
                <p className="lead">
                
                <p id="lead">Caractéristiques <br></br>
                {this.state.products.length > 0 && this.state.products[this.state.position].generic_name_fr}

                </p>
                        <p id="lead">Label : {this.state.products.length > 0 && this.state.products[this.state.position].labels }</p>
                        
                        {set_img(a_b)};
                       
                        <p id="lead">Ce produit est disponible dans les magasins suivant <br></br> : {this.state.products.length > 0 && this.state.products[this.state.position].stores} </p>
                </p>
              </div>
              <div className="col-md-5">
              <BouncyDiv>
                
                <div className="card mb-5">
                    <div className="card-body">
                        <img id="fit-picture" src={this.state.products.length > 0 && this.state.products[this.state.position].image_url} alt="Grapefruit slice atop a pile of other slices" />

                    </div>
                </div>
            </BouncyDiv>
              </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Emballage <span className="text-muted">du produit</span></h2>
                <p className="lead">
                <p id="lead">{this.state.products.length > 0 && this.state.products[this.state.position].packaging} </p>
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
              </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
              </div>
            </div>
            <hr className="featurette-divider" />
            {/* /END THE FEATURETTES */}
          </div>{/* /.container */}
          
        </main>
        
      </div>

      
    );


    
}
}

export default Admin;
