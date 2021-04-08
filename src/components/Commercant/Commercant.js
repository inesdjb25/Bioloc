import React, { Component } from 'react';
import "./Commercant.css";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';


class Commercant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      mail: '',
      motdepasse: '',
      redirect: false,
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch(`http://localhost:3001/posts/connexion`)
      .then((response) => {
        return response.json()

      })

      .then((result) => {
        this.setState({ data: result });

      })

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    {
      this.state.data.map(empresa => {
        if((empresa.mail == this.state.mail)){

          if((empresa.motdepasse == this.state.motdepasse)){
            return(
              this.setState({
                redirect: true
              })
            )
          }
         
        }
      })
    }
  
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/Astuce" />
    }
    return (
      <div>
       
          <form onSubmit={this.handleSubmit}>
          
          
        
            <div className="form-group text-center">

            <input type="text" className="form-control form-control-sm" name="mail" placeholder="Votre adresse email"  autoComplete="on" required minLength={2} value={this.state.mail} onChange={this.handleChange}/>
           <input type="password" className="form-control form-control-sm" name="motdepasse" placeholder="Mot de passe"  autoComplete="on" required minLength={2} value={this.state.motdepasse} onChange={this.handleChange}/>
            <button className="btn btn-primary text-right" type="submit">Se connecter </button></div>
          </form>
          <p><a href="/Inscription">Pas encore de compte ? Venez vous inscrire</a> </p>
        
      </div>
    );
  }
}
export default Commercant;