import React from "react";
import PlayerCard from "./FiveASideCard";
import { baseUrl } from "../config";

function FiveASide() {
  const [team, setTeam] = React.useState<any>([]);
  const [player, setPlayer] = React.useState<any>(null);
  const [keepEnabled, setKeepEnabled] = React.useState(true);

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
    setKeepEnabled(true);
  }
  function addPlayerToTeam() {
    if (team.length < 5) {
      const teamClone = structuredClone(team);
      teamClone.push(player);
      setTeam(teamClone);
      setKeepEnabled(false);
      // ! Make sure the user can't actually keep the pokemon multiple times before the next pokemon
      // ! has been fetched.
      fetchPlayer();
    }
  }
  React.useEffect(() => {
    fetchPlayer();
  }, []);

  return (
    //   container to show Random player

    <section>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h3>Choose a player</h3>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={player && player.image}
            alt={player && player.name}
          />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {player && player.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Do you want to keep this player or refresh for someone else?
          </p>
          <button
            type="button" onClick={addPlayerToTeam}
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
      {/* this div will show the cards for the 5 a side team */}
      <div>
        <h4>Your 5 a side team</h4>
        {team?.map((player: any) => {
          return (
            <PlayerCard
              key={player.id}
              name={player.name}
              image={player.image}
              club={player.club}
            />
          );
        })}
      </div>
    </section>
  );
}
export default FiveASide;
