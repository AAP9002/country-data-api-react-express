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
        <h1 class="title">All</h1>
        <div class="container">
          {this.state.country.map((country_individual,index) =>
            <a href={'country/'+index} key={country_individual.id} class="country">
              <img src={country_individual.flags.svg} class="country_image" alt={country_individual.name.common} loading="lazy"/>
              <br/>
              <p class="country_name">{country_individual.flag}{country_individual.name.common}
              </p>
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default Homepage;
