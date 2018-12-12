import React, { Component } from 'react';
import endpoints from '../../utils/data';
import Endpoint from '../API-endpoint';
import './App.css';

class App extends Component {
  render() {

    const endpointAddress = endpoints.map((address, i) => {
      return (
        <div className="endpoint-title" key={Date.now() * i}>
          <Endpoint name={address} key={Date.now() + i} />
        </div>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1>Formula 1 API</h1>
        </header>
        <p>This is the Formula 1 API.</p>
        <p>This page is for developer to explore the endpoints and get examples of the responses returned.</p>
        <div className='endpoint-list' >
          {endpointAddress}
        </div>
      </div>
    );
  }
}

export default App;
