import React, { Component } from 'react';
import "./Contact.css"
//import { ResponsiveComponent } from "react-responsive-component";
import 'bootstrap/dist/css/bootstrap.min.css'

// const Desktop = Contact => <ResponsiveComponent {...Contact} minWidth={992} />;
// const Tablet = props => <ResponsiveComponent {...props} minWidth={768} maxWidth={991} />;
// const Mobile = Contact => <ResponsiveComponent {...Contact} maxWidth={767} />;
// const Default = props => <ResponsiveComponent {...props} minWidth={768} />;

export default class Contact extends Component  {
    render() {
        return (
            <center>
                <div className="bcc">
                    <h3>Aza misalasala miantso an'ity laharana manaraka ity raha mila fanazavana fanampiny ianao tompoko</h3>
                    <p>Télephone: 039 17 135 20</p>
                </div>
            </center>
            )
        
    }   
    
}