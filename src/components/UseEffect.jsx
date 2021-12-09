import React, { useState, useEffect } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div className="container mx-auto px-4 border-b-2 pt-4 pb-2">
            <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-black-800">
                useEffect
            </h2>

            <h3 className="text-1xl font-normal leading-normal mt-0 mb-2 text-black-800">
                What is use effect?
            </h3>

            <ul className="list-disc pl-6 mb-4">
                <li>
                    React &ldquo;side effects&rdquo;
                    <ul className="list-disc pl-6">
                        <li>
                            data fetching, subscriptions, or manually changing
                            the DOM from React components
                        </li>
                    </ul>
                </li>
                <li>
                    adds the ability for one to perform side effects from a
                    function component
                </li>
                <li>
                    serves the same purpose as componentDidMount,
                    componentDidUpdate, and componentWillUnmount in React
                    classes but unified to a single API
                </li>
                <li>
                    tells react to run your &ldquo;effect&rdquo; function after
                    flushing changes to the DOM
                </li>
                <li>
                    declared inside the component so the have access to its
                    props and state
                </li>
                <li>runs after every render by default</li>
            </ul>

            <p className="font-mono">You clicked {count} times</p>

            <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                useEffect Click me
            </button>
        </div>
    );
}

export default UseEffect;
