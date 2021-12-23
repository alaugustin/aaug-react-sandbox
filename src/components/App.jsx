import React, { useEffect, useState } from 'react';
import "../index.css";

/* --------------------------------------------------
// 📓 ES6 fundimentals
// -- array/object destructuring
// -- spread operator
// -- map, filter and reduce "handles error"
// -- fetch
// -- try/catch
// -- callback function
// -- asynchronous coding
// -- async/await
// 📓 Rect fundimentals
// -- State and useState and useEffect
-------------------------------------------------- */

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

  function clickHand() {
      console.log("button clicked")
  }

  return (
      <section className="p-9">
          <button onClick={clickHand} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-8">
              Toggle dark mode
          </button>

          <h1 className="text-5xl lg:text-7xl mb-8">Contact Our Team</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {teamList.map((item) => (
                  <div
                      key={item.id}
                      className="border-b-4 border-blue-300 pb-16 pt-8 md:border-none md:p-0 flex flex-col md:flex-row"
                  >
                      <img
                          src={item.avatar}
                          alt={`${item.first_name} ${item.last_name}`}
                          className="mb-8 md:mb-0 shrink-0 min-w-min max-w-xs border-4 border-blue-300 rounded-full md:mr-8"
                      />

                      <div className="md:self-end">
                          <p className="text-2xl lg:text-3xl font-semibold">
                              {item.first_name} {item.last_name}
                          </p>

                          <a
                              href={`mailto:${item.email}`}
                              className="text-lg lg:text-2xl font-light text-blue-600 hover:text-blue-800 hover:underline"
                          >
                              Email {item.first_name} {item.last_name}
                          </a>
                      </div>
                  </div>
              ))}
          </div>

          <p className="font-semibold">
              <i>{support}</i>
          </p>
      </section>
  );
};

export default App;
