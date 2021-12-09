import React, { useState, useEffect } from "react";

function ClickCounter({ buttonLabel}) {
    const [count, setCount] = useState(0);

    return (
        <>

            <p className="font-mono">You clicked {count} times</p>

            <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                {buttonLabel}
            </button>
        </>
    );
}

export default ClickCounter;
