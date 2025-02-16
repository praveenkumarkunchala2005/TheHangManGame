import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Game() {
  interface Data {
    categories: { [key: string]: { name: string }[] };
  }
  const [data, setData] = useState<Data>({ categories: {} });

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="lg:h-screen md:h-screen sm:h-full w-screen bg-gradient-to-b bg-opacity-80 from-[#1a043a] to-[#151278]" >
        <div className="flex flex-row items-center py-20 lg:pb-20 md:pb-20 pb-8">
          <div className="w-1/3 flex flex-row items-center justify-center">
              <Link to={`/`} ><img src="/icon-back.svg" alt="" /></Link>
          </div>
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-white text-center lg:text-7xl md:text-3xl text-3xl  font-mouse font-extrabold   items-center justify-center">
            Pick a Category
          </h1>
        </div>
        </div>
        <div className="w-full p-8 flex flex-col items-center justify-center">
          <ul className="w-full flex flex-wrap justify-evenly items-center font-mouse font-extrabold">
            {Object.keys(data.categories).map((category) => (
              <li
                className="p-5 m-3 w-full lg:h-40 md:h-16 sm:h-12 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-500 flex justify-center items-center text-center text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                key={category}
              >
                <Link
                  to={`/game/${category}`}
                  className="w-full h-full text-4xl  flex justify-center items-center"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Game;
