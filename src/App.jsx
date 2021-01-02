import React from "react";
import SlotM from "./SlotMach";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        Welcome to{" "}
        <span style={{ fontWeight: "bold" }}> Slot machine game</span>{" "}
      </h1>

      <SlotM x="@" y="@" z="@" />
      <hr />
      <SlotM x="$" y="#" z="#" />
      <hr />
      <SlotM x="!" y="!" z="!" />
      <hr />
      <SlotM x="$" y="$" z=":" />
    </>
  );
};

export default App;
