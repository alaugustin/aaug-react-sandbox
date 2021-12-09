import React, { Component } from "react";

function Props({ name }) {
    // props.name is data from the user defined component props from the component: <Props name = "Encarnacion" />
    return (
        <div className="container mx-auto px-4 border-b-2 pt-4 pb-2">
            <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-black-800">
                What are Props?
            </h2>

            <ul className="list-disc pl-6 mb-4">
                <li>
                    a single object argument with data which returns a react
                    element
                </li>
            </ul>

            <p className="font-mono pb-4">
                The name in the example below is returened from the component
                props
            </p>

            <p className="font-mono">
                Welcome <span className="bg-black text-white p-1">{name}</span>
            </p>
        </div>
    );
}

export default Props;
