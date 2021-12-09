import React, { useState } from 'react';

function Hooks() {
    const [count, setCount] = useState(0);
    return (
        <div className="container mx-auto px-4 border-b-2 pt-4 pb-2">
            <h1 class="text-4xl font-normal leading-normal mt-0 mb-2 text-black-800">Hooks</h1>
            <h2>What are hooks?</h2>
            <ul>
                <li>are functions which allows one to “hook into” React state and lifecycle features from function components</li>
                <li>transfer of information
                    <ul>
                        <li>state
                            <ul>
                                <li>local to a component</li>
                            </ul>
                        </li>
                        <li>props
                            <ul>
                                <li>global</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>hooks do not work inside classes</li>
                <li>only call hooks from React function components</li>
                <li>only call hooks at the top level</li>
            </ul>
            <h2>React lifecycle</h2>
            <ul>
                <li>mounting</li>
                <li>updating</li>
                <li>unmounting</li>
            </ul>
            <p><a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">React Lifecycle Methods Diagram</a></p>
        </div>
    );
}

export default Hooks;