import React, { Component } from 'react';
import Header from './componants/header' 
import Footer from './componants/footer' 
import Homepage from './pages/homepage.js'
import CountryData from './pages/country_details'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends Component {
  render(){return(
    <React.Fragment>
      <Header/>
      <Router>
        <Routes>
          <Route path="/country/:id" element={<CountryData/>}/>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
      </Router> 
      <Footer/>
    </React.Fragment>
    )
  }
}

export default App;

