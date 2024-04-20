import React from "react";
import ShowPlayer from "./ShowPlayer";
import { baseUrl } from "../config";

function PlayerPage() {
  React.useEffect(() => {
    console.log("The PlayerPage has mounted");
  }, []);

  const [footballer, setFootballer] = React.useState([]);

  React.useEffect(() => {
    async function fetchFootballers() {
      const resp = await fetch(`${baseUrl}/players`);
      const playerData = await resp.json();
      console.log(playerData);
      setFootballer(playerData);
    }
    fetchFootballers();
  }, []);

  return (
    <div>
      <h1 className="mb-5 mt-5 ml-5 text-4xl">PlayerPage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {footballer?.map((footballer: any) => {
          return (
            <ShowPlayer
              key={footballer.id}
              name={footballer.name}
              image={footballer.image}
              club={footballer.club}
              id={footballer.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlayerPage;
