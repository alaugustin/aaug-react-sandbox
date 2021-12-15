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
    <section className='p-9'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-8'>
        Toggle dark mode
      </button>

      <h1 className='text-5xl mb-8'>Contact our team</h1>

      <div className='grid grid-cols-3 gap-4 mb-16'>
        {
          teamList.map(item =>
            <div key={item.id} className='flex'>
              <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} className='mr-8'/>

              <div className='self-end'>
                <p className='text-3xl font-semibold'>
                  {item.first_name} {item.last_name}
                </p>

                <a href={`mailto:${item.email}`} className='font-light text-blue-600 hover:text-blue-800 hover:underline'>Email {item.first_name} {item.last_name}</a>
              </div>
            </div>
          )
        }
      </div>

      <p className='font-semibold'><i>{support}</i></p>
    </section>
  );
};

export default App;