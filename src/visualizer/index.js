import React, { useContext } from "react";
import Context from "../context/context";
import Bar from "./bar";
function Visualizer() {
  const { arr, colorArr } = useContext(Context);
  return (
    //show vertical bar for each element in the array
    <center className="array-container">
      {arr.map((value, index) => (
        <Bar key={index} value={value} color={colorArr[index]}></Bar>
      ))}
    </center>
  );
}

export default Visualizer;
