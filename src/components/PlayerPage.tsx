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
    <section>
    <div>
      <h1 className="text-3xl mb-8 text-center mt-8">PlayerPage</h1>
      <form className="max-w-md mx-auto">
  <input
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-800 text-white "
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 ml-10 ">
        {filterPlayers()?.map((footballer: any) => {
          return <ShowPlayer key={footballer.id} {...footballer} />;
        })}
      </div>
    </div>
    <footer className=" bottom-0 left-0 w-full bg-white shadow dark:bg-gray-800 mt-5">
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

export default PlayerPage;
