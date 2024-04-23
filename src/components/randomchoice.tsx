import React from "react";
import { baseUrl } from "../config";

function Random() {
  const [player, setPlayer] = React.useState<any>(null);
  const [player2, setPlayer2] = React.useState<any>(null);
  const [keepEnabled, setKeepEnabled] = React.useState(true);

  function getRandomPlayerId() {
    const randomNumber = Math.floor(Math.random() * 14) + 1;
    console.log(randomNumber);
    return randomNumber;
  }

  async function fetchPlayer() {
    const randomNumber = getRandomPlayerId();
    const resp = await fetch(`${baseUrl}/players/${randomNumber}`);
    const playerData = await resp.json();
    setPlayer(playerData);
    setKeepEnabled(true);
  }

  function getRandomPlayerId2() {
    const randomNumber = Math.floor(Math.random() * 14) + 1;
    console.log(randomNumber);
    return randomNumber;
  }

  async function fetchPlayer2() {
    const randomNumber = getRandomPlayerId2();
    const resp = await fetch(`${baseUrl}/players/${randomNumber}`);
    const playerData = await resp.json();
    setPlayer2(playerData);
    setKeepEnabled(true);
  }
  React.useEffect(() => {
    fetchPlayer();
    fetchPlayer2();
  }, []);
  return (
    <section>
  <h3 className="text-3xl mb-8 text-center mt-8">
    Choose your favourite player!
  </h3>
  <div className="flex justify-center">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
      <div className="h-64 overflow-hidden rounded-t-lg">
        <img
          className="object-cover w-full h-full"
          src={player && player.image}
          alt={player && player.name}
        />
      </div>
      
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {player && player.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          If this player is your favourite, click below!
        </p>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={fetchPlayer2}
          className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
          ✅
        </button>
      </div>
    </div>
    
    <div className="flex justify-center items-center">
      <div className="text-3xl font-bold mx-4">v</div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
      <div className="h-64 overflow-hidden rounded-t-lg">
        <img
          className="object-cover w-full h-full"
          src={player2 && player2.image}
          alt={player2 && player2.name}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {player2 && player2.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          If this player is your favourite, click below!
        </p>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={fetchPlayer}
          className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
          ✅
        </button>
      </div>
    </div>
  </div>
  <footer className=" fixed bottom-0 left-0 w-full bg-white shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024.{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              
            </a>
            All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
</section>
  );
}
export default Random;
