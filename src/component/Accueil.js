import React, { Component } from 'react';
import "./Accueil.css"
import { ResponsiveComponent } from "react-responsive-component";
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from "./vam.jpg"
import image2 from "./logo.jpg"

const Desktop = props => <ResponsiveComponent {...props} minWidth={992} />;
const Tablet = props => <ResponsiveComponent {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <ResponsiveComponent {...props} maxWidth={767} />;
const Default = props => <ResponsiveComponent {...props} minWidth={768} />;

export default class Accueil extends Component  {
    render() {
        return (
            <center>
                <div className=" responsive-font-size">
                    <h3 className="ba">Tolotra manampy anao amin'ny fitadiavana taxi farany tsotra sy azo antoka</h3>
                    <p>“Ny taxi no manatona anao any amin'ny toerana izay misy anao”</p>
                    <p>Manasa anao mba iditra ao amin'ny menu tompoko</p>
                    <img src={image2} width="270px" height="130px"/>
                </div>
                <div className="bb">
                    <img src={image1} width="80%" height="330px"/>
                </div>
            </center>
        )
        
    }   
    
}
