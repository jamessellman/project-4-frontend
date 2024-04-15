import React from "react";

function PlayerPage() {
React.useEffect(() => {
    console.log("The PlayerPage has mounted");
  }, []);
  return(
    <div><h1>PlayerPage</h1></div>
  )
}

export default PlayerPage;