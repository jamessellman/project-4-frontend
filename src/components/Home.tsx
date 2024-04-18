import React from "react";

function Home() {
  const [player, setPlayer] = React.useState<any>(null);

  function getRandomPlayerId() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    return randomNumber;
  }
  async function fetchPlayer() {
    const randomNumber = getRandomPlayerId();
    const resp = await fetch(
      `http://127.0.0.1:4000/api/players/${randomNumber}`
    );
    const playerData = await resp.json();
    setPlayer(playerData);
  }
  React.useEffect(() => {
    fetchPlayer();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          My Footballers Database
        </h1>
        <p className="text-lg text-gray-700 mb-8">The footballer DB!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Product 1
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Product 2
            </h2>
            <p className="text-gray-700">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Product 3
            </h2>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
