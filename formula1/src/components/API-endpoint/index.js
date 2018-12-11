import React, { Component } from 'react';
import './API-endpoint.css'

class Endpoint extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
    }
    render() {
        return(
            <div className='endpoint-container'>
                <h2>
                    {this.props.name}
                </h2>
                <button className='show-btn'>
                    Show Endopoint
                </button>
            </div>
        )
    }
}

export default Endpoint;