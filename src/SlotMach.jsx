import React from "react";

const SlotM = (props) => {
  //   //   let x = "@";
  //   //   let y = "@";
  //   //   let z = "@";
  let x = props.x;
  let y = props.y;
  let z = props.z;
  if (x === y && x === z) {
    return (
      <>
        <h1>
          {x} {y} {z}
        </h1>
        <h1> This is Matching :) </h1>
        <hr />
      </>
    );
  } else {
    return (
      <>
        <h1>
          {x} {y} {z}
        </h1>
        <h1> This is not Matching :( </h1>
        <hr />
      </>
    );
  }
};

export default SlotM;
