import React from 'react';
import './App.css';
import axios from 'axios';
import Planet from "./Planet";
import Starship from "./Starship";

class App extends React.Component {

  state = {planets: [], starships: []};

  componentDidMount() {
    this.fetchPlanetData();
    this.fetchStarshipData();
  }

  fetchPlanetData = async () => {
    const {data} = await axios.get('https://swapi.co/api/planets/');
    this.setState({planets: data.results});
  };

  fetchStarshipData = async () => {
    const {data} = await axios.get('https://swapi.co/api/starships/');
    this.setState({starships: data.results});
  };

  render() {
    const {planets, starships} = this.state;
    return (
      <div className="App">
        <h1>List of planets</h1>
        <Planet planets={planets}/>
        <hr/>
        <h1>List of starships</h1>
        {starships.map(ship => <Starship key={ship.name} name={ship.name} manufacturer={ship.manufacturer}/>)}
      </div>
    );
  }

}

export default App;
