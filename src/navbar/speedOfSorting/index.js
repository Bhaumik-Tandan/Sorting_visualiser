import React, { useContext } from "react";
import Context from "../../context/context";
function SpeedOfSorting() {
  const { setSpeedOfSorting } = useContext(Context);
  return (
    <div>
      Speed of Sorting
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        onChange={(e) => {
          setSpeedOfSorting(e.target.value);
        }}
      />
    </div>
  );
}

export default SpeedOfSorting;
