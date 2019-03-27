import React, { useState } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Accueil from './component/Accueil';
import Menu from './component/Menu';
import Contact from './component/Contact';
//import AddMenu from './component/AddMenu';

const App = ()=> {

  const usersData = [

  ]



  const [users, setUsers] = useState(usersData)

  const [count, setCount] = useState(0)

 

  const addUser = user => {
  

    setUsers([ ...users, user ])
    console.log(users);
    

  }
    

  
    return (
      <Router>
        
          <div class="nav navbar-nav bg-dark a">
            <div className="row">
              <h2 className="col-md-2"><Link to="/Accueil">Accueil</Link></h2>
              <h2 className="col-md-2"><Link to="/Menu">Menu</Link></h2>
              <h2 className="col-md-8"><Link to="/Contact">Contact</Link></h2>
              </div>
          </div>

          <Route path="/" exact component={Accueil} />
          <Route path="/Accueil" component={Accueil} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Contact" component={Contact} />

          {/* <Accueil />
          <Menu />
          <AddMenu /> */}
       
      </Router>
    );
  
}

export default App;
