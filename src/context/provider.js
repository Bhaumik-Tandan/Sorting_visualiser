import React, { useState, useEffect } from "react";
import Context from "./context";
import { generateArray } from "../utility/generateArray";
import { Sleep } from "../utility/sleep";

const Provider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [arrSize, setArrSize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [colorArr, setColorArr] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [start, setStart] = useState(false);

  useEffect(() => {
    setArr(generateArray(arrSize));
    var tArr = [];
    for (var i = 0; i < arrSize; i++) tArr.push("normal");
    setColorArr(tArr);
  }, [arrSize]);

  const setColorOfIndex = (indexes, colorMethod) => {
    var tArr = [...colorArr];
    for (var i = 0; i < indexes.length; i++) tArr[i] = colorMethod;
    setColorArr(tArr);
  };

  const swap = (a, b) => {
    var tArr = [...arr];
    var temp = tArr[a];
    tArr[a] = tArr[b];
    tArr[b] = temp;
    setArr(tArr);
  };

  const setIndexInArray = (indexes, values) => {
    var tArr = [...arr];
    for (var i = 0; i < indexes.length; i++) tArr[indexes[i]] = values[i];
    setArr(tArr);
  };

  const bubbleSort = async () => {
    for (var i = 0; i < arrSize - 1; i++)
      for (var j = 0; j < arrSize - i - 1; j++) {
        setColorOfIndex([j, j + 1], "comparing");
        // await Sleep(100);
        if (arr[j] > arr[j + 1]) {
          setColorOfIndex([j, j + 1], "wrong_position");
          // await Sleep(100);
          setColorOfIndex([j, j + 1], "swapping");
          swap(j, j + 1);
          // await Sleep(100);
          setColorOfIndex([j, j + 1], "normal");
          continue;
        }
        setColorOfIndex([j, j + 1], "correct_position");
        // await Sleep(100);
        setColorOfIndex([j, j + 1], "normal");
      }
  };

  const selectionSort = () => {
    for (var i = 0; i < arrSize - 1; i++) {
      var min_idx = i;
      for (var j = i + 1; j < arrSize; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }
      if (min_idx != i) {
        swap(i, min_idx);
      }
    }
  };

  const insertionSort = () => {
    var i, key, j;
    for (i = 1; i < arrSize; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        setIndexInArray([j + 1], [arr[j]]);
        j = j - 1;
      }
      setIndexInArray([j + 1], [key]);
    }
  };

  return (
    <Context.Provider
      value={{
        arr,
        setArr,
        arrSize,
        setArrSize,
        speed,
        setSpeed,
        colorArr,
        setColorArr,
        algorithm,
        setAlgorithm,
        start,
        setStart,
        bubbleSort,
        selectionSort,
        insertionSort,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
