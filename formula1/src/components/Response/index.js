import React from 'react';
import responses from '../../utils/responses';
import './Response.css'

const Response = ({name, clicked}) => {
    const matchingEndpoint = responses[name];
    let printableText = JSON.stringify(matchingEndpoint);
    return (
        <div className={clicked ? 'show' : 'hide' }>
            {printableText}
        </div>
    )
}

export default Response;