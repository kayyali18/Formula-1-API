import React, { Component } from 'react';
import endpoints from '../../utils/data';
import Response from '../Response';
import Endpoint from '../API-endpoint';
import './App.css';

class App extends Component {
  render() {

    const endpointAddress = endpoints.map((address, i) => {
      return (
        <div key={Date.now() * i}>
          <Endpoint name={address} key={Date.now() + i}/>
          <Response name={address} key={i}/>
        </div>
      )
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
