import React from 'react';
import responses from '../../utils/responses';

const Response = ({name}) => {
    const matchingEndpoint = responses[name];
    let printableText = JSON.stringify(matchingEndpoint);
    return (
        <div>
            {printableText}
        </div>
    )
}

export default Response;