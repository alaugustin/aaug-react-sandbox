import React, { useState } from "react";

function Hooks({useStateH2}) {
    const temp = () => {};
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState("tamarind");
    const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

    console.log([
        { count: useState(count) },
        { age: useState(age) },
        { fruit: useState(fruit) },
        { todos: useState(todos) },
    ]);

    return (
        <div className="container mx-auto px-4 border-b-2 pt-4 pb-2">
            <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-black-800">
                {useStateH2}
            </h2>

            <h3 className="text-1xl font-normal leading-normal mt-0 mb-2 text-black-800">
                What is use state?
            </h3>

            <ul className="list-disc pl-6 mb-4">
                <li>called inside a function to add local state to it</li>
                <li>react will preserve the state between two re-renders</li>
                <li>
                    useState returns a pair (destructured into an array)
                    <ul className="list-disc pl-6">
                        <li>the current state value</li>
                        <li>
                            a function that helps you update it
                            <ul className="list-disc pl-6">
                                <li>
                                    called from an event handler or elsewhere
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <ClickCounter buttonLabel={buttonLabel} />
        </div>
    );
}

export default Hooks;
