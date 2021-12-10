import React, { useEffect } from 'react';
import "../index.css";

function App() {

  useEffect(() => {
    const url = "https://reqres.in/api/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, []);
  return <div></div>;
};

export default App;