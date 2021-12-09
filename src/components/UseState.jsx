import React, { useState } from 'react';

function Hooks() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('tamarind');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    console.log([{ count: useState(count) }, { age: useState(age) }, { fruit: useState(fruit) }, { todos: useState(todos) }])

    return (
        <div className="border-b-2 pt-4 pb-2">
            <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-black-800">useState</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                useState Click me
            </button>
        </div>
    );
}

export default Hooks;