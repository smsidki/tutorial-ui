import React from 'react';

const Planet = ({planets}) => {
  return (
    <>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {planets.map(planet => {
            return(
              <tr key={planet.name}>
                <td>{planet.name}</td>
                <td>{planet.climate}</td>
                <td>{planet.population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

Planet.defaultProps = {
  planets: []
};

export default Planet;