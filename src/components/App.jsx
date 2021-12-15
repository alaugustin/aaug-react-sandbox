import React, { useEffect, useState } from 'react';
import "../index.css";

function App() {
  const [support, setSupport] = useState("");
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    const url = "https://reqres.in/api/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setSupport(json.support.text);
        setTeamList(json.data);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className='p-9 dark:bg-black'>
      <h1 className='text-5xl mb-8'>Contact our team</h1>

      <div className='flex justify-between mb-16'>
        {
          teamList.map(item =>
            <div key={item.id} className='border-solid border-2 border-grey-600 py-4 px-8 rounded-md'>
              <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} className='rounded-full flex items-center justify-center mb-2'/>
              <p>
                {item.first_name} {item.last_name}
              </p>

              <a href={`mailto:${item.email}`} className='text-blue-600 hover:text-blue-800 hover:underline'>Email {item.first_name} {item.last_name}</a>
            </div>
          )
        }
      </div>

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-8'>
        Toggle dark mode
      </button>

      <p>{support}</p>
    </section>
  );
};

export default App;