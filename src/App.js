import React, { Component } from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Accueil from './component/Accueil';
import Menu from './component/Menu';
import Contact from './component/Contact';

//import { Nav, Navbar, NavItem } from "react-bootstrap";
// import Responsive from 'react-responsive';
 
// const Desktop = props => <Responsive {...props} minWidth={992} />;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
// const Mobile = props => <Responsive {...props} maxWidth={767} />;
// const Default = props => <Responsive {...props} minWidth={768} />;

class App extends Component {
    
    render()  {
    return (
      <Router>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="#"></a> 
          {/* <nav class="nav navbar-responsive navbar-nav bg-dark a"> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
            {/* <div className="row"> */}
                      {/* <h2 className="col-md-2">*/}
                      <Link to="/Accueil"><a className="nav-link" href="#">Accueil<span className="sr-only">(current)</span> </a> </Link></li>
              {/* <li className="nav-item">
                      {/* <h2 className="col-md-2"></h2> */}
                      {/* <Link to="/Menu"><a className="nav-link" href="#">Menu</a></Link></li> */} 
              <li className="nav-item">
                      {/* <h2 className="col-md-8"></h2> */}
                      <Link to="/Contact"><a className="nav-link" href="#">Contact</a></Link></li>
              
              </ul>
         </div>
          {/* </nav> */}
</nav>
          <Route path="/" exact component={Accueil} />
          <Route path="/Accueil" component={Accueil} />
          {/* <Route path="/Menu" component={Menu} /> */}
          <Route path="/Contact" component={Contact} />
       
      </Router>
    );
  
}
}
  

export default App;
