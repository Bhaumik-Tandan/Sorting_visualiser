import React, { useContext } from "react";
import Context from "../../context/context";
function Start() {
  const { arr, setArr, algorithm, bubbleSort, selectionSort, insertionSort } =
    useContext(Context);

  const startSort = async () => {
    if (algorithm === "bubbleSort") bubbleSort();
    else if (algorithm === "selectionSort") selectionSort();
    else if (algorithm === "insertionSort") insertionSort();
    else if (algorithm === "instantSort")
      setArr(arr.slice().sort((a, b) => a - b));
  };
  return (
    <div
      onClick={startSort}
      style={{
        //make it clickable
        cursor: "pointer",
      }}
    >
      NEXT
    </div>
  );
}

export default Start;
