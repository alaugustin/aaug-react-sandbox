import React, { useState, useEffect } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect (() => {
        document.title = `You clicked ${count} times`
    });

    return (
        <div className="border-b-2 pt-4 pb-2">
            <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-black-800">useEffect</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                useEffect Click me
            </button>
        </div>
    );
}

export default UseEffect;