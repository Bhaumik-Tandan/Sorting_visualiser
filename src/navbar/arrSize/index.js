import React, { useContext } from "react";
import Context from "../../context/context";
function ArrSize() {
  const { setArrSize } = useContext(Context);
  return (
    <div>
      Size of Array
      <input
        type="range"
        min="5"
        max="100"
        step="1"
        onChange={(e) => {
          setArrSize(e.target.value);
        }}
      />
    </div>
  );
}

export default ArrSize;
