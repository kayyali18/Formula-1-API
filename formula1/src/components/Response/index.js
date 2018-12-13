import React from 'react';
import responses from '../../utils/responses';
import './Response.css';
import JSONPretty from 'react-json-pretty';

const Response = ({name, clicked}) => {
    const matchingEndpoint = responses[name];
    return (
        <div className={clicked ? 'show' : 'hide' }>
            <JSONPretty id="json-pretty" json={matchingEndpoint}></JSONPretty>
        </div>
    )
}

export default Response;