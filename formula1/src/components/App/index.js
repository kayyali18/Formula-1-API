import React, { Component } from 'react';
import endpoints from '../../utils/data';
import Endpoint from '../API-endpoint'
import './App.css';

class App extends Component {
  render() {

    const endpointAddress = endpoints.map(address => {
      return <Endpoint name={address} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1>Formula 1 API</h1>
        </header>
        <div className='endpoint-list' >
          {endpointAddress}
        </div>
      </div>
    );
  }
}

export default App;
