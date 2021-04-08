import React, { Component } from 'react';

import { Link } from "react-router-dom";


class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
           /* var mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost/ppe', function(err) {
  if (err) { throw err; }*/
    
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
                <h2 className="display-4">Incription client</h2>
                    <p className="lead">
                       Incrivez-vous et découvrez les avantages que vous gagnerez
                    </p>
                    <form onSubmit={this.handleSubmit}>
          <input type="text" className="form-control form-control-sm" name="nom" placeholder="Nom du commerce"  autoComplete="on" required minLength={2} value={this.state.value} onChange={this.handleChange} />
          <input type="text" className="form-control form-control-sm" name="adresse" placeholder="adresse" style={{ padding: '3px 8px 4px -6px', borderWidth: '2px', margin: '0px', marginTop: '10px', marginBottom: '9px', borderRadius: '7px', boxShadow: '0px 0px var(--indigo)' }} autoComplete="on" required minLength={2} />
          <input type="text" className="form-control form-control-sm" name="codepost" placeholder="Code Postale" style={{ padding: '3px 8px 4px -6px', borderWidth: '2px', margin: '0px', marginTop: '10px', marginBottom: '9px', borderRadius: '7px', boxShadow: '0px 0px var(--indigo)' }} autoComplete="on" required minLength={2} />
          <input type="password" className="form-control form-control-sm" name="Mail" placeholder="Votre Mail" style={{ padding: '3px 8px 4px -6px', borderWidth: '2px', margin: '0px', marginTop: '10px', marginBottom: '9px', borderRadius: '7px', boxShadow: '0px 0px var(--indigo)' }} autoComplete="on" required minLength={2} />
          <input type="text" className="form-control form-control-sm" name="Photo" placeholder="Photo" style={{ padding: '3px 8px 4px -6px', borderWidth: '2px', margin: '0px', marginTop: '10px', marginBottom: '9px', borderRadius: '7px', boxShadow: '0px 0px var(--indigo)' }} autoComplete="on" required minLength={2} />
            <h6 className="text-center" style={{ width: '399px', height: '28.2px', marginTop: '51px' }}>Votre commerce</h6>
            <input type="text" className="form-control form-control-sm" name="Tuteur" placeholder="Tuteur Legale" style={{ padding: '3px 8px 4px -6px', borderWidth: '2px', margin: '0px', marginTop: '10px', marginBottom: '9px', borderRadius: '7px', boxShadow: '0px 0px var(--indigo)' }} autoComplete="on" required minLength={2} />
            <div className="form-group"><textarea className="form-control form-control-sm" name="Descripition de votre commerce" placeholder="Descripition de votre commerce" rows={14} defaultValue={""} /></div>
            <small>Ajouter l'icône de votre commerce</small><input type="file" className="form-control-file" name="logo" placeholder="Prénom" style={{ padding: '3px 8px 4px -6px', borderWidth: '2px', margin: '0px', marginTop: '10px', marginBottom: '9px', borderRadius: '7px', boxShadow: '0px 0px var(--indigo)' }} autoComplete="on" required minLength={2} /><em>Italic</em><strong>Bold</strong>
            <blockquote className="blockquote">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous</footer>
            </blockquote>
            <p>Paragraph</p>
            <div className="form-group text-center">
            <button className="btn btn-primary text-right" type="submit">Envoyer </button></div>
          </form>
                
            </div>

        );


    }
}

export default Inscription;