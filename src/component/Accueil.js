import React, { Component } from 'react';
import "./Accueil.css"
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Accueil extends Component  {
    render() {
        return (
            <center>
                <div >
                    <h3 className="ba">Destination assurée</h3>
                    <img src="https://image.shutterstock.com/image-vector/taxi-cab-logo-design-point-450w-595847300.jpg" width="270px" height="130px"/>
                </div>
                <div className="bb">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JCwKiDWcruS6Z_aRSfJc32QeUcEfJqrG4KTpwWuobJ3nZhoo0w" width="80%" height="330px"/>
                </div>
            </center>
        )
        
    }   
    
}
