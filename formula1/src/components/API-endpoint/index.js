import React, { Component } from 'react';
import Response from '../Response';
import './API-endpoint.css';

class Endpoint extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
    }

    showHide = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <div className='endpoint-container'>
              <div className="title-container">
                <h2>
                    {this.props.name}
                </h2>
                <button onClick={this.showHide} className='show-btn'>
                    Show Response/Example
                </button>
              </div>
              <Response clicked={this.state.clicked} name={this.props.name}/>
            </div>
        )
    }
}

export default Endpoint;