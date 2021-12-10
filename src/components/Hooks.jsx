import React, { useState } from "react";
import List from "./List";

function Hooks({ heading1, hooksH2, listData}) {
    const [count, setCount] = useState(0);
    return (
        <div className="container mx-auto px-4 border-b-2 pt-4 pb-2">
            <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-black-800">
                {heading1}
            </h1>

            <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-black-800">
                {hooksH2[0]}
            </h2>

            <ul className="pl-6 mb-4">
                <li className="list-disc ">
                    are functions which allows one to &ldquo;hook into&rdquo;
                    React state and lifecycle features from function components
                </li>
                <li className="list-disc ">
                    transfer of information

                    <ul className="pl-6">
                        <li className="list-disc ">
                            state
                            <ul>
                                <li className="list-disc ">local to a component</li>
                            </ul>
                        </li>

                        <li className="list-disc ">
                            props
                            <ul className="pl-6">
                                <li className="list-disc ">global</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="list-disc ">hooks do not work inside classes</li>
                <li className="list-disc ">only call hooks from React function components</li>
                <li className="list-disc ">only call hooks at the top level</li>
            </ul>
            <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-black-800">
                {hooksH2[1]}
            </h2>

            <List listData={listData}/>

            <p>
                <a className="no-underline hover:underline text-blue-600" href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
                    React Lifecycle Methods Diagram
                </a>
            </p>
        </div>
    );
}

export default Hooks;