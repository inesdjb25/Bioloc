import React, { Component } from 'react';

import { Link } from "react-router-dom";


class Commercant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avis: '',
      nom: '',
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  componentDidMount() {
    fetch(`http://localhost:3001/posts`)
      .then((response) => {
        return response.json()

      })

      .then((result) => {
        this.setState({ data: result });

      })

  }
  componentDidUpdate(prevProps) {
    if (this.state.avis !== prevProps.avis) {
      fetch(`http://localhost:3001/posts`)
        .then((response) => {
          return response.json()

        })

        .then((result) => {
          this.setState({ data: result });

        })
      }

  }

  handleSubmit = (event) => {
    fetch(`http://localhost:3001/posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({
        nom: this.state.nom,
        avis: this.state.avis,
        categorie: this.props.category,
        position: this.props.position
      })
    }).then(function (response) {
      // console.log(response);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>


          <div className="form-group text-center">
            <input type="text" name="avis" value={this.state.avis} onChange={this.handleChange} placeholder="Avis" />
            <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} placeholder="Nom" />
            <button type="submit" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">
              Laisser un avis
          </button>
          </div>
        </form>
        {


          this.state.data.map(empresa => {
            if ((empresa.categorie == this.props.category) && (empresa.position == this.props.position) ) {

              return (
                
                 <div> {empresa.nom}
                  {empresa.avis}
                  {empresa.categorie}</div>
               
              )
            }

          })
        }

      </div>
    );
  }
}
export default Commercant;