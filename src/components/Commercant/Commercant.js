import React, { Component } from 'react';
import "./Commercant.css";
import { Link } from "react-router-dom";


class Commercant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
       
          <form onSubmit={this.handleSubmit}>
          
          
        
            <div className="form-group text-center">
            <input type="text" className="form-control form-control-sm" name="mail" placeholder="Votre adresse email" style={{ padding: '3px 8px 4px -6px', borderWidth: '2px', margin: '0px', marginTop: '10px', marginBottom: '9px', borderRadius: '7px', boxShadow: '0px 0px var(--indigo)' }} autoComplete="on" required minLength={2} value={this.state.value} onChange={this.handleChange}/>
           <input type="password" className="form-control form-control-sm" name="motdepasse" placeholder="Mot de passe" style={{ padding: '3px 8px 4px -6px', borderWidth: '2px', margin: '0px', marginTop: '10px', marginBottom: '9px', borderRadius: '7px', boxShadow: '0px 0px var(--indigo)' }} autoComplete="on" required minLength={2} />
            <button className="btn btn-primary text-right" type="submit">Se connecter </button></div>
          </form>
          <p><a href="/Inscription">Pas encore de compte ? Venez vous inscrire</a> </p>
        
      </div>
    );
  }
}
export default Commercant;