import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";

// console.log(Sdata[0].sname);

const favSeries = "netflix";

const FavS = () => {
  if (favSeries === "netflix") {
    return <Netflix />;
  } else {
    return <Amazon />;
  }
};

const App = () => (
  <>
    <h1 className="heading_style">List of top 5 Netflix Series 2020</h1>
    <FavS />
  </>
);

export default App;
