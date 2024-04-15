import React from "react";

function Home() {
React.useEffect(() => {
    console.log("The Home Page has mounted");
  }, []);
  return(
    <div><h1>HOMEPAGE</h1></div>
  )
}

export default Home;