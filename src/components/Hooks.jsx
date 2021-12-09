import React, { useState } from 'react';

function Hooks() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 class="text-4xl font-normal leading-normal mt-0 mb-2 text-black-800">State Hook</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Click me
            </button>
        </div>
    );
}

export default Hooks;