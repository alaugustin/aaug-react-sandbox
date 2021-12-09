import React, { Component } from 'react';

function Props(props) {
    // props.name is data from the user defined component props from the component: <Props name = "Encarnacion" />
    return (
        <div className="border-b-2 pt-4 pb-2">
            <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-black-800">Hello Props</h1>
            <p>Welcome {props.name}</p>
        </div>
    );
}

export default Props;