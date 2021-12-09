import React, { useState } from 'react';

function Hooks() {
    const temp = () =>{};
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('tamarind');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    console.log([{ count: useState(count) }, { age: useState(age) }, { fruit: useState(fruit) }, { todos: useState(todos) }])

    return (
        <div className="container mx-auto px-4 border-b-2 pt-4 pb-2">
            <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-black-800">useState</h2>

            <h3 className="text-1xl font-normal leading-normal mt-0 mb-2 text-black-800">What is use state?</h3>

            <ul className="pb-4">
                <li>called inside a function to add local state to it</li>
                <li>react will preserve the state between two re-renders</li>
                <li>useState returns a pair (destructure into an array)

                    <ul>
                        <li>the current state value</li>
                        <li>a function that helps you update it
                            <ul>
                                <li>called from an event handler or elsewhere</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <p className="font-mono">You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                useState Click me
            </button>
        </div>
    );
}

export default Hooks;