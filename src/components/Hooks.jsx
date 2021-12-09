import React, { useState } from "react";

function Hooks({heading1}) {
    const [count, setCount] = useState(0);
    return (
        <div className="container mx-auto px-4 border-b-2 pt-4 pb-2">
            <h1 class="text-4xl font-normal leading-normal mt-0 mb-2 text-black-800">
                {heading1}
            </h1>

            <h2 class="text-2xl font-normal leading-normal mt-0 mb-2 text-black-800">
                What are hooks?
            </h2>

            <ul className="list-disc pl-6 mb-4">
                <li>
                    are functions which allows one to &ldquo;hook into&rdquo;
                    React state and lifecycle features from function components
                </li>
                <li>
                    transfer of information

                    <ul className="list-disc pl-6">
                        <li>
                            state
                            <ul>
                                <li>local to a component</li>
                            </ul>
                        </li>

                        <li>
                            props
                            <ul className="list-disc pl-6">
                                <li>global</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>hooks do not work inside classes</li>
                <li>only call hooks from React function components</li>
                <li>only call hooks at the top level</li>
            </ul>
            <h2 class="text-2xl font-normal leading-normal mt-0 mb-2 text-black-800">
                React lifecycle
            </h2>
            <ul className="list-disc pl-6">
                <li>mounting</li>
                <li>updating</li>
                <li>unmounting</li>
            </ul>
            <p>
                <a className="no-underline hover:underline text-blue-600" href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
                    React Lifecycle Methods Diagram
                </a>
            </p>
        </div>
    );
}

export default Hooks;


export const Primary = Hooks.bind({});
Primary.args = {
    primary: true,
    isAnchor: false,
    label: 'Button',
};