import React from "react";
import PlayerCard from "./FiveASideCard";
import { baseUrl } from "../config";

function FiveASide() {
  const [team, setTeam] = React.useState<any>([]);
  const [player, setPlayer] = React.useState<any>(null);
  const [keepEnabled, setKeepEnabled] = React.useState(true);

  function getRandomPlayerId() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
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
  function addPlayerToTeam() {
    if (team.length < 5) {
      const teamClone = structuredClone(team);
      teamClone.push(player);
      setTeam(teamClone);
      setKeepEnabled(false);
      fetchPlayer();
    }
  }
  React.useEffect(() => {
    fetchPlayer();
  }, []);

  return (

    <section className="flex flex-col items-center">
      <h3 className="text-3xl mb-8 text-center mt-8">Choose a player</h3>
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
            Do you want to keep this player or refresh for someone else?
          </p>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={addPlayerToTeam}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Keep
          </button>
          <button
            type="button"
            onClick={fetchPlayer}
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
            Skip
          </button>
        </div>
      </div>
      <h4 className="mb-6 mt-6 text-3xl font-bold">Your 5 a side team</h4>
      <div className="flex flex-wrap justify-center">
  {team?.map((player: any) => {
    return (
      <div key={player.id} className="w-40 m-5">
        {/* Adjust the width and margin to your preference */}
        <PlayerCard
          name={player.name}
          image={player.image}
          club={player.club}
        />
      </div>
    );
  })}
</div>

    </section>
  );
}
export default FiveASide;
