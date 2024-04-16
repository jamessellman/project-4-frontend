import React from "react";

function PlayerPage() {
  React.useEffect(() => {
    console.log("The PlayerPage has mounted");
  }, []);

  const [footballer, setFootballer] = React.useState([]);

  React.useEffect(() => {
    async function fetchFootballers() {
      const resp = await fetch("http://127.0.0.1:4000/api/players");
      const playerData = await resp.json();
      console.log(playerData)
      setFootballer(playerData);
    }
    fetchFootballers();
  },[]);


  return (
    <div>
      <h1>PlayerPage</h1>
      
    </div>
  );
}

export default PlayerPage;
