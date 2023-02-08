import React, { Component } from 'react';
import Header from './componants/header' 
import Footer from './componants/footer' 
import Homepage from './pages/homepage.js'
import CountryData from './pages/country_details'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

class App extends Component {
  render(){return(
    <HashRouter>
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/country/:id" element={<CountryData/>}/>
        </Routes>
        <Footer/>
      </div>
    </HashRouter>
    )
  }
}

export default App;

