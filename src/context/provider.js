import React, { useState,useEffect } from 'react';
import Context from './context';
import { generateArray } from '../utility/generateArray';

const Provider = ({ children }) => {
    const [arr, setArr] = useState([]);
    const [arrSize, setArrSize] = useState(50);
    const [speed, setSpeed] = useState(50);
    const [colorArr, setColorArr] = useState([]);
    const [algorithm, setAlgorithm] = useState("bubbleSort");
    const [start, setStart] = useState(false);

    useEffect(() => {
        setArr(generateArray(arrSize));
        var tArr=[];
        for(var i=0;i<arrSize;i++)
            tArr.push('normal');
        setColorArr(tArr);
    }, [arrSize]);

    return (
        <Context.Provider
            value={{ arr, setArr,arrSize, setArrSize,speed, setSpeed,colorArr, setColorArr,algorithm, setAlgorithm, start, setStart }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;