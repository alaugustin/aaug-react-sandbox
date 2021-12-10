import React, { useEffect, useState } from 'react';
import "../index.css";

function App() {
  const [support, setSupport] = useState("");

  useEffect(() => {
    const url = "https://reqres.in/api/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setSupport(json.support.text);

        console.log(json.data);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, []);
  return <div><p>{support}</p></div>;
};

export default App;