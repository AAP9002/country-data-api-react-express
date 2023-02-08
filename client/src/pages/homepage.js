import React, { Component } from 'react';
import '../App.css';

class Homepage extends Component {
  state = {country: []}

  componentDidMount() {
    fetch('/api/getallcountrydata')
      .then(res => res.json())
      .then(country => this.setState({ country }));
  }

  render() {
    return (
      <div>
        <h1 className="title">All</h1>
        <div className={"container"}>
          {this.state.country.map((country_individual,index) =>
            <a href={'#/country/'+index} key={country_individual.id} className="country">
              <img src={country_individual.flags.svg} className="country_image" alt={country_individual.name.common} loading="lazy"/>
              <br/>
              <p className="country_name">{country_individual.flag}{country_individual.name.common}
              </p>
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default Homepage;
