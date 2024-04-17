// This componeont will be when a user clicks on a card and displays extra information

import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function ShowIndividualPlayer() {
  const { id } = useParams();
  const [player, setplayer] = React.useState<any>(null);

  React.useEffect(() => {
    async function fetchPlayer() {
      const resp = await fetch(`http://127.0.0.1:4000/api/players/${id}`);
      const playerData = await resp.json();
      setplayer(playerData);
      console.log(playerData);
    }
    fetchPlayer();
  }, [id]);
  if (!player) {
    return <p>Character Loading...</p>;
  }
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={player.image}
        alt={player.name}></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {player.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Team: {player.team}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Position: {player.position}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Nationality: {player.nationality}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Career Appearances: {player.career_appearances}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Career Goals{player.career_goals}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Foot: {player.foot}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Shirt Number: {player.shirt_number}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Bio: {player.bio}
        </p>
      </div>
    </a>
  );
}

export default ShowIndividualPlayer;
