import React from "react";
import ShowPlayer from "./ShowPlayer";
import { baseUrl } from "../config";

function PlayerPage() {
  React.useEffect(() => {
    console.log("The PlayerPage has mounted");
  }, []);

  const [footballer, setFootballer] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    async function fetchFootballers() {
      const resp = await fetch(`${baseUrl}/players`);
      const playerData = await resp.json();
      console.log(playerData);
      setFootballer(playerData);
    }
    fetchFootballers();
  }, []);

  function handleDropdownChange(e: any) {
    setValue(e.currentTarget.value);
  }
  function handleSearchBarChange(e: any) {
    setSearch(e.currentTarget.value);
  }
  const dropdownTeamOptions = [
    { label: "Select Team", value: "" },
    { label: "AFC Bournemouth", value: "AFC Bournemouth" },
    { label: "Arsenal", value: "Arsenal" },
    { label: "Aston Villa", value: "Aston Villa" },
    { label: "Brentford", value: "Brentford" },
    { label: "Brighton & Hove Albion", value: "Brighton & Hove Albion" },
    { label: "Burnley", value: "Burnley" },
    { label: "Chelsea", value: "Chelsea" },
    { label: "Crystal Palace", value: "Crystal Palace" },
    { label: "Everton", value: "Everton" },
    { label: "Fulham", value: "Fulham" },
    { label: "Liverpool", value: "Liverpool" },
    { label: "Luton Town", value: "Luton Town" },
    { label: "Manchester City", value: "Manchester City" },
    { label: "Manchester United", value: "Manchester United" },
    { label: "Newcastle United", value: "Newcastle United" },
    { label: "Nottingham Forest", value: "Nottingham Forest" },
    { label: "Sheffield United", value: "Sheffield United" },
    { label: "Tottenham Hotspur", value: "Tottenham Hotspur" },
    { label: "West Ham United", value: "West Ham United" },
    { label: "Wolverhampton Wanderers", value: "Wolverhampton Wanderers" },
  ];
function filterPlayers() {
  if (!footballer) {
    return []; // Return an empty array if footballer is undefined
  }

  return footballer.filter((player: any) => {
    return (
      (search === "" ||
        player.name?.toLowerCase().includes(search.toLowerCase())) 
      //   &&
      // (value === "" || player[0].team?.includes(value))
    );
  });
}
  return (
    <div>
      <h1 className="text-3xl mb-8 text-center mt-8">PlayerPage</h1>
      <form className="max-w-md mx-auto">
  <input
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-800 text-white"
    placeholder="Search Player"
    type="text"
    onChange={handleSearchBarChange}
    id="searchBar"
    name="searchBar"
  />
</form>
      {/* <div className="select ">
        <label className="">
          <select
            value={value}
            onChange={handleDropdownChange}
            className="">
            {dropdownTeamOptions.map((option: any) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </label>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {filterPlayers()?.map((footballer: any) => {
          return <ShowPlayer key={footballer.id} {...footballer} />;
        })}
      </div>
    </div>
  );
}

export default PlayerPage;
