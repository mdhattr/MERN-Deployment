import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "nes.css/css/nes.min.css";
import {Router, Link} from '@reach/router';
import Main from "./views/Main";
import Create from "./views/Create";
import Show from "./views/Show";
import Edit from "./views/Edit";

function App() {


  return (
    <div className="App">
      <div className="container">
        
        
        <Router>
          <Main path="/"/>
          <Create path="/create" />
          <Show path="/pet/:id" />
          <Edit path="/edit/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
