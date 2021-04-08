import React, { Component } from 'react';
import "./Admin.css";

import Avis from 'D:/ECE/Bioloc/src/components/Avis/Avis.js';
import Astuce from 'D:/ECE/Bioloc/src/components/Astuce/Astuce.js';
import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

import a_b from 'D:/ECE/Bioloc/src/images/labels/ab_agriculture_biologique.png';
import made_in_france from 'D:/ECE/Bioloc/src/images/labels/made_in_france.png';
import fair_trade from 'D:/ECE/Bioloc/src/images/labels/fair_trade.png';


import emballage from 'D:/ECE/Bioloc/src/images/emballages/emballage.png';

// ECOSCORE
import eco_a from 'D:/ECE/Bioloc/src/images/ecoscores/e.png';
import eco_b from 'D:/ECE/Bioloc/src/images/ecoscores/b.png';
import eco_c from 'D:/ECE/Bioloc/src/images/ecoscores/e.png';
import eco_d from 'D:/ECE/Bioloc/src/images/ecoscores/d.png';
import eco_e from 'D:/ECE/Bioloc/src/images/ecoscores/e.png';


// IMAGE DES LABELS
let img_1 = "";
let img_2 = "";
let img_3 = "";

// IMAGE DE L ECO SCORE
let ecos = "";

const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;


function set_img(logo) {
  // Import result is the URL of your image
  return <img id="img-label" src={logo} />;
}
function set_ecoscore(logo) {
  // Import result is the URL of your image
  return <img id="img-ecoscore" src={logo} />;
}

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      category: this.props.match.params.categoryId,
      position: this.props.match.params.position,
      image: '',
      ecoscore: '',
      
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
                image_url: this.state.products.image_url,
                labels: this.state.products.labels,
                packaging: this.state.products.packaging,
                stores: this.state.products.stores,
                ecoscore: this.state.products.ecoscore_data.grade

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
    if (this.state.products.length > 0) {
      console.log(this.state.products[this.state.position])
      console.log("affichage grade")
      console.log(this.state.products[this.state.position].ecoscore_grade)
    }
    if (this.state.products.length > 0 && ((this.state.products[this.state.position].labels.includes("Agriculture Biologique")) || (this.state.products[this.state.position].labels.includes("ab-agriculture-biologique")))) {
      //console.log(this.state.products[this.state.position].labels.includes("Bio"))
      img_1 = a_b;


    }

    if (this.state.products.length > 0 && this.state.products[this.state.position].labels.includes("Made in France")) {
      //console.log(this.state.products[this.state.position].labels.includes("Bio"))
      img_2 = made_in_france;


    }

    if (this.state.products.length > 0 && this.state.products[this.state.position].labels.includes("Commerce équitable")) {

      img_3 = fair_trade;


    }


    // IMAGE DES ECO SCORE
    if (this.state.products.length > 0 && this.state.products[this.state.position].ecoscore_grade == "a") {
      console.log("ok")
      ecos = eco_a;
    }if (this.state.products.length > 0 && this.state.products[this.state.position].ecoscore_grade == "b") {
      console.log("ok")
      ecos = eco_b;
    }if (this.state.products.length > 0 && this.state.products[this.state.position].ecoscore_grade == "c") {
      console.log("ok")
      ecos = eco_c;
    }if (this.state.products.length > 0 && this.state.products[this.state.position].ecoscore_grade == "d") {
      console.log("ok")
      ecos = eco_d;
    }
    if (this.state.products.length > 0 && this.state.products[this.state.position].ecoscore_grade == "e") {
      console.log("ok")
      ecos = eco_e;
    }



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
                  <p id="lead">Label : {this.state.products.length > 0 && this.state.products[this.state.position].labels}</p>

                  {
                    set_img(img_1)}
                  {
                    set_img(img_2)}

                  {
                    set_img(img_3)}


                  <p id="lead">Ce produit est disponible dans les magasins suivant <br></br> : {this.state.products.length > 0 && this.state.products[this.state.position].stores} </p>
                  <p id="lead">Eco-Score <br></br> : {this.state.products.length > 0 && this.state.products[this.state.position].ecoscore_grade} </p>
                  {
                    set_ecoscore(ecos)}
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
                <img id="emballage" src={emballage} alt="emballage" />
              </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">Votre avis nous <span className="text-muted">intéresse.</span></h2>
                <p className="lead">
                < Avis category={this.state.category} position={this.state.position}/>
                  
                </p>
              </div>
              
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
              </div>
            </div>
            <hr className="featurette-divider" />
            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">Votre avis nous <span className="text-muted">intéresse.</span></h2>
                <p className="lead">
                < Astuce category={this.state.category} position={this.state.position}/>
                  
                </p>
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
