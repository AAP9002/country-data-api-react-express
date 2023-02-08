import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {country: []}

  componentDidMount() {
    fetch('/api/getallcountrydata')
      .then(res => res.json())
      .then(country => this.setState({ country }));
  }

  render() {
    return (
      <div className="App">
        <h1>Countries</h1>
        {this.state.country.map(country_individual =>
        <>
          <a  href={country_individual.name.common} key={country_individual.id}>{country_individual.flag}{country_individual.name.common}
          </a><br/>
          </>
        )}
      </div>
    );
  }
}

export default App;

