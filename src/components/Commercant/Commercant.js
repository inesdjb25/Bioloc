import React, { Component } from 'react';
import "./Commercant.css";
import { Link } from "react-router-dom";


class Commercant extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
      }

    render() {
        console.log(this.state.value);

        return (


            <div className="card mb-5">

                <div className="card-body">

                <form onSubmit={this.handleSubmit}>
                    <center>
                     <p>Adresse mail </p>   
                    <input type="text" className="form-control" id="input1" name="firstname" value={this.state.value} onChange={this.handleChange} placeholder="Adresse mail" />
                    <p>Mot de passe </p> 
                    <input type="text" className="form-control" id="input1" name="lastname" onChange={this.handleChange} placeholder="Mot de passe" />
                   
                    <button type="submit" className="btn btn-success bouton2">Se connecter</button>
                    </center>

                </form>
                    
                    
                 </div>


            
            </div>
            

        );


    }
}

export default Commercant;