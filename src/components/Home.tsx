import React from "react";
import { baseUrl } from "../config";

function Home() {
  const [player, setPlayer] = React.useState<any>([]);

  function getRandomPlayerId() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    return randomNumber;
  }

  async function fetchPlayer() {
    const randomNumber = getRandomPlayerId();
    const resp = await fetch(
      `${baseUrl}/players/${randomNumber}`
    );
    const playerData = await resp.json();
    setPlayer(playerData);
  }
  React.useEffect(() => {
    fetchPlayer();
  }, []);

  console.log(player);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          My Footballers Database
        </h1>
        <p className="text-lg text-gray-700 mb-4">The footballer DB!</p>
        <div className="flex justify-center items-center h-screen mb-5">
          <div className="w-2/3 h-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* <!-- Image container --> */}
            <div className="w-full h-2/3 overflow-hidden">
              <img
                className="w-full h-full object-center"
                src={player && player.image}
                alt="Image"
              />
            </div>
            {/* <!-- Name container --> */}
            <div className="w-full h-1/3 p-4">
              <h2 className="text-xl font-semibold">{player && player.name}</h2>
              <h3 className="text-l font-semibold">{player && player.team}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
